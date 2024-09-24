<template>
  <div class="topics-list">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="10" d="6" start-col-t="2" start-col-d="2">
          <h2>É indicada para que situações?</h2>
          <ul>
            <li>Dor (costas, ombro, cotovelo, joelho, anca)</li>
            <li>Hérnias</li>
            <li>Entorse</li>
            <li>Rotura (ligamentos, musculares)</li>
            <li>Lesões meniscais</li>
            <li>Tendinopatias</li>
            <li>Condromalacia (lesões da cartilagem)</li>
            <li>Fascite plantar</li>
            <li>Síndrome do túnel cárpico</li>
          </ul>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<style scoped lang="scss">
.topics-list {
  h2 {
    margin-bottom: 40px;
    line-height: 1.2;

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
      color: $medium-grey;
      font-weight: $font-weight-light;
      line-height: 1.2;
      padding-bottom: 12px;

      @include mq-mobile-tablet {
        font-size: 24px;
      }

      @include mq-desktop {
        font-size: 32px;
      }

      &::before {
        content: '\2022';
        padding: 0 10px;
      }
    }
  }
}
</style>
