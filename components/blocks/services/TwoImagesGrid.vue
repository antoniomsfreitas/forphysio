<template>
  <div class="two-images-grid">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="6" d="6" class="two-images-grid__left">
          <CardUI>
            <PictureImage
              alt="Teste"
              :src="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-1-mobile.jpg`"
              :src-t="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-1-tablet.jpg`"
              :src-d="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-1-desktop.jpg`"
              cover
            />
          </CardUI>
        </LayoutGridCol>
        <LayoutGridCol m="4" t="6" d="5" start-col-d="8" class="two-images-grid__right">
          <CardUI>
            <PictureImage
              class="two-images-grid__right__image"
              alt="Teste"
              :src="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-2-mobile.jpg`"
              :src-t="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-2-tablet.jpg`"
              :src-d="`/images/services/detail/two-images-grid/fisioterapia-musculo-esqueletica/image-2-desktop.jpg`"
              cover
            />
          </CardUI>
          <div class="two-images-grid__right__content">
            <h2>Quais os benefícios?</h2>
            <ul>
              <li>
                <p><span class="highlight">Alívio</span> da dor</p>
              </li>
              <li>
                <p>Estilo de vida <span class="highlight">ativo e saudável</span></p>
              </li>
              <li>
                <p><span class="highlight">Capacitação</span> para atividades do dia a dia</p>
              </li>
            </ul>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<style scoped lang="scss">
.two-images-grid {
  @include mq-mobile {
    .layout-grid {
      padding: 0;
    }

    .layout-grid-row {
      grid-gap: 80px;
    }
  }

  &__left {
    .card {
      @include mq-mobile {
        border-radius: 0;
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @include mq-mobile {
      gap: 80px;
      padding: 0 24px;
    }

    @include mq-tablet {
      gap: 94px;
    }

    @include mq-desktop {
      gap: 126px;
    }

    &__image {
      @include mq-tablet {
        height: 340px;
      }

      @include mq-desktop {
        height: 475px;
      }
    }

    &__content {
      h2 {
        margin-bottom: 40px;

        @include mq-mobile {
          font-size: 30px;
        }

        @include mq-tablet {
          font-size: 40px;
        }
      }

      ul {
        li {
          display: flex;
          font-weight: $font-weight-light;
          line-height: 1.2;
          padding-bottom: 24px;
          color: $medium-grey;

          @include mq-mobile-tablet {
            font-size: 24px;
          }

          @include mq-desktop {
            font-size: 36px;
          }

          .highlight {
            color: $white;
          }

          &::before {
            content: '\2022';
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
