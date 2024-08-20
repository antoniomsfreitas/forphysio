<template>
  <div class="container">
    <IntroBlock page-title="A nossa equipa" class="intro-block">
      <template #image>
        <PictureImage
          alt="A nossa equipa"
          src="/images/team/intro/image-desktop.jpg"
          src-t="/images/team/intro/image-tablet.jpg"
          src-m="/images/team/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <p class="intro-block__text">
          {{
            'Acreditamos numa prática clínica idónea, responsável, centrada nas pessoas e suportada pela evidência científica.\n\nContamos com profissionais especializados e motivados, que todos os dias se dedicam à melhor e mais segura prestação de serviços de saúde.'
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
    color: $medium-grey;

    @include mq-mobile-tablet {
      margin-bottom: 40px;
    }

    @include mq-desktop {
      margin-bottom: 60px;
    }
  }
}
</style>
