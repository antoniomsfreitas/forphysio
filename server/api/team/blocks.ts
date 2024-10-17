import { getFormattedDataByLocale } from '~/utils/api.util';
import { TeamPage } from '~/models/team.model';
import { data as blocks } from '../../data/team/blocks';

export default defineEventHandler((event): TeamPage => {
  const { locale } = getQuery(event);

  return getFormattedDataByLocale(blocks, locale as string);
});
