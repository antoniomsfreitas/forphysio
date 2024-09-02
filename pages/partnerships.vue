<template>
  <div class="container">
    <IntroBlock :page-title="$t('pages.partnerships')" class="intro-block">
      <template #image>
        <PictureImage
          :alt="$t('pages.partnerships')"
          src="/images/partnerships/intro/image-desktop.jpg"
          src-t="/images/partnerships/intro/image-tablet.jpg"
          src-m="/images/partnerships/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <p class="intro-block__text">
          {{
            'A ForPhysio Clinic dispõe de acordos que permitem ao cliente com as características descritas em baixo, ter acesso a preçários e condições exclusivas.'
          }}
        </p>

        <div class="intro-block__contacts">
          <div class="intro-block__contacts__item">
            <Icon name="icon:whatsapp" />
            <span>+351 917 730 222</span>
          </div>

          <div class="intro-block__contacts__item">
            <Icon name="icon:email" />
            <span>geral@forphysio.pt</span>
          </div>
        </div>

        <Button type="outline" size="medium">Marcar avaliação</Button>
      </template>
    </IntroBlock>
  </div>
</template>

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

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 40px;

    &__item {
      display: flex;
      align-items: center;
      gap: 24px;

      .icon {
        @include mq-mobile {
          width: 30px;
          font-size: 30px;
        }

        @include mq-tablet-desktop {
          width: 40px;
          font-size: 40px;
        }
      }

      span {
        font-weight: $font-weight-semi-bold;
        line-height: 1.2;

        @include mq-mobile {
          font-size: 20px;
        }

        @include mq-tablet-desktop {
          font-size: 24px;
        }
      }
    }
  }

  .button {
    min-width: 350px;

    @include mq-mobile {
      width: 100%;
      min-width: 0;
    }
  }
}
</style>
