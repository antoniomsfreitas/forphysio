<template>
  <div class="intro-member">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol v-if="member.image?.length" m="4" t="5" d="6">
          <div class="intro-member__top-title">
            <ClientOnly>
              <Teleport :disabled="isMobile" to="#teleport-title">
                <div class="intro-member-title">
                  <h1>{{ member.name }}</h1>
                  <span v-if="props.service?.title?.length" class="intro-member-title__service">
                    {{ props.service.title }}
                  </span>
                  <span v-if="props.location?.title?.length" class="intro-member-title__location">
                    {{ props.location.title }}
                  </span>
                </div>
              </Teleport>
            </ClientOnly>
          </div>

          <div class="intro-member__image">
            <img :src="imagePath" :alt="member.name" />
            <div class="intro-member__image__gradient" />
          </div>
        </LayoutGridCol>

        <LayoutGridCol v-if="member.description?.length" m="4" t="7" d="5">
          <div class="intro-member__content">
            <div class="intro-member__content__title" id="teleport-title"></div>
            <p class="intro-member__content__description">{{ member.description }}</p>
            <Button class="intro-member__content__button" size="large" @click="navigateTo(localePath(Routes.CONTACTS))">
              Marcar consulta
            </Button>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
import type { TeamLocation, TeamMember, TeamService } from '~/models/team.model';

const props = defineProps({
  member: {
    type: Object as PropType<TeamMember>,
    required: true,
  },
  service: {
    type: Object as PropType<TeamService>,
    required: false,
  },
  location: {
    type: Object as PropType<TeamLocation>,
    required: false,
  },
});

const localePath = useLocalePath();

const imagePath = '/images/team/members/detail/' + props.member.image;
</script>

<style scoped lang="scss">
.intro-member {
  &__top-title {
    margin-bottom: 40px;

    @include mq-tablet-desktop {
      display: none;
    }
  }

  &__image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      display: block;
      width: 472px;
      max-width: 100%;
      object-fit: contain;
    }

    &__gradient {
      @include gradient-overlay('bottom-top', 50);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    &__description {
      font-size: 18px;
      font-weight: $font-weight-light;
      line-height: 1.5;
      color: $medium-grey;
    }

    &__button {
      min-width: 350px;
    }
  }

  &-title {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__service {
      display: block;
      font-size: 24px;
      font-weight: $font-weight-light;
      line-height: 1.2;
      color: $blue;
    }

    &__location {
      display: block;
      font-size: 16px;
      font-weight: $font-weight-light;
      line-height: 1.2;
      letter-spacing: 0.4px;
    }
  }
}
</style>
