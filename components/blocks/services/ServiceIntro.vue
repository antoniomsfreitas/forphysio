<template>
  <div class="service-intro">
    <div class="service-intro__image">
      <PictureImage
        alt="Imagem: Fisioterapia músculo esquelética"
        :src="`/images/services/detail/intro/fisioterapia-musculo-esqueletica/image-mobile.jpg`"
        :src-t="`/images/services/detail/intro/fisioterapia-musculo-esqueletica/image-tablet.jpg`"
        :src-d="`/images/services/detail/intro/fisioterapia-musculo-esqueletica/image-desktop.jpg`"
        cover
      />

      <div class="service-intro__gradient" />
    </div>

    <div class="service-intro__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="8" d="8" start-col-t="3" start-col-d="3">
            <h1>{{ 'Fisioterapia músculo esquelética' }}</h1>
            <Button type="outline" v-t="'general.book-evaluation'" />
            <p>
              {{
                'A Fisioterapia Musculo Esquelética é uma área que pretende ajudar a prevenir, reduzir ou a eliminar a dor, e as limitações funcionais.\n\nTal como em outras áreas da fisioterapia, carece de uma avaliação meticulosa, e a uma intervenção que recorre a técnicas manuais, exercício e educação.'
              }}
            </p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

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

    @include mq-mobile-tablet {
      padding-top: 190px;
    }

    @include mq-desktop {
      padding-top: 150px;
    }

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
        margin-bottom: 55px;
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
      @include gradient-overlay('bottom-top', 83);
    }
  }
}
</style>
