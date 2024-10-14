<template>
  <LayoutGrid>
    <LayoutGridRow class="locations-map">
      <LayoutGridCol m="4" t="5" d="3" class="locations-map__locations">
        <h2 v-t="'general.ourUnits'" />
        <div class="locations-map__locations__list">
          <span v-t="'general.selectUnit'" class="locations-map__locations__list__title" />
          <ul>
            <li
              v-for="location in locations"
              :key="location.id"
              :class="{ 'location-selected': location.id == currentLocationId }"
              @click="changeLocation(location.id)"
            >
              <Icon name="icon:location" size="40" />
              <span>{{ location.name }}</span>
            </li>
          </ul>
        </div>
      </LayoutGridCol>

      <LayoutGridCol
        m="4"
        t="7"
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
const { getLocationsData } = useContacts();
const { data } = await getLocationsData();

const locations = computed(() => data?.value);
const loading = ref(false);

const changeLocation = async (locationId: number) => {
  loading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 500));
  currentLocationId.value = locationId;

  await new Promise((resolve) => setTimeout(resolve, 500));
  loading.value = false;
};

const currentLocationId = ref(2);
const currentLocation = computed(() => locations.value?.find((location) => location.id == currentLocationId.value));
</script>

<style scoped lang="scss">
.locations-map {
  &__locations {
    @include mq-mobile {
      margin-bottom: 50px;
    }

    h2 {
      padding-bottom: 40px;
      line-height: 1.1;
      text-wrap: balance;
    }

    &__list {
      font-size: 18px;
      line-height: 1.2;

      &__title {
        display: block;
        padding-bottom: 14px;
        font-weight: $font-weight-semi-bold;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 12px;

        li {
          display: flex;
          align-items: center;
          font-weight: $font-weight-light;
          color: $white;
          cursor: pointer;
          transition: $transition-duration ease-in-out all;

          &:hover {
            color: $medium-grey;
          }

          &.location-selected {
            font-weight: $font-weight-semi-bold;
            color: $blue;
          }

          span {
            display: block;
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
