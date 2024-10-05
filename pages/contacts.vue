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
          <h3 class="locations-block__title">{{ $t('contacts.available-units') }}:</h3>
          <ul class="locations-block__list">
            <li v-for="location in locations" :key="location.name" class="locations-block__list__item">
              <p class="title">{{ location.name }}</p>
              <p class="address">{{ location.address }}</p>
              <p class="phone">
                <Icon name="icon:phone" />
                <span>{{ location.phone }}</span>
              </p>

              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="hours" v-html="location.hours" />
            </li>
          </ul>
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
const { locations, social } = useContacts();
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

  &__title {
    @include mq-mobile-tablet {
      padding-bottom: 24px;
    }

    @include mq-desktop {
      padding-bottom: 60px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @include mq-mobile {
      grid-template-columns: 1fr;
    }

    @include mq-tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @include mq-desktop {
      grid-template-columns: 1fr 1fr;
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 18px;
      font-weight: $font-weight-light;
      line-height: 1.2;

      .title {
        font-size: 20px;
        font-weight: $font-weight-semi-bold;
      }

      .phone {
        display: flex;
        gap: 4px;
        align-items: center;

        span {
          display: block;
        }
      }
    }
  }
}

.form-block {
  margin-bottom: 160px;
  background-color: $deep-grey;

  @include mq-mobile {
    padding: 80px 0;
  }

  @include mq-tablet-desktop {
    padding: 60px 0;
  }
}
</style>
