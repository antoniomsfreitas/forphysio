import { TeamMember } from '~/models/team.model';
import { data as articlesData } from '../../data/blog/articles';
import { data as teamData } from '../../data/team/teamMembers';
import { getFormattedDataByLocale } from '~/utils/api.util';

const getTeamMember = (options?: { id?: number; slug?: string }) => {
  if (options?.id) {
    return teamData.filter((member) => member.id === options.id);
  }

  if (options?.slug) {
    return teamData.filter((member) => member.slug === options.slug);
  }
};

const getAuthors = (slug?: string) => {
  if (slug?.length) {
    const member = getTeamMember({ slug: slug });

    if (!member?.[0]) return null;

    const articles = articlesData.filter((article) => article.author == member[0].id);

    return member.map((item) => ({
      ...item,
      articles,
    }));
  }

  const membersIds = Array.from(new Set(articlesData.map((article) => article.author)));
  return membersIds.map((id) => getTeamMember({ id: id })?.[0]);
};

export default defineEventHandler((event): TeamMember[] => {
  const { locale, slug } = getQuery(event);

  const data = getAuthors(slug as string);

  return getFormattedDataByLocale(data, locale as string);
});
