<template>
  <LayoutGrid>
    <LayoutGridRow class="locations-map">
      <LayoutGridCol m="4" t="4" d="3" class="locations-map__locations">
        <h3>{{ title }}</h3>
        <div class="locations-map__locations__list">
          <ul>
            <li v-for="location in locations" :key="location.id" class="location" @click="changeLocation(location.id)">
              <div class="location__name" :class="{ 'location__name--selected': isCurrentLocation(location.id) }">
                <Icon name="icon:location" size="40" />
                <span>{{ location.name }}</span>
              </div>

              <div v-if="isCurrentLocation(location.id)" class="location__detail">
                <p class="address">{{ location.address }}</p>
                <p class="phone">
                  <Icon name="icon:phone" />
                  <span>{{ location.phone }}</span>
                </p>
                <p class="hours" v-html="location.hours" />
              </div>
            </li>
          </ul>
        </div>
      </LayoutGridCol>

      <LayoutGridCol
        m="4"
        t="8"
        d="9"
        class="locations-map__google-maps"
        :class="{ 'locations-map__google-maps--loading': loading }"
      >
        <GoogleMaps
          v-if="currentLocation?.googleMapsSrc"
          :key="currentLocation.id"
          :google-maps-src="currentLocation?.googleMapsSrc"
          :height="600"
        />
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Location } from '~/models/contacts';
import { LocationsList } from '~/server/data/contacts/locations';

const { t } = useI18n();

const props = defineProps({
  locations: {
    type: Object as PropType<Location[]>,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});

const loading = ref(false);

const title = computed(() => (props.title ? props.title : t('general.ourUnits')));

const changeLocation = async (locationId: number) => {
  loading.value = true;
  currentLocationId.value = locationId;

  await new Promise((resolve) => setTimeout(resolve, 500));
  loading.value = false;
};

const defaultLocation = LocationsList.CALDAS_RAINHA;
const currentLocationId = ref(defaultLocation);

const currentLocation = computed(() => {
  const location = props.locations?.find((location) => location.id == currentLocationId.value);

  if (!location) {
    currentLocationId.value = props.locations[0].id;
    return props.locations[0];
  }

  return location;
});

const isCurrentLocation = (id: number): boolean => {
  return currentLocationId.value === id;
};
</script>

<style scoped lang="scss">
.locations-map {
  &__locations {
    @include mq-mobile {
      margin-bottom: 20px;
    }

    h3 {
      padding-bottom: 40px;
      line-height: 1.1;
      text-wrap: balance;
    }

    &__list {
      font-size: 18px;
      line-height: 1.2;

      ul {
        display: flex;
        flex-direction: column;
        gap: 24px;

        li {
          .location {
            &__name {
              display: flex;
              align-items: center;
              font-weight: $font-weight-light;
              color: $white;
              cursor: pointer;
              transition: $transition-duration ease-in-out all;

              span {
                display: block;
              }

              &:hover {
                color: $medium-grey;
              }

              &--selected,
              &--selected:hover {
                font-weight: $font-weight-semi-bold;
                color: $blue;
              }
            }

            &__detail {
              animation: mini-slide-in-from-left 600ms forwards;
              padding: 12px 0 12px 42px;
              display: flex;
              flex-direction: column;
              gap: 10px;

              p {
                font-size: 16px;
                font-weight: $font-weight-light;
                line-height: 1.4;

                &.phone {
                  display: flex;
                  gap: 4px;
                  align-items: center;

                  span {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  &__google-maps {
    transition:
      transform 0.5s ease-in-out,
      opacity 0.5s ease-in-out;

    &--loading {
      opacity: 0;
      transform: translateY(10px);
    }

    .layout-grid {
      padding: 0;
    }
  }
}
</style>
