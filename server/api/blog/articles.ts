import type { Article } from '~/models/blog.model';
import { getFormattedDataByLocale, getDataOrderedByDate } from '~/utils/api.util';
import { data as articlesData } from '../../data/blog/articles';
import { data as categoriesData } from '../../data/blog/categories';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTranslation(category: any, field: any, locale: string): string | undefined {
  return category?.[field]?.translations[locale as keyof typeof category.title.translations];
}

const getCategories = (ids: number[]) => {
  return categoriesData.filter((category) => ids.includes(category.id));
};

const getArticles = (
  locale: string,
  options?: { slug?: string; category?: number; highlighted?: boolean; landingPage?: boolean },
) => {
  // required fields
  const data = articlesData.filter((article) => article.title && article.imageList?.image);

  if (options?.slug?.length) {
    return data.filter((article) => {
      const slug = getTranslation(article, 'slug', locale);

      return slug == options.slug;
    });
  }

  if (options?.category !== undefined && options.category > 0) {
    const category = options.category;
    return data.filter((article) => article.categories.includes(category));
  }

  if (options?.highlighted) {
    return data.filter((article) => article.highlight?.enabled);
  }

  if (options?.landingPage) {
    return data.filter((article) => article.landingPage);
  }

  return getDataOrderedByDate(articlesData);
};

export default defineEventHandler((event): Article[] => {
  const { locale, slug, category, highlighted, landingPage } = getQuery(event);

  const data = getArticles(locale as string, {
    slug: slug as string,
    category: category as number,
    highlighted: highlighted as boolean,
    landingPage: landingPage as boolean,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const articles: any = data.map((article: any) => ({
    ...article,
    categories: getCategories(article.categories),
    // teamMembers: getTeamMembersByIds(item.teamMembers), // Substitui os IDs pelos membros da equipa
  }));

  return getFormattedDataByLocale(articles, locale as string);
});
