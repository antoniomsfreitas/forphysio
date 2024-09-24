<template>
  <div class="container">
    <IntroBlock :page-title="$t('contacts.page-title')" contentColDesktop="6" class="intro-block">
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

        <div class="intro-block__contacts">
          <a
            v-if="social.whatsapp"
            :href="'https://wa.me/' + social.whatsapp.value"
            class="intro-block__contacts__item"
          >
            <Icon name="icon:whatsapp" />
            <span>{{ social.whatsapp.value }}</span>
          </a>

          <a v-if="social.email" :href="'mailto:' + social.email.value" class="intro-block__contacts__item">
            <Icon name="icon:email" />
            <span>{{ social.email.value }}</span>
          </a>
        </div>

        <Button type="outline" size="medium">{{ $t('general.book-evaluation') }}</Button>
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
  </div>
</template>

<script setup lang="ts">
const { social } = useContacts();
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
    color: $medium-grey;
    padding-bottom: 40px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;

    &__item {
      display: flex;
      align-items: center;
      gap: 24px;
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
  margin-bottom: 160px;

  @include mq-mobile {
    padding: 80px 0;
  }

  @include mq-tablet-desktop {
    padding: 60px 0;
  }
}
</style>
