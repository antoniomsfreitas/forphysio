<template>
  <div class="container">
    <IntroBlock :page-title="$t('contacts.page-title')" content-col-desktop="6" class="intro-block">
      <template #image>
        <PictureImage
          :alt="$t('pages.contacts')"
          src="/images/contacts/intro/image-desktop.jpg"
          src-t="/images/contacts/intro/image-tablet.jpg"
          src-m="/images/contacts/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <p class="intro-block__text">
          {{ $t('contacts.page-subtitle') }}
        </p>

        <div v-if="contactsIntro" class="intro-block__contacts">
          <a
            v-for="contact in contactsIntro"
            :key="contact.id"
            :href="contact.link"
            :title="contact.name"
            class="intro-block__contacts__item"
            target="_blank"
          >
            <Icon :name="'icon:' + contact.icon" />
            <span>{{ contact.value }}</span>
          </a>
        </div>

        <Button type="outline" size="medium">{{ $t('general.bookAppointment') }}</Button>
      </template>
    </IntroBlock>

    <LocationsMap v-if="locations" :locations="locations" class="locations-map" />

    <div class="form-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="8" d="6" start-col-t="3" start-col-d="4">
            <ContactsForm />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <SocialMediaBanner />
  </div>
</template>

<script setup lang="ts">
const { getContactsData, getLocationsData } = useContacts();
const { data: contactsData, status } = await getContactsData({ contactsIntro: true });
const { data: locationsData } = await getLocationsData();

const contactsIntro = computed(() => contactsData.value);
const locations = computed(() => locationsData.value);

const emit = defineEmits(['onDataLoaded']);
watch(
  status,
  (newStatus) => {
    if (newStatus == 'success') {
      emit('onDataLoaded');
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.intro-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 140px;
  }

  &__text {
    padding-bottom: 40px;
    color: $medium-grey;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;

    &__item {
      display: flex;
      gap: 24px;
      align-items: center;
      color: $white;
      text-decoration: none;

      .icon {
        @include mq-mobile {
          width: 30px;
          font-size: 30px;
        }

        @include mq-tablet-desktop {
          width: 40px;
          font-size: 40px;
        }
      }

      span {
        font-weight: $font-weight-semi-bold;
        line-height: 1.2;

        @include mq-mobile {
          font-size: 20px;
        }

        @include mq-tablet-desktop {
          font-size: 24px;
        }
      }
    }
  }

  .button {
    min-width: 350px;

    @include mq-mobile {
      width: 100%;
      min-width: 0;
    }
  }
}

.locations-map {
  margin-bottom: 100px;
}

.form-block {
  background-color: $deep-grey;

  @include mq-mobile {
    padding: 80px 0;
  }

  @include mq-tablet-desktop {
    padding: 100px 0;
  }
}
</style>
