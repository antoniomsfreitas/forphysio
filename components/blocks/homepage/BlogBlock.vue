<template>
  <div v-if="isViewportLoaded">
    <BlogBlockDesktop v-if="isDesktop" class="blog-block__desktop" />
    <BlogBlockMobile v-else class="blog-block__mobile" />
  </div>
</template>
