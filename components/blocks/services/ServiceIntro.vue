<template>
  <div class="service-intro__wrapper">
    <div class="service-intro">
      <div class="service-intro__image">
        <PictureImage
          :alt="data.image.alt"
          :src="data.image.mobile"
          :src-t="data.image.tablet"
          :src-d="data.image.desktop"
          cover
        />

        <div class="service-intro__gradient" />
      </div>

      <div class="service-intro__content">
        <LayoutGrid>
          <LayoutGridRow>
            <LayoutGridCol m="4" t="8" d="8" start-col-t="3" start-col-d="3">
              <h1 v-text="data.title" />

              <Button type="outline" v-t="'general.book-evaluation'" />
            </LayoutGridCol>
          </LayoutGridRow>

          <LayoutGridRow v-if="version == '1'">
            <LayoutGridCol m="4" t="8" d="10" start-col-t="3" start-col-d="2">
              <p v-text="data.text" />
            </LayoutGridCol>
          </LayoutGridRow>
        </LayoutGrid>
      </div>
    </div>

    <LayoutGridRow v-if="version == '2'" class="intro-text">
      <LayoutGridCol m="4" t="8" d="8" start-col-t="2" start-col-d="3">
        <p v-text="data.text" />
      </LayoutGridCol>
    </LayoutGridRow>
  </div>
</template>

<script setup lang="ts">
import type { IntroBlock } from '~/models/blocks.model';

defineProps({
  data: {
    type: Object as PropType<IntroBlock>,
    required: true,
  },
});

// TEMP - FOR TEST PURPOSES
const route = useRoute();
const version = route.query.version || '1';
</script>

<style scoped lang="scss">
.service-intro {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @include mq-mobile-tablet {
    min-height: 650px;
  }

  @include mq-desktop {
    padding-top: 150px;
    min-height: 800px;
  }

  &__content {
    position: relative;
    z-index: 3;
    text-align: center;

    h1 {
      margin-bottom: 40px;

      @include mq-mobile {
        font-size: 40px;
      }
    }

    button {
      margin-bottom: 40px;
      width: 100%;
      max-width: 350px;

      @include mq-tablet-desktop {
        margin-bottom: 50px;
      }
    }

    p {
      font-weight: $font-weight-light;
      line-height: 1.2;
      text-align: center;

      @include mq-mobile-tablet {
        font-size: 18px;
      }

      @include mq-desktop {
        font-size: 28px;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__gradient {
    @include mq-mobile {
      @include gradient-overlay('bottom-top', 90);
    }

    @include mq-tablet {
      @include gradient-overlay('bottom-top', 73);
    }

    @include mq-desktop {
      @include gradient-overlay('bottom-top', 100);
    }
  }
}

.intro-text p {
  font-weight: $font-weight-light;
  line-height: 1.4;
  text-align: center;
  margin-top: 60px;

  @include mq-mobile-tablet {
    font-size: 18px;
  }

  @include mq-desktop {
    font-size: 28px;
  }
}
</style>
