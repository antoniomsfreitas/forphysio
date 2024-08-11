<template>
  <div class="container">
    <IntroBlock page-title="Sobre nós" class="intro-block">
      <template #image>
        <PictureImage
          alt="Sobre nós"
          src="/images/about-us/intro/image-desktop.jpg"
          src-t="/images/about-us/intro/image-tablet.jpg"
          src-m="/images/about-us/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <ul class="intro-block__topics">
          <li class="intro-block__topics__item">
            <p class="intro-block__topics__item__title">Missão</p>
            <p class="intro-block__topics__item__description">
              Prevenir o risco de lesão. Reabilitar a função. &nbsp; Otimizar a performance.
            </p>
          </li>
          <li class="intro-block__topics__item">
            <p class="intro-block__topics__item__title">Visão</p>
            <p class="intro-block__topics__item__description">
              Proporcionar os melhores cuidados aos nossos clientes, minimizar os períodos de recuperação e otimizar os
              resultados de intervenção.
            </p>
          </li>
          <li class="intro-block__topics__item">
            <p class="intro-block__topics__item__title">Valores</p>
            <p class="intro-block__topics__item__description">Qualidade. Ciência. Individualidade.</p>
          </li>
        </ul>
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

  &__topics {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include mq-mobile-tablet {
      margin-bottom: 40px;
    }

    @include mq-desktop {
      margin-bottom: 60px;
    }

    &__item {
      &__title {
        padding-bottom: 4px;
        font-weight: $font-weight-semi-bold;
        text-transform: uppercase;
      }
    }
  }
}
</style>
