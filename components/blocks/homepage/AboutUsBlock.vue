<template>
  <LayoutGrid class="about-us-block">
    <LayoutGridRow>
      <LayoutGridCol m="4" t="6" d="5" start-col-d="2">
        <div class="about-us-block__content">
          <h2 class="about-us-block__content__title">
            Fisioterapia que realmente <span class="about-us-block__content__title--highlight">importa</span>.
          </h2>
          <div class="about-us-block__content__text">
            <p>
              Desde 2014, que o foco da ForPhysio Clinic reside na prestação dos melhores cuidados em fisioterapia aos
              nossos clientes.
              <br >
              <br >
              As sessões individualizadas, com 60 minutos de duração e sempre na presença do fisioterapeuta, garantem
              melhores resultados, de forma mais rápida e segura.
            </p>
          </div>
          <IconLink link="/sobre-nos/" text="Conheça-nos melhor" />
        </div>
      </LayoutGridCol>
      <LayoutGridCol m="4" t="6">
        <PictureImage
          class="about-us-block__image"
          src="/images/homepage/about-us-block/image-1/image-1-mobile.jpg"
          alt="Forphysio"
          src-t="/images/homepage/about-us-block/image-1/image-1-tablet.jpg"
          src-d="/images/homepage/about-us-block/image-1/image-1-desktop.jpg"
        />
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about-us-block {
  @include mq-mobile {
    margin-top: 90px;

    > .layout-grid-row {
      grid-row-gap: 50px;
    }
  }

  @include mq-tablet-desktop {
    margin-top: 130px;
  }

  @include mq-mobile-tablet {
    padding: 0;
    margin-bottom: 80px;
  }

  @include mq-desktop {
    margin-bottom: 100px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    @include mq-mobile {
      padding: 0 24px;
    }

    @include mq-tablet-desktop {
      padding-bottom: 55px;
    }

    @include mq-mobile-tablet {
      gap: 40px;
      padding-left: 32px;
    }

    @include mq-desktop {
      gap: 60px;
    }

    &__title {
      color: $medium-grey;

      &--highlight {
        color: $white;
      }

      @include mq-mobile {
        font-size: 48px;
      }

      @include mq-tablet {
        font-size: 64px;
      }

      @include mq-desktop {
        font-size: 86px;
      }
    }

    &__text {
      @include mq-tablet {
        padding-right: 30px;
      }

      @include mq-desktop {
        padding-right: 85px;
      }

      p {
        font-weight: $font-weight-light;
        line-height: 1.2;

        &:last-child {
          padding-bottom: 0;
        }

        @include mq-mobile {
          padding-bottom: 18px;
          font-size: 16px;
        }

        @include mq-tablet-desktop {
          padding-bottom: 22px;
          font-size: 18px;
        }
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    :deep(img) {
      width: 100%;

      @include mq-tablet-desktop {
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 15px;
      }

      @include mq-desktop {
        border-top-right-radius: 15px;
      }
    }
  }
}
</style>
