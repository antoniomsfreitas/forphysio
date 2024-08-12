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

    <div class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="12" t="12" m="4">
            <h2>O nosso conceito</h2>
          </LayoutGridCol>
        </LayoutGridRow>
        <LayoutGridRow>
          <LayoutGridCol d="6" t="6" m="4">
            <p>
              As sessões individualizadas na ForPhysio Clinic, com 60 minutos de duração e sempre na presença do
              profissional de saúde, garantem melhores resultados, de forma mais rápida e segura.
              <br /><br />
              Acreditamos que cada pessoa deverá assumir um papel ativo na melhoria da sua condição clínica e na
              promoção da longevidade, sempre guiado de forma próxima por profissionais especializados.
              <br /><br />
              Ao longo dos dez anos da ForPhysio Clinic, temos aprimorado estratégias de avaliação clínica e inovado nos
              programas de recuperação e melhoria da funcionalidade. Cada sessão é guiada através de registos clínicos
              objetivos que permitem medir a evolução dos clientes e progredir com segurança.
            </p>
          </LayoutGridCol>
          <LayoutGridCol d="6" t="6" m="4">
            <p>
              As nossas Unidades de Saúde integram um ambiente moderno e sofisticado, com tecnologia e equipamentos de
              excelência, a pensar na melhor experiência de cada cliente.
              <br /><br />
              Para prestar o melhor acompanhamento fora de portas, facilitamos ainda canais de comunicação online, que
              colocam em comunicação direta os profissionais da ForPhysio Clinic e os nossos clientes. Assim, alterar
              consultas, colocar dúvidas ou fazer pedidos de informação é mais rápido e eficiente.
              <br /><br />
              Na ForPhysio Clinic prestamos serviços de saúde atuais, à sua medida e que realmente importam. Estamos
              disponíveis para o receber nas nossas Unidades de Saúde.
            </p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="container-block">
      <PictureImage
        alt="Equipa"
        class="container-block__image"
        src="/images/about-us/content/image-1/image-1-mobile.jpg"
        src-t="/images/about-us/content/image-1/image-1-tablet.jpg"
        src-d="/images/about-us/content/image-1/image-1-desktop.jpg"
        src-d_2-k="/images/about-us/content/image-1/image-1-desktop-2k.jpg"
        src-d_4-k="/images/about-us/content/image-1/image-1-desktop-4k.jpg"
      />
    </div>

    <div class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="12" t="12" m="4">
            <h2>A nossa história</h2>
          </LayoutGridCol>
        </LayoutGridRow>
        <LayoutGridRow>
          <LayoutGridCol d="6" t="6" m="4">
            <p>
              A ForPhysio Clinic é uma empresa portuguesa que presta serviços de fisioterapia desde Outubro de 2014.
              <br /><br />
              De forma a diferenciar a sua oferta de serviços, o fisioterapeuta Nuno Pina, fundador da ForPhysio Clinic
              e atual diretor, identificou a necessidade de criar serviços de fisioterapia que permitissem minimizar os
              períodos de recuperação e melhorar os resultados após intervenção clínica.
            </p>
          </LayoutGridCol>
          <LayoutGridCol d="6" t="6" m="4">
            <p>
              Desde esse momento que a ForPhysio Clinic tem evoluído consistentemente. Além do serviço de fisioterapia
              foram adicionados serviços complementares, de nutrição, performance e bem-estar. A coordenação do
              departamento de fisioterapia da Federação Portuguesa de Natação entre 2016 e 2020, é um marco na história
              da empresa.
            </p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="container-block container-block--with-image">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="8" t="7" m="4" start-col-d="5" start-col-t="6">
            <PictureImage
              alt="Equipa"
              class="container-block__image"
              src="/images/about-us/content/image-2/image-2-mobile.jpg"
              src-t="/images/about-us/content/image-2/image-2-tablet.jpg"
              src-d="/images/about-us/content/image-2/image-2-desktop.jpg"
            />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="7" t="7" m="4">
            <p>
              Aos dias de hoje, a ForPhysio conta com mais de dez parceiros em diversas áreas, e uma equipa de vinte
              profissionais que colaboram em 2 unidades próprias e 3 unidades parceiras, tornando possível o acesso a
              serviços de excelência.
            </p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-bottom: 20px;
}

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

.container-block {
  margin-bottom: 80px;

  h2 {
    margin-bottom: 40px;
    line-height: 1.3;

    @include mq-desktop {
      font-size: 64px;
    }

    @include mq-tablet {
      font-size: 60px;
    }

    @include mq-mobile {
      font-size: 50px;
    }
  }

  p {
    font-weight: $font-weight-light;
    line-height: 1.5;
    color: $medium-grey;

    @include mq-desktop {
      font-size: 24px;
    }

    @include mq-tablet {
      font-size: 20px;
    }

    @include mq-mobile {
      font-size: 18px;
    }
  }

  &__image {
    &--right {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @include mq-mobile {
    &--with-image {
      .layout-grid {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
}
</style>
