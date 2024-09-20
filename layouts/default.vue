<template>
  <div class="container">
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.container {
  opacity: 0;
  animation: 250ms ease-in 300ms forwards fadeIn;
}

@include mq-desktop {
  main {
    padding-top: var(--header-height);
  }
}
</style>
