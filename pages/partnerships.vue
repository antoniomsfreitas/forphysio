<template>
  <div class="container">
    <IntroBlock :page-title="$t('pages.partnerships')" class="intro-block">
      <template #image>
        <PictureImage
          :alt="$t('pages.partnerships')"
          src="/images/partnerships/intro/image-desktop.jpg"
          src-t="/images/partnerships/intro/image-tablet.jpg"
          src-m="/images/partnerships/intro/image-mobile.jpg"
          :cover="true"
        />
      </template>

      <template #content>
        <p class="intro-block__text">
          {{ $t('partnerships.introduction') }}
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

    <LayoutGrid v-if="pageBlocks" class="page-blocks">
      <LayoutGridRow v-for="block in pageBlocks" :key="block.title" class="title-text-block">
        <LayoutGridCol m="4" t="8" d="7">
          <h3>{{ block.title }}</h3>
          <p>{{ block.text }}</p>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <PartnersBlock v-if="partners" :partners="partners" class="partners-block" />

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
const { getPage } = usePartnerships();
const { data, status } = await getPage();

const pageBlocks = computed(() => data.value?.pageBlocks);
const partners = computed(() => data.value?.partners);

const emit = defineEmits(['onDataLoaded']);

watch(
  status,
  (newStatus) => {
    if (newStatus === 'success') {
      emit('onDataLoaded');
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.intro-block {
  margin-bottom: 100px;

  &__text {
    padding-bottom: 40px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
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

.page-blocks {
  margin-bottom: 80px;

  .title-text-block {
    margin-bottom: 65px;

    h3 {
      @include mq-mobile-tablet {
        margin-bottom: 24px;
      }

      @include mq-desktop {
        margin-bottom: 40px;
      }
    }

    p {
      font-weight: $font-weight-light;
      line-height: 1.3;
      color: $medium-grey;

      @include mq-mobile-tablet {
        font-size: 20px;
      }

      @include mq-desktop {
        font-size: 24px;
      }
    }
  }
}

.partners-block {
  @include mq-mobile {
    margin-bottom: 80px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 120px;
  }
}

.form-block {
  margin-bottom: 120px;
}
</style>
