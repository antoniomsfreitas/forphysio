<template>
  <div class="social-media-banner">
    <PictureImage
      :alt="$t('contacts.socialMediaBanner.alt')"
      src="/images/contacts/social-media-banner/image-mobile.jpg"
      src-t="/images/contacts/social-media-banner/image-tablet.jpg"
      src-d="/images/contacts/social-media-banner/image-desktop.jpg"
      cover
    />

    <div class="social-media-banner__gradient" />

    <div class="social-media-banner__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="6" start-col-t="4" start-col-d="4">
            <p>Visite as nossas redes sociais</p>

            <ul>
              <li v-for="contact in social_media" :key="contact.id">
                <a :href="contact.link" :title="contact.value" target="_blank">
                  <Icon :name="'icon:' + contact.icon" />
                </a>
              </li>
            </ul>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getContactsData } = useContacts();
const { data } = await getContactsData({ social_media: true });

const social_media = computed(() => data.value);
</script>

<style scoped lang="scss">
.social-media-banner {
  position: relative;

  @include mq-mobile {
    height: 480px;
  }

  @include mq-tablet-desktop {
    height: 600px;
  }

  :deep(img) {
    @include mq-mobile {
      max-width: 767px;
    }

    @include mq-tablet {
      max-width: 1279px;
    }

    @include mq-desktop {
      max-width: 1920px;
    }
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 100);
  }

  &__content {
    position: absolute;
    left: 0;
    z-index: 3;
    width: 100%;
    text-align: center;

    @include mq-mobile {
      bottom: 80px;
    }

    @include mq-tablet-desktop {
      bottom: 140px;
    }

    p {
      margin-bottom: 40px;
      font-weight: $font-weight-semi-bold;
      line-height: 1.2;

      @include mq-mobile {
        font-size: 18px;
      }

      @include mq-tablet-desktop {
        font-size: 24px;
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      @include mq-mobile {
        gap: 40px;
      }

      @include mq-tablet-desktop {
        gap: 66px;
      }

      a {
        display: block;

        .icon {
          @include mq-mobile {
            font-size: 30px;
          }

          @include mq-tablet {
            font-size: 40px;
          }

          @include mq-desktop {
            font-size: 50px;
          }
        }
      }
    }
  }
}
</style>
