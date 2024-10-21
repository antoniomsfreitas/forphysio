<template>
  <div class="container">
    <div class="highlighted-article">
      <ArticleHighlightHomepage />
    </div>

    <div class="container__bottom">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="12">
            <div class="slideshow">
              <BlogCardsSlideshow :space-between="12" />
            </div>
          </LayoutGridCol>
        </LayoutGridRow>

        <LayoutGridRow>
          <LayoutGridCol m="4" t="12">
            <div class="fullscreen-cta">
              <div class="fullscreen-cta__container">
                <IconLink
                  :link="localePath(Routes.BLOG)"
                  class="fullscreen-cta__icon"
                  text="Ver todos"
                  semi-bold
                  :color="IconLinkColors.WHITE"
                />
              </div>
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
import { IconLinkColors } from '~/models/ui.model';

const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.container {
  position: relative;
  overflow: hidden;

  .highlighted-article {
    position: relative;
    width: 100%;
  }

  &__bottom {
    position: relative;
    z-index: 3;
    margin-top: -95px;
  }

  .slideshow {
    margin-bottom: 40px;
  }

  .fullscreen-cta {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
