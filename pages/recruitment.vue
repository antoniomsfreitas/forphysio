<template>
  <div class="container">
    <IntroRecruitment class="intro-block" />

    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="8" d="6" start-col-t="3" start-col-d="4">
          <ContactsForm :show-cv="true" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import ContactsForm from '~/components/blocks/contacts/ContactsForm.vue';
</script>

<style scoped lang="scss">
.intro-block {
  margin-bottom: 20px;
}
</style>
