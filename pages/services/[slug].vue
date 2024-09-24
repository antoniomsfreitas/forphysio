<template>
  <div class="service-detail">
    <ServiceIntro class="intro-block" />

    <SideImage class="side-image-block" />

    <div class="full-width-image-block image-1">
      <PictureImage
        alt="Teste"
        :src="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-1-mobile.jpg`"
        :src-t="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-1-tablet.jpg`"
        :src-d="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-1-desktop.jpg`"
        cover
      />
    </div>

    <ServiceTopics class="topics" />

    <TwoImagesGrid class="two-images-grid-block" />

    <ServiceTopics class="topics" />

    <div class="full-width-image-block image-2">
      <PictureImage
        alt="Teste"
        :src="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-2-mobile.jpg`"
        :src-t="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-2-tablet.jpg`"
        :src-d="`/images/services/detail/fullwidth-image/fisioterapia-musculo-esqueletica/image-2-desktop.jpg`"
        cover
      />
    </div>

    <LayoutGrid class="locations-list-block">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="8" d="5" start-col-t="2" start-col-d="2">
          <LocationsList />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <AppointmentBanner />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

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

  .full-width-image-block {
    @include mq-mobile {
      margin-bottom: 80px;
    }

    @include mq-tablet-desktop {
      margin-bottom: 110px;
    }

    &.image-2 {
      :deep(picture) img {
        @include mq-mobile {
          height: 575px;
        }

        @include mq-tablet {
          height: 580px;
        }

        @include mq-desktop {
          height: 850px;
        }
      }
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
}
</style>
