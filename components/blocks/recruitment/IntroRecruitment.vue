<template>
  <div class="intro-block">
    <div class="intro-block__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="8" d="8" start-col-t="3" start-col-d="3">
            <h1 v-t="'recruitment-page.title'" />
            <p v-t="'recruitment-page.text'" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="intro-block__image">
      <PictureImage
        class="about-us-block__image"
        src="/images/recruitment/intro/image-mobile.jpg"
        src-t="/images/recruitment/intro/image-tablet.jpg"
        src-d="/images/recruitment/intro/image-desktop.jpg"
        alt="Forphysio"
        cover
      />
      <div class="intro-block__image__gradient" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro-block {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @include mq-mobile-tablet {
    padding-top: 190px;
  }

  @include mq-tablet {
    min-height: 650px;
  }

  @include mq-desktop {
    min-height: 800px;
  }

  &__content {
    position: relative;
    z-index: 3;
    text-align: center;

    @include mq-mobile-tablet {
      padding: 140px 0;
    }

    @include mq-desktop {
      padding: 160px 0;
    }

    h1 {
      margin-bottom: 40px;
    }

    p {
      font-weight: $font-weight-semi-bold;
      line-height: 1.2;
      text-wrap: balance;

      @include mq-mobile {
        font-size: 24px;
      }

      @include mq-tablet {
        font-size: 32px;
      }

      @include mq-desktop {
        font-size: 40px;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    :deep(img) {
      @include mq-mobile {
        width: 767px;
      }

      @include mq-tablet {
        width: 1279px;
      }

      @include mq-desktop {
        width: 1920px;
      }
    }

    &__gradient {
      @include gradient-overlay('bottom-top', 100);
    }
  }
}
</style>
