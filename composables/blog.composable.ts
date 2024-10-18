import { Routes } from '~/models/routes.model';
import type { Article, ArticleCategory } from '../models/blog.model';
import type { TeamMember } from '~/models/team.model';

export const useBlog = () => {
  const { locale } = useI18n();
  const localePath = useLocalePath();

  const getArticlesData = async (options?: {
    slug?: string;
    categoryId?: number;
    highlighted?: boolean;
    landingPage?: boolean;
  }) => {
    const key = `articles-${JSON.stringify(options)}`;

    const { status, data } = await useAsyncData<Article[]>(key, () =>
      $fetch('/api/blog/articles', {
        query: {
          locale: locale.value,
          slug: options?.slug,
          categoryId: options?.categoryId,
          highlighted: options?.highlighted,
          landingPage: options?.landingPage,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getCategoriesData = async (options?: {
    slug?: string;
    includeArticles?: boolean;
    slideshow?: boolean;
    landingPage?: boolean;
    searchQuery?: string;
  }) => {
    const key = `categories-${JSON.stringify(options)}`;

    const { status, data } = await useAsyncData<ArticleCategory[]>(key, () =>
      $fetch('/api/blog/categories', {
        query: {
          locale: locale.value,
          slug: options?.slug,
          includeArticles: options?.includeArticles,
          slideshow: options?.slideshow,
          landingPage: options?.landingPage,
          searchQuery: options?.searchQuery,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getAuthorsData = async (options?: { slug?: string }) => {
    const key = `articles-${JSON.stringify(options)}`;

    const { status, data } = await useAsyncData<TeamMember[]>(key, () =>
      $fetch('/api/blog/authors', {
        query: {
          locale: locale.value,
          slug: options?.slug,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const buildBlogPage = async () => {
    try {
      const [highlightedArticle, articlesLandingPage, categoriesSlideshow, categoriesLandingPage] = await Promise.all([
        getArticlesData({ highlighted: true }),
        getArticlesData({ landingPage: true }),
        getCategoriesData({ slideshow: true }),
        getCategoriesData({ landingPage: true, includeArticles: true }),
      ]);

      return {
        highlightedArticle: highlightedArticle.data.value?.[0],
        articlesLandingPage: articlesLandingPage.data.value?.slice(0, 4),
        categoriesSlideshow: categoriesSlideshow.data.value,
        categoriesLandingPage_1: categoriesLandingPage.data.value?.[0],
        categoriesLandingPage_2: categoriesLandingPage.data.value?.[1],
      };
    } catch (error) {
      return null;
    }
  };

  const getCategoryLink = (slug: string) => {
    return localePath({ name: Routes.BLOG_CATEGORIES_SLUG, params: { slug } });
  };

  const getArticleLink = (slug: string) => {
    return localePath({ name: Routes.BLOG_SLUG, params: { slug } });
  };

  return {
    getArticlesData,
    buildBlogPage,
    getCategoriesData,
    getCategoryLink,
    getArticleLink,
    getAuthorsData,
  };
};
