import type { Article } from '~/models/blog.model';
import { getFormattedDataByLocale, getDataOrderedByDate } from '~/utils/api.util';
import { data as articlesData } from '../../data/blog/articles';
import { data as categoriesData } from '../../data/blog/categories';

const getCategories = (ids: number[]) => {
  return categoriesData.filter((category) => ids.includes(category.id));
};

const getArticlesByCategory = (categoryId: number) => {
  const data = articlesData.filter((article) => article.categories.includes(categoryId));
  return getDataOrderedByDate(data);
};

const getArticles = () => {
  return getDataOrderedByDate(articlesData);
};

export default defineEventHandler((event): Article[] => {
  const { locale, category } = getQuery(event);

  const data = category ? getArticlesByCategory(category as number) : getArticles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const articles: any = data.map((article: any) => ({
    ...article,
    categories: getCategories(article.categories),
    // teamMembers: getTeamMembersByIds(item.teamMembers), // Substitui os IDs pelos membros da equipa
  }));

  return getFormattedDataByLocale(articles, locale as string);
});
