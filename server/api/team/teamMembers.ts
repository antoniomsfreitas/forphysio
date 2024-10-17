import { getFormattedDataByLocale } from '~/utils/api.util';
import { TeamMember } from '~/models/team.model';
import { data as teamData } from '../../data/team/teamMembers';
import { data as locationData } from '../../data/contacts/locations';
import { data as servicesData } from '../../data/services';

const getLocation = (id: number) => {
  return locationData.find((location) => location.id === id);
};

const getServices = (servicesId: number[]) => {
  const services = servicesData.filter((service) => servicesId.includes(service.id));

  return services?.map((service: any) => ({
    id: service?.id,
    slug: service?.slug,
    title: service.title,
  }));
};

const getTeam = (options?: { id?: number; slug?: string }) => {
  if (options?.id) {
    return teamData.filter((member) => member.id === options.id);
  }

  if (options?.slug) {
    return teamData.filter((member) => member.slug === options.slug);
  }

  return teamData;
};

export default defineEventHandler((event): TeamMember[] => {
  const { locale, id, slug } = getQuery(event);

  const data = getTeam({ id: id as number, slug: slug as string });

  const team: any = data.map((member: any) => ({
    ...member,
    location: member.location ? getLocation(member.location) : {},
    services: member.services ? getServices(member.services) : [],
  }));

  return getFormattedDataByLocale(team, locale as string);
});
