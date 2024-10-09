import type { ArticleCategory } from '~/models/blog.model';
import { getFormattedDataByLocale, getDataOrderedByDate } from '~/utils/api.util';
import { data as categoriesData } from '../../data/blog/categories';
import { data as articlesData } from '../../data/blog/articles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTranslation(category: any, field: any, locale: string): string | undefined {
  return category?.[field]?.translations[locale as keyof typeof category.title.translations];
}

const getArticles = (categoryId: number) => {
  const articles = articlesData.filter((article) => article.categories.includes(categoryId));
  return getDataOrderedByDate(articles);
};

const getCategories = (
  locale: string,
  options?: { slug?: string; landingPage?: boolean; slideshow?: boolean; searchQuery?: string },
) => {
  // required fields
  const data = categoriesData.filter((category) => category.title && category.imageList?.image);

  if (options?.slug?.length) {
    return data.filter((category) => {
      const slug = getTranslation(category, 'slug', locale);

      return slug == options.slug;
    });
  }

  if (options?.searchQuery?.length) {
    const searchQuery = options.searchQuery.toLowerCase();

    return data.filter((category) => {
      const title = getTranslation(category, 'title', locale)?.toLocaleLowerCase();

      return title?.includes(searchQuery);
    });
  }

  if (options?.slideshow) {
    return data.filter((category) => category.slideshow);
  }

  if (options?.landingPage) {
    return data.filter((category) => category.landingPage);
  }

  return data;
};

export default defineEventHandler((event): ArticleCategory[] => {
  const { locale, slug, landingPage, slideshow, includeArticles, searchQuery } = getQuery(event);

  let categories = getCategories(locale as string, {
    slug: slug as string,
    landingPage: landingPage as boolean,
    slideshow: slideshow as boolean,
    searchQuery: searchQuery as string,
  });

  if (includeArticles) {
    categories = categories.map((category) => ({
      ...category,
      articles: getArticles(category.id),
    }));
  }

  return getFormattedDataByLocale(categories, locale as string);
});
