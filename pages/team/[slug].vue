<template>
  <div v-if="member" class="team-member-detail">
    <IntroMember class="team-member-detail__intro" :member="member" :service="service" :location="location" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

import { Routes } from '~/models/routes.model';
import type { TeamMember } from '~/models/team.model';

const route = useRoute();
const localePath = useLocalePath();
const { getTeamMemberBySlug, getService, getLocation } = useTeam();

const slug = route.params.slug as string;
const member: TeamMember | undefined = getTeamMemberBySlug(slug);

if (!member) {
  navigateTo(localePath(Routes.NOT_FOUND));
}

const service = getService(member?.service);
const location = getLocation(member?.location);
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
