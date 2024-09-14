<template>
  <ScrollbarSlideshow class="team-slider-container" :title="title" title-alignment="left" :space-between="24">
    <SwiperSlide v-for="member in teamList" :key="member.id" class="team-slider-container__slide">
      <CardTeam
        :title="member.name"
        :subtitle="getService(member.service)?.title"
        :src="member.image"
        :alt="member.name"
        :link="localePath(Routes.TEAM) + '/' + member.slug"
      />
    </SwiperSlide>
  </ScrollbarSlideshow>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  teamList: {
    type: Array as PropType<TeamMember[]>,
    required: true,
  },
});

import { Routes } from '~/models/routes.model';
import type { TeamMember } from '~/models/team.model';

const { getService } = useTeam();
const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.team-slider-container {
  &__slide {
    max-width: 100%;

    @include mq-mobile-tablet {
      width: 140px;
    }

    @include mq-desktop {
      width: 220px;
    }
  }
}
</style>
