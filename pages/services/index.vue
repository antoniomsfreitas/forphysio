<template>
  <div class="container">
    <IntroBlock :page-title="$t('pages.services')" class="intro-block">
      <template #image>
        <PictureImage
          :alt="$t('pages.contacts')"
          src="/images/services/intro/image-desktop.jpg"
          src-t="/images/services/intro/image-tablet.jpg"
          src-m="/images/services/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <p class="intro-block__text">{{ $t('pages.services.landingPage.intro') }}</p>
        <IconLink :link="Routes.CONTACTS" :text="$t('general.bookAppointment')" />
      </template>
    </IntroBlock>

    <div v-if="services" class="services-grid">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol v-for="service in services" :key="service.id" m="2" t="4" d="3" :index="service.id">
            <CardImage
              :title="service.title"
              :src="service.image"
              :link="buildDetailPage(service.slug)"
              :alt="$t('general.image') + ': ' + service.image"
              :link-title="$t('general.viewDetail')"
              size="small"
            />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <LocationsMap v-if="locations" class="locations-map" :locations="locations" />
  </div>
</template>

<script setup lang="ts">
import { useServices } from '~/composables/services.composable';
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getServicesListData } = useServices();
const { getLocationsData } = useContacts();

const { data: servicesData, status } = await getServicesListData();
const services = computed(() => servicesData.value);

const { data: locationsData } = await getLocationsData();
const locations = computed(() => locationsData.value);

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

const buildDetailPage = (slug: string): string => {
  return `${localePath(Routes.SERVICES)}/${slug}`;
};
</script>

<style scoped lang="scss">
.intro-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet {
    margin-bottom: 140px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }

  &__text {
    padding-bottom: 40px;
  }
}

.services-grid,
.locations-map {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet {
    margin-bottom: 140px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }
}
</style>
