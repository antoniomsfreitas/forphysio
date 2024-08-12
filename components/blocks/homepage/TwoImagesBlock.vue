<template>
  <LayoutGrid class="two-images-block">
    <LayoutGridRow>
      <LayoutGridCol m="4" t="6">
        <CardUI class="two-images-block__item">
          <NuxtLink to="/equipa">
            <div class="two-images-block__item__image">
              <PictureImage
                src="/images/homepage/two-images-block/image-1/image-1-mobile.jpg"
                alt="Forphysio"
                src-t="/images/homepage/two-images-block/image-1/image-1-tablet.jpg"
                src-d="/images/homepage/two-images-block/image-1/image-1-desktop.jpg"
              />
            </div>
            <div class="two-images-block__item__content">
              <h3 class="two-images-block__item__content__title">A nossa equipa</h3>
              <p class="two-images-block__item__content__text">
                Conheça os nossos profissionais especializados e motivados.
              </p>
              <span class="button button--tertiary">Saber mais</span>
            </div>
          </NuxtLink>
          <div class="two-images-block__item__gradient" />
        </CardUI>
      </LayoutGridCol>

      <LayoutGridCol m="4" t="6">
        <CardUI class="two-images-block__item">
          <NuxtLink to="/equipa">
            <div class="two-images-block__item__image">
              <PictureImage
                src="/images/homepage/two-images-block/image-2/image-2-mobile.jpg"
                alt="Forphysio"
                src-t="/images/homepage/two-images-block/image-2/image-2-tablet.jpg"
                src-d="/images/homepage/two-images-block/image-2/image-2-desktop.jpg"
              />
            </div>
            <div class="two-images-block__item__content">
              <h3 class="two-images-block__item__content__title">Serviços de fisioterapia</h3>
              <p class="two-images-block__item__content__text">Tratamento especializado e individualizado.</p>
              <span class="button button--tertiary">Marcar Consulta</span>
            </div>
          </NuxtLink>
          <div class="two-images-block__item__gradient" />
        </CardUI>
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.two-images-block {
  @include mq-mobile {
    padding: 0;

    & > .layout-grid-row {
      grid-gap: 24px;
    }
  }

  &__item {
    position: relative;

    @include mq-mobile {
      border-radius: 0;
    }

    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      color: $white;
      text-align: center;

      @include mq-mobile {
        padding: 56px 24px;
      }

      @include mq-mobile-tablet {
        gap: 16px;
      }

      @include mq-tablet {
        padding: 45px 16px;
      }

      @include mq-desktop {
        gap: 24px;
        padding: 40px 90px;
      }

      &__title {
        @include mq-mobile {
          font-size: 24px;
        }
      }

      &__text {
        font-weight: $font-weight-light;
        line-height: 1.2;

        @include mq-mobile-tablet {
          font-size: 16px;
        }

        @include mq-desktop {
          font-size: 18px;
        }
      }

      .button {
        min-height: 40px;
        font-size: 18px;
        line-height: 1.2;
      }
    }

    &__gradient {
      @include gradient-overlay('bottom-top', 65);
    }
  }
}
</style>
