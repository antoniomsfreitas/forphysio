import type { Location } from '~/models/contacts';
import type { Service } from '~/models/services.model';
import type { TeamMember, TeamPage } from '~/models/team.model';
import { LocationsList } from '~/server/data/contacts/locations';

export const useTeam = () => {
  const { locale } = useI18n();
  const defaultLocation = LocationsList.CALDAS_RAINHA;

  const getTeamMembers = async (options?: { id?: number; slug?: string; locationId?: number }) => {
    const key = `team-${JSON.stringify(options)}`;

    const { status, data } = await useAsyncData<TeamMember[]>(key, () =>
      $fetch('/api/team/teamMembers', {
        query: {
          locale: locale.value,
          id: options?.id,
          slug: options?.slug,
          locationId: options?.locationId,
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
    ).sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0));
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
      data = teamMembers.filter((member) => member.location?.id === locationId && !member.externalMember);
    }

    if (servicesId?.length) {
      data = data.filter((member) =>
        member.services?.some((service) => servicesId.includes(service.id) && !member.externalMember),
      );
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
