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
        <p class="intro-block__text">
          {{
            'Prestamos serviços especializados de fisioterapia desde 2014.\n\nDurante a nossa evolução, adicionámos serviços complementares de nutrição, pilates, bem-estar e consultas médicas.'
          }}
        </p>

        <IconLink link="/contactos/" text="Marcar avaliação" />
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
}
</style>
