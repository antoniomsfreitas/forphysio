<template>
  <LayoutGrid>
    <LayoutGridRow class="team-list">
      <LayoutGridCol m="4" t="5" d="3" class="team-list__locations">
        <h2>{{ $t('team.know-the-team') }}</h2>
        <div v-if="locations" class="team-list__locations__list">
          <span class="team-list__locations__list__title">{{ $t('general.selectUnit') }}</span>
          <ul>
            <li v-for="location in locations">
              <div v-if="location" class="location">
                <div
                  class="location__name"
                  :class="{ 'location__name--selected': isCurrentLocation(location.id) }"
                  @click="changeLocation(location.id)"
                >
                  <Icon name="icon:location" size="40" />
                  <span>{{ location.name }}</span>
                </div>

                <div v-if="services && isCurrentLocation(location.id)" class="services">
                  <div v-for="service in services" class="services__item">
                    <CustomCheckbox
                      v-if="service"
                      :label="service.title"
                      class="service-checkbox"
                      @mouseup="toggleService(service?.id)"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <Button class="team-list__locations__list__view-all" @click="viewAll()">{{
            $t('team.show-full-team')
          }}</Button>
        </div>
      </LayoutGridCol>

      <LayoutGridCol m="4" t="7" d="8" class="team-list__members">
        <LayoutGrid>
          <LayoutGridRow v-if="currentMembers" :col-number-tablet="9" :col-number-desktop="8">
            <LayoutGridCol
              v-for="member in currentMembers.slice(0, numVisibleMembers)"
              :key="member.id + currentServices.toString() + currentLocation.toString()"
              m="2"
              t="3"
              d="2"
              class="team-list__members__item"
            >
              <CardTeam
                v-if="member.name && member.image"
                :title="member.name"
                :subtitle="member.role"
                :src="member.image"
                :alt="member.name"
                :link="localePath({ name: Routes.TEAM_SLUG, params: { slug: member.slug } })"
                class="member"
              />
            </LayoutGridCol>
          </LayoutGridRow>

          <LayoutGridRow v-if="showMore" @click="handleShowMore">
            <LayoutGridCol m="4" t="12" d="12" class="view-more">
              <button type="button" :aria-label="$t('general.viewMore')">
                <Icon name="icon:view-more" size="50" />
              </button>
            </LayoutGridCol>
          </LayoutGridRow>
        </LayoutGrid>
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getTeamMembers, getLocations, getServicesByLocation, filterTeamMembers, defaultLocation } = useTeam();

const { data, status } = await getTeamMembers();
const allMembers = computed(() => data.value);

const currentLocation = ref(+defaultLocation);
const currentServices = ref<number[]>([]);

const currentMembers = computed(() =>
  allMembers.value ? filterTeamMembers(allMembers.value, currentLocation.value, currentServices.value) : null,
);

const locations = allMembers.value ? getLocations(allMembers.value) : null;
const services = computed(() =>
  allMembers.value ? getServicesByLocation(allMembers.value, currentLocation.value) : null,
);

const maxByPage = 12;
const numVisibleMembers = ref(maxByPage);
const showMore = computed(() => currentMembers.value && numVisibleMembers.value < currentMembers.value.length);

const changeLocation = (id: number) => {
  currentServices.value = [];
  currentLocation.value = id;
};

const toggleService = (id: number) => {
  if (currentServices.value.includes(id)) {
    // remove from current services
    currentServices.value = currentServices.value.filter((serviceId) => serviceId != id);
  } else {
    // add to current services
    currentServices.value.push(id);
  }
};

const viewAll = () => {
  currentLocation.value = 0;
  currentServices.value = [];
};

const isCurrentLocation = (id: number): boolean => {
  return currentLocation.value === id;
};

const handleShowMore = () => {
  numVisibleMembers.value += maxByPage;
};

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
.team-list-title {
  margin-bottom: 40px;
  text-align: center;
}

.team-list {
  &__locations {
    @include mq-mobile {
      margin-bottom: 50px;
    }

    h2 {
      text-wrap: balance;
      line-height: 1.1;
      padding-bottom: 40px;

      @include mq-tablet {
        font-size: 40px;
      }
    }

    &__list {
      font-size: 18px;
      line-height: 1.2;

      &__title {
        display: block;
        font-weight: $font-weight-semi-bold;
        padding-bottom: 14px;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-bottom: 40px;

        li {
          .location {
            &__name {
              display: flex;
              align-items: center;
              font-weight: $font-weight-light;
              color: $white;
              cursor: pointer;
              transition: $transition-duration ease-in-out all;

              &:hover {
                color: $medium-grey;
              }

              &--selected,
              &--selected:hover {
                font-weight: $font-weight-semi-bold;
                color: $blue;
              }

              span {
                display: block;
              }
            }

            .services {
              opacity: 0;
              animation: mini-slide-in-from-left 600ms forwards;
              padding-bottom: 10px;
              &__item {
                padding: 12px 0 12px 42px;

                :deep(label) {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

      &__view-all {
        min-width: 224px;

        @include mq-mobile {
          width: 100%;
        }
      }
    }
  }

  &__members {
    @include mq-mobile {
      max-width: 360px;
      margin: 0 auto;
    }

    .layout-grid {
      padding: 0;
    }

    &__empty {
      font-size: 18px;
      line-height: 1.2;
      font-weight: $font-weight-light;
    }
  }

  .view-more {
    text-align: center;
    padding-top: 50px;

    button {
      background-color: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
}

.member {
  opacity: 0;
  animation: zoom-in 600ms forwards;
}
</style>
