<template>
  <div class="container">
    <IntroRecruitment class="intro-block" />

    <LayoutGrid class="form-block">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="8" d="6" start-col-t="3" start-col-d="4">
          <ContactsForm type="recruitment" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import ContactsForm from '~/components/blocks/contacts/ContactsForm.vue';

// @TODO :: API request
const emit = defineEmits(['onDataLoaded']);
emit('onDataLoaded');
</script>

<style scoped lang="scss">
.intro-block {
  margin-bottom: 20px;
}

.form-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 160px;
  }
}
</style>
