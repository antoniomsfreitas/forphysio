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
                  <span v-if="member.role" class="intro-member-title__service">
                    {{ member.role }}
                  </span>
                  <span v-if="member.location?.name" class="intro-member-title__location">
                    {{ member.location?.name }}
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

        <LayoutGridCol v-if="member?.description" m="4" t="7" d="5">
          <div class="intro-member__content">
            <div id="teleport-title" class="intro-member__content__title" />

            <p class="intro-member__content__description">{{ description }}</p>

            <template v-if="!resume">
              <div v-if="member?.services || member.customService" class="intro-member__content__services">
                <span> {{ specialtyTitle }}: </span>
                <ul v-if="member?.services || member.customService">
                  <li v-if="member.customService">
                    {{ member.customService }}
                  </li>
                  <li v-for="service in member?.services">
                    <NuxtLink :to="localePath({ name: Routes.SERVICES_SLUG, params: { slug: service.slug } })">
                      {{ service.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <Button
                v-if="member.booking"
                class="intro-member__content__button"
                size="large"
                @click="navigateTo(member.booking)"
              >
                {{ $t('general.bookAppointment') }}
              </Button>

              <Button
                v-if="!member.booking && member.contactsPage"
                class="intro-member__content__button"
                size="large"
                @click="navigateTo(localePath(Routes.CONTACTS))"
              >
                {{ $t('general.bookAppointment') }}
              </Button>
            </template>

            <template v-else>
              <Button size="large" class="intro-member__content__button" @click="navigateTo(member.booking)">
                {{ $t('general.viewMore') }}
              </Button>
            </template>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/models/team.model';
import { Routes } from '~/models/routes.model';

const props = defineProps({
  member: {
    type: Object as PropType<TeamMember>,
    required: true,
  },
  resume: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const localePath = useLocalePath();
const { t } = useI18n();

const imagePath = '/images/team/members/detail/' + props.member.image;

const specialtyTitle = computed(() =>
  (props.member?.services?.length ?? 0) > 1 ? t('team.specialties') : t('team.specialty'),
);

const description = computed(() =>
  props.resume && props.member?.description ? truncateText(props.member.description, 220) : props.member.description,
);
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
    align-items: flex-start;
    justify-content: center;

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
    gap: 40px;
    align-items: flex-start;

    &__description,
    &__services {
      font-size: 18px;
      font-weight: $font-weight-light;
      line-height: 1.5;
      color: $medium-grey;
    }

    &__button {
      min-width: 350px;

      @include mq-mobile {
        width: 100%;
      }
    }

    &__services {
      span {
        color: #18a8bb;
        padding-bottom: 4px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          &:not(:last-child)::after {
            font-size: 14px;
            content: '\2022';
            padding: 0 5px;
          }

          a {
            color: $medium-grey;
            text-decoration-color: transparent;
            transition: $transition-duration ease-in-out all;

            &:hover {
              text-decoration-color: inherit;
            }
          }
        }
      }
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
