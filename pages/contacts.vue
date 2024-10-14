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

    <LayoutGrid class="locations-block">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" d="6">
          <CardUI>
            <PictureImage
              :alt="$t('pages.contacts')"
              class="locations-block__image"
              src="/images/contacts/locations-block/image-mobile.jpg"
              src-t="/images/contacts/locations-block/image-tablet.jpg"
              src-d="/images/contacts/locations-block/image-desktop.jpg"
              cover
            />
          </CardUI>
        </LayoutGridCol>

        <LayoutGridCol m="4" t="12" d="5" start-col-d="8">
          <LocationsList />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

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
const { getContactsData } = useContacts();
const { data, status } = await getContactsData({ contactsIntro: true });

const contactsIntro = computed(() => data.value);

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

  @include mq-tablet {
    margin-bottom: 140px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
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

.locations-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 160px;
  }

  .layout-grid-row {
    @include mq-mobile-tablet {
      row-gap: 100px;
    }
  }

  &__image {
    img {
      max-width: 100%;
    }
  }
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
