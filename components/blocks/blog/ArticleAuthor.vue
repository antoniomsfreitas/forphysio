<template>
  <div class="author" :size="size">
    <img :src="'/images/team/members/list/' + member.image" :alt="member.name" />
    <div class="author__info">
      <p class="label">{{ $t('blog.author') }}</p>
      <p class="name">{{ member.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/models/team.model';

defineProps({
  member: {
    type: Object as PropType<TeamMember>,
    required: true,
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    required: false,
    default: 'large',
  },
});
</script>

<style scoped lang="scss">
.author {
  display: flex;
  align-items: center;

  @include mq-mobile-tablet {
    gap: 12px;
  }

  @include mq-desktop {
    gap: 24px;
  }

  img {
    object-fit: contain;
    border: 1px solid $medium-grey;
    border-radius: 50%;
  }

  &__info {
    line-height: 1.2;
    text-align: left;

    .label {
      font-weight: $font-weight-light;
    }

    .name {
      font-weight: $font-weight-semi-bold;
    }
  }

  &[size='small'] {
    img {
      width: 68px;
      height: 68px;
    }

    .label {
      font-size: 16px;
      letter-spacing: 0.3px;
    }

    .name {
      font-size: 20px;
      letter-spacing: 0.4px;
    }
  }

  &[size='large'] {
    img {
      width: 100px;
      height: 100px;
    }

    .label {
      font-size: 24px;
      letter-spacing: 0.5px;
    }

    .name {
      letter-spacing: 0.6px;

      @include mq-mobile {
        font-size: 24px;
      }

      @include mq-tablet-desktop {
        font-size: 32px;
      }
    }
  }
}
</style>
