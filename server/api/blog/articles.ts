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
  options?: {
    slug?: string;
    highlighted?: boolean;
    landingPage?: boolean;
    relatedArticles?: boolean;
    categories?: number[];
  },
) => {
  // required fields
  const data = articlesData.filter((article) => article.title && article.imageList?.image);

  if (options?.slug?.length) {
    return data.filter((article) => {
      const slug = getTranslation(article, 'slug', locale);

      return slug == options.slug;
    });
  }

  if (options?.highlighted) {
    return data.filter((article) => article.highlight?.enabled);
  }

  if (options?.landingPage) {
    return data.filter((article) => article.landingPage);
  }

  if (options?.categories) {
    return data.filter((article) => options.categories?.some((categoryId) => article.categories.includes(categoryId)));
  }

  return articlesData;
};

const getRelatedArticles = (locale: string, articleId: number, categories: number[]) => {
  const articles = getArticles(locale, { categories: categories });

  return articles.filter((article) => article.id != articleId);
};

export default defineEventHandler((event): Article[] => {
  const { locale, slug, highlighted, landingPage, relatedArticles } = getQuery(event);

  const data = getArticles(locale as string, {
    slug: slug as string,
    highlighted: highlighted as boolean,
    landingPage: landingPage as boolean,
    relatedArticles: relatedArticles as boolean,
  });

  let related = [];
  if (relatedArticles as boolean) {
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const articles: any = data.map((article: any) => ({
    ...article,
    related: !!relatedArticles ? getRelatedArticles(locale as string, article.id, article.categories) : null,
    categories: getCategories(article.categories),
  }));

  return getFormattedDataByLocale(getDataOrderedByDate(articles), locale as string);
});
