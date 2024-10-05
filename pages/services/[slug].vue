<template>
  <div class="service-detail">
    <ServiceIntro v-if="service?.blocks?.intro" :data="service?.blocks?.intro" class="intro-block" />

    <SideImage v-if="service?.blocks?.sideImage" :data="service?.blocks?.sideImage" class="side-image-block" />

    <ImageFullwidth
      v-if="service?.blocks?.imageFullwidth_1"
      :data="service?.blocks?.imageFullwidth_1"
      class="image-fullwidth-block"
    />

    <ServiceTopics v-if="service?.blocks?.topics_1" :data="service?.blocks?.topics_1" class="topics" />

    <LayoutGrid v-if="service?.blocks?.text" class="text-block">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="9" d="6" start-col-t="2" start-col-d="2">
          <p v-t="service?.blocks?.text" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <TwoImagesGrid
      v-if="service?.blocks?.twoImagesGrid"
      :data="service?.blocks?.twoImagesGrid"
      class="two-images-grid-block"
    />

    <ServiceTopics v-if="service?.blocks?.topics_2" :data="service?.blocks?.topics_2" class="topics" />

    <ImageFullwidth
      class="image-fullwidth-block"
      v-if="service?.blocks?.imageFullwidth_2"
      :data="service?.blocks?.imageFullwidth_2"
    />

    <LayoutGrid v-if="service?.locations" class="locations-list-block">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="8" d="5" start-col-t="2" start-col-d="2">
          <LocationsList :locations-id="service.locations" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <AppointmentBanner v-if="service?.blocks?.appointmentBanner" :data="service?.blocks?.appointmentBanner" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

import ImageFullwidth from '~/components/blocks/common/ImageFullwidth.vue';
import AppointmentBanner from '~/components/blocks/services/AppointmentBanner.vue';
import { Routes } from '~/models/routes.model';

const route = useRoute();
const localePath = useLocalePath();
const { getServiceBySlug } = useServices();

const slug = route.params.slug as string;
const service = getServiceBySlug(slug);

if (!service) {
  // Error page
  navigateTo(localePath(Routes.NOT_FOUND));
}
</script>

<style scoped lang="scss">
.service-detail {
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
  }

  .side-image-block {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet {
      margin-bottom: 100px;
    }

    @include mq-desktop {
      margin-bottom: 160px;
    }
  }

  .image-fullwidth-block {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet-desktop {
      margin-bottom: 110px;
    }
  }

  .topics {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet {
      margin-bottom: 100px;
    }

    @include mq-desktop {
      margin-bottom: 140px;
    }
  }

  .two-images-grid-block {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet {
      margin-bottom: 100px;
    }

    @include mq-desktop {
      margin-bottom: 160px;
    }
  }

  .locations-list-block {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet {
      margin-bottom: 160px;
    }

    @include mq-desktop {
      margin-bottom: 170px;
    }

    :deep(.locations-list) {
      ul {
        @include mq-tablet {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }

  .text-block {
    @include mq-mobile-tablet {
      margin-bottom: 80px;
    }

    @include mq-desktop {
      margin-bottom: 160px;
    }

    p {
      font-weight: $font-weight-light;
      line-height: 1.2;

      @include mq-mobile-tablet {
        font-size: 18px;
      }

      @include mq-desktop {
        font-size: 28px;
      }
    }
  }
}
</style>
