<template>
  <div class="blog-highlighted-article">
    <div class="image">
      <PictureImage
        src="/images/blog/articles/ombro-exercicios-mobilidade/detail/highlight-image/image-desktop.jpg"
        alt="Test"
        cover
        class="image__picture"
      />
      <div class="image__gradient" />
    </div>

    <div class="content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="8" d="5">
            <div class="content__col">
              <h3 class="content__title">Artigos em destaque</h3>

              <div class="content__article">
                <ul class="content__categories">
                  <li>Prevenção</li>
                </ul>

                <div class="content__titles">
                  <span class="content__titles__title">Ombro</span>
                  <span class="content__titles__subtitle"> Exercícios de mobilidade </span>
                </div>

                <p class="content__intro">
                  "O complexo articular do ombro é uma das articulações mais complexas do corpo em grande parte pela sua
                  particularidade em termos de mobilidade (...)"
                </p>

                <!--<ArticleAuthor size="small" class="content__author" />-->

                <NuxtLink class="content__button" to="#" :title="$t('general.readMore')">
                  <Button :size="btnSize">{{ $t('general.readMore') }}</Button>
                </NuxtLink>
              </div>
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const btnSize = computed(() => (isMobile.value ? 'small' : 'medium'));
</script>

<style scoped lang="scss">
.blog-highlighted-article {
  display: flex;
  height: 100%;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: left 800ms ease 400ms;

    @include mq-desktop {
      width: 55vw;
    }

    @include mq-mobile-tablet {
      width: 100%;
    }

    &__picture {
      position: relative;
      height: 100%;

      @include mq-desktop {
        border-radius: 0 15px 15px 0;
      }
    }

    &:deep(img) {
      height: 100%;
    }

    &__gradient {
      @include gradient-overlay('left-right', 100);
    }
  }

  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;

    &__col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      @include mq-desktop {
        display: flex;
        gap: 118px;
        height: 100%;
        padding: 152px 0 100px;
      }

      @include mq-tablet {
        gap: 110px;
        padding: 100px 0 154px;
      }

      @include mq-mobile {
        gap: 40px;
        padding: 70px 0 154px;
      }
    }

    &__title {
      display: block;
      color: $white;
    }

    &__categories {
      margin-bottom: 16px;

      li {
        display: flex;
        gap: 6px;
        align-items: center;
        font-weight: $font-weight-semi-bold;
        letter-spacing: 0.4px;

        @include mq-tablet-desktop {
          font-size: 20px;
        }

        @include mq-mobile {
          font-size: 16px;
        }

        &:not(:last-child)::after {
          font-size: 14px;
          color: $white;
          content: '\2022';
        }
      }
    }

    &__titles {
      display: flex;
      flex-direction: column;
      letter-spacing: 1px;

      @include mq-tablet-desktop {
        margin-bottom: 40px;
      }

      @include mq-mobile {
        margin-bottom: 32px;
      }

      &__title {
        font-weight: $font-weight-semi-bold;

        @include mq-desktop {
          font-size: 86px;
        }

        @include mq-tablet {
          font-size: 64px;
        }

        @include mq-mobile {
          font-size: 36px;
        }
      }

      &__subtitle {
        font-weight: $font-weight-thin;

        @include mq-desktop {
          font-size: 48px;
        }

        @include mq-tablet {
          font-size: 36px;
        }

        @include mq-mobile {
          font-size: 18px;
        }
      }
    }

    &__intro {
      font-weight: $font-weight-light;
      line-height: 1.2;

      @include mq-tablet-desktop {
        max-width: 360px;
        margin-bottom: 40px;
        font-size: 18px;
      }

      @include mq-mobile {
        width: 100%;
        max-width: 280px;
        margin-bottom: 32px;
        font-size: 16px;
      }
    }

    &__author {
      @include mq-tablet-desktop {
        margin-bottom: 40px;
      }

      @include mq-mobile {
        margin-bottom: 32px;
      }

      :deep(img) {
        background-color: $border-grey;
      }
    }

    &__button {
      display: inline-block;

      @include mq-tablet-desktop {
        min-width: 268px;
      }

      @include mq-mobile {
        min-width: 180px;
      }

      :deep(button) {
        width: 100%;
      }
    }
  }
}
</style>
