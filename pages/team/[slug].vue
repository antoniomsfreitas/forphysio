<template>
  <div class="container">
    <div v-if="member" class="team-member-detail">
      <IntroMember class="team-member-detail__intro" :member="member" />

      <TeamSlider
        v-if="member.location?.id && relatedMembers"
        class="team-member-detail__slider"
        :title="$t('team.same-location-team')"
        :team-list="relatedMembers"
      />

      <LocationsMap
        v-if="member.location?.id"
        :locations="[member.location]"
        :title="$t('team.how-to-arrive')"
        class="team-member-detail__locations"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

const route = useRoute();
const localePath = useLocalePath();
const slug = route.params.slug as string;

const { getTeamMembers } = useTeam();
const { data: memberData, status } = await getTeamMembers({ slug: slug });

const member = computed(() => memberData.value?.[0]);

if (!member.value) {
  navigateTo(localePath(Routes.NOT_FOUND));
}

// Related members
const { data: relatedMembersData } = await getTeamMembers({ locationId: member.value?.location?.id });

const relatedMembers = computed(() =>
  relatedMembersData.value?.filter((relatedMember) => relatedMember.id !== member.value?.id),
);

const emit = defineEmits(['onDataLoaded']);
watch(
  status,
  (newStatus) => {
    if (newStatus === 'success') {
      emit('onDataLoaded');
    }
  },
  { immediate: true },
);
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
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet {
      margin-bottom: 140px;
    }

    @include mq-desktop {
      margin-bottom: 180px;
    }
  }

  &__locations {
    margin-bottom: 100px;
  }
}
</style>
