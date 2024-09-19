<template>
  <div v-if="member" class="team-member-detail">
    <IntroMember class="team-member-detail__intro" :member="member" :service="service" :location="location" />

    <TeamSlider
      class="team-member-detail__slider"
      :title="$t('team.same-location-team')"
      :team-list="getTeamMembers(member.location)"
    />

    <LocationMap
      v-if="location?.googleMapsSrc"
      :title="$t('team.how-to-arrive')"
      :google-maps-src="location.googleMapsSrc"
    />
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
import type { TeamMember, TeamLocation, TeamService } from '~/models/team.model';

definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

const route = useRoute();
const localePath = useLocalePath();
const { getTeamMembers, getTeamMemberBySlug, getService, getLocation } = useTeam();

const slug = route.params.slug as string;
const member: TeamMember | undefined = getTeamMemberBySlug(slug);

if (!member) {
  navigateTo(localePath(Routes.NOT_FOUND));
}

const service: TeamService | undefined = getService(member?.service);
const location: TeamLocation | undefined = getLocation(member?.location);
</script>

<style scoped lang="scss">
.team-member-detail {
  &__intro {
    @include mq-mobile {
      margin-top: 190px;
    }

    @include mq-mobile-tablet {
      margin-bottom: 150px;
    }

    @include mq-tablet-desktop {
      margin-top: 150px;
    }

    @include mq-desktop {
      margin-bottom: 250px;
    }
  }

  &__slider {
    margin-bottom: 100px;
  }
}
</style>
