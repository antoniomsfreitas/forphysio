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

        <NuxtLink :to="localePath(Routes.SERVICES)" :title="$t('general.book-evaluation')">
          <Button type="outline" size="medium">{{ $t('general.book-evaluation') }}</Button>
        </NuxtLink>
      </template>
    </IntroBlock>

    <LayoutGrid v-if="pageBlocks" class="page-blocks">
      <LayoutGridRow v-for="block in pageBlocks" :key="block.title" class="title-text-block">
        <LayoutGridCol m="4" t="8" d="7">
          <h3>{{ block.title }}</h3>
          <p v-if="block.text" v-html="replaceRoute(block.text)"></p>
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
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();

// Contacts
const { getContactsData } = useContacts();
const { data: contactsData } = await getContactsData({ contactsIntro: true });

const contactsIntro = computed(() => contactsData.value);

// Page
const { getPage } = usePartnerships();
const { data: pageData, status } = await getPage();

const pageBlocks = computed(() => pageData.value?.pageBlocks);
const partners = computed(() => pageData.value?.partners);

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

    :deep(a) {
      color: $white;
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
