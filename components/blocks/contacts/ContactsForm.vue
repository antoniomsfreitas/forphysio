<template>
  <div class="contacts-form" @submit.prevent="handleSubmit">
    <h3>{{ $t('contacts.form-title') }}</h3>

    <form class="form">
      <CustomInput
        type="text"
        :label="t('form-field.name')"
        v-model="formData.name.value"
        :required="formData.name.required"
        :errorMessage="formData.name?.errorMessage"
      />

      <CustomInput
        type="text"
        :label="t('form-field.phone')"
        v-model="formData.phone.value"
        :required="formData.phone.required"
        :errorMessage="formData.phone?.errorMessage"
      />

      <CustomInput
        type="email"
        :label="t('form-field.email')"
        v-model="formData.email.value"
        :required="formData.email.required"
        :errorMessage="formData.email?.errorMessage"
      />

      <CustomInputFile
        v-if="isRecruitmentForm"
        :label="t('form-field.cv')"
        v-model="formData.cv.value"
        :required="formData.cv.required"
        :errorMessage="formData.cv?.errorMessage"
        @upload-file="handleUploadCV"
      />

      <CustomSelect
        v-if="isContactsForm"
        :options="services"
        :top-label="t('form-field.service')"
        :default-label="'-- ' + t('form-field.service.default-label') + ' --'"
        v-model="formData.service.value"
        :required="formData.service.required"
        :errorMessage="formData.service?.errorMessage"
      />

      <CustomInput
        type="textarea"
        :label="t('form-field.message')"
        v-model="formData.message.value"
        :required="formData.message.required"
        :errorMessage="formData.message?.errorMessage"
      />

      <CustomCheckbox
        :label="t('form-field.terms')"
        v-model="formData.terms.value"
        :required="formData.terms.required"
        :errorMessage="formData.terms?.errorMessage"
      />

      <Button size="large">{{ $t('general.send') }}</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'contacts' | 'recruitment'>,
    required: false,
    default: 'contacts',
  },
});

import type { PropType } from 'vue';
import CustomInput from '~/components/layout/form/CustomInput.vue';
import type { FormData } from '~/models/form.model';

const { t } = useI18n();

const { services } = useServices();

const isContactsForm = computed(() => props.type == 'contacts');
const isRecruitmentForm = computed(() => props.type == 'recruitment');

const formData: FormData = reactive({
  name: {
    value: '',
    required: true,
    errorMessage: '',
  },
  phone: {
    value: '',
    required: true,
    errorMessage: '',
  },
  email: {
    value: '',
    required: true,
    type: 'email',
    errorMessage: '',
  },
  service: {
    value: 0,
    required: isContactsForm,
    errorMessage: '',
  },
  cv: {
    value: null,
    required: isRecruitmentForm,
    type: 'file',
    errorMessage: '',
  },
  message: {
    value: '',
    required: true,
    errorMessage: '',
  },
  terms: {
    value: false,
    required: true,
    errorMessage: '',
  },
});

const handleSubmit = () => {
  if (validateForm()) {
    // TO DO - SEND MAIL
  }
};

const handleUploadCV = (file: File) => {
  formData.cv.value = file;
};

const validateForm = () => {
  let success: boolean = true;

  for (const [key, field] of Object.entries(formData)) {
    // clean previous errors
    field.errorMessage = '';

    // validate field
    const error = validateField(field.value, field.required, field?.type);

    if (error?.length) {
      field.errorMessage = error;
      success = false;
    }
  }

  return success;
};
</script>

<style scoped lang="scss">
.contacts-form {
  h3 {
    line-height: 1.2;
    text-align: center;
    padding-bottom: 40px;
  }
}
</style>
