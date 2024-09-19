<template>
  <div v-if="member" class="team-member-detail">
    <IntroMember class="team-member-detail__intro" :member="member" :service="service" :location="location" />

    <LocationMap
      v-if="location?.googleMapsSrc"
      :title="$t('team.how-to-arrive')"
      :google-maps-src="location.googleMapsSrc"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

import { Routes } from '~/models/routes.model';
import type { TeamLocation, TeamMember, TeamService } from '~/models/team.model';

const route = useRoute();
const localePath = useLocalePath();
const { getTeamMemberBySlug, getService, getLocation } = useTeam();

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
}
</style>
