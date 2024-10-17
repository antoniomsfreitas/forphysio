import type { Location } from '~/models/contacts';
import type { Service } from '~/models/services.model';
import type { TeamMember, TeamPage } from '~/models/team.model';
import { LocationEnum } from '~/server/data/contacts/locations';

export const useTeam = () => {
  const { locale } = useI18n();
  const defaultLocation = LocationEnum.CALDAS_RAINHA;

  const getTeamMembers = async (options?: { id?: number; slug?: string }) => {
    const { status, data } = await useAsyncData<TeamMember[]>('team-members', () =>
      $fetch('/api/team/teamMembers', {
        query: {
          locale: locale.value,
          id: options?.id,
          slug: options?.slug,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getPage = async () => {
    const { status, data } = await useAsyncData<TeamPage>('team-page', () =>
      $fetch('/api/team/blocks', {
        query: {
          locale: locale.value,
        },
      }),
    );

    return {
      status,
      data,
    };
  };

  const getLocations = (teamMembers: TeamMember[]): (Location | undefined)[] => {
    return Array.from(
      new Map(
        teamMembers
          ?.filter((member) => member.location && member.location.id)
          .map((member) => [member.location?.id, member.location]),
      ).values(),
    );
  };

  const getServicesByLocation = (teamMembers: TeamMember[], locationId: number): (Service | undefined)[] => {
    return Array.from(
      new Map(
        teamMembers
          .filter((member) => member.location?.id === locationId)
          .flatMap((member) => member.services || [])
          .map((service) => [service.id, service]),
      ).values(),
    );
  };

  const filterTeamMembers = (teamMembers: TeamMember[], locationId?: number, servicesId?: number[]): TeamMember[] => {
    let data = teamMembers;

    if (locationId) {
      data = teamMembers.filter((member) => member.location?.id === locationId);
    }

    if (servicesId?.length) {
      data = data.filter((member) => member.services?.some((service) => servicesId.includes(service.id)));
    }

    return data;
  };

  return {
    getTeamMembers,
    getPage,
    getLocations,
    getServicesByLocation,
    filterTeamMembers,
    defaultLocation,
  };
};
