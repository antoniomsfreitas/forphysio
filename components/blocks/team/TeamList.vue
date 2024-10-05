<template>
  <LayoutGrid>
    <LayoutGridRow class="team-list-title">
      <LayoutGridCol m="4" t="12" d="12">
        <h3>Encontre o seu profissional</h3>
      </LayoutGridCol>
    </LayoutGridRow>
    <LayoutGridRow class="team-filters">
      <LayoutGridCol m="4" t="4" d="4" start-col-d="2">
        <CustomSelect v-model="selectedLocationId" :options="teamLocations" default-label="Localizações" />
      </LayoutGridCol>

      <LayoutGridCol m="4" t="4" d="4">
        <CustomSelect v-model="selectedServiceId" :options="teamServices" default-label="Serviços" />
      </LayoutGridCol>

      <LayoutGridCol m="4" t="4" d="2">
        <Button class="team-filters__submit" size="large" @click="submitFilters()">Pesquisar</Button>
      </LayoutGridCol>
    </LayoutGridRow>

    <LayoutGridRow class="team-list">
      <LayoutGridCol m="4" t="5" d="3" class="team-list__locations">
        <h2>Conheça a equipa</h2>
        <div v-if="teamLocations" class="team-list__locations__list">
          <span class="team-list__locations__list__title">Selecione a Unidade</span>
          <ul>
            <li
              v-for="location in teamLocations"
              :class="{ '--selected': location.id == currentLocationId }"
              @click="changeLocation(location.id)"
            >
              <Icon name="icon:location" size="40" />
              <span>{{ location.title }}</span>
            </li>
          </ul>
          <Button class="team-list__locations__list__view-all" @click="resetFilters()">Ver equipa completa</Button>
        </div>
      </LayoutGridCol>
      <LayoutGridCol m="4" t="7" d="8" class="team-list__members">
        <LayoutGrid>
          <LayoutGridRow v-if="teamMembers.length" :col-number-tablet="9" :col-number-desktop="8">
            <LayoutGridCol
              v-for="member in teamMembers"
              :key="member.id"
              m="2"
              t="3"
              d="2"
              class="team-list__members__item"
            >
              <CardTeam
                v-if="member.name && member.image"
                :title="member.name"
                :subtitle="getService(member.service)?.title"
                :src="member.image"
                :alt="member.name"
                :link="localePath(Routes.TEAM) + '/' + member.slug"
              />
            </LayoutGridCol>
          </LayoutGridRow>

          <LayoutGridRow v-else :col-number-tablet="9" :col-number-desktop="8">
            <LayoutGridCol m="2" t="3" d="2" class="team-list__members__empty">Sem resultados.</LayoutGridCol>
          </LayoutGridRow>
        </LayoutGrid>
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
import type { TeamLocation, TeamMember, TeamService } from '~/models/team.model';

const { getTeamMembers, getService, getTeamServices, getTeamLocations, getDefaultLocationId } = useTeam();
const localePath = useLocalePath();

// Locations
const currentLocationId = ref(getDefaultLocationId());
const selectedLocationId = ref(currentLocationId.value);
const teamLocations: TeamLocation[] = getTeamLocations();

// Services
const currentServiceId = ref(0);
const selectedServiceId = ref(currentServiceId.value);
const teamServices: TeamService[] = getTeamServices();

// Members
const teamMembers = computed((): TeamMember[] => {
  return getTeamMembers(currentLocationId.value, currentServiceId.value);
});

// Methods
const resetFilters = () => {
  selectedLocationId.value = 0;
  selectedServiceId.value = 0;

  submitFilters();
};

const submitFilters = () => {
  currentLocationId.value = selectedLocationId.value;
  currentServiceId.value = selectedServiceId.value;
};

const changeLocation = (locationId: number) => {
  currentLocationId.value = locationId;
  selectedLocationId.value = locationId;
};
</script>

<style scoped lang="scss">
.team-list-title {
  margin-bottom: 40px;
  text-align: center;
}

.team-filters {
  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 200px;
  }

  &__submit {
    width: 100%;
  }
}

.team-list {
  &__locations {
    @include mq-mobile {
      margin-bottom: 100px;
    }

    h2 {
      text-wrap: balance;
      line-height: 1.1;
      padding-bottom: 40px;
    }

    &__list {
      font-size: 18px;
      line-height: 1.2;

      &__title {
        display: block;
        font-weight: $font-weight-semi-bold;
        padding-bottom: 14px;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-bottom: 40px;

        li {
          display: flex;
          align-items: center;
          font-weight: $font-weight-light;
          color: $white;
          cursor: pointer;
          transition: $transition-duration ease-in-out all;

          &:hover {
            color: $medium-grey;
          }

          &.--selected {
            font-weight: $font-weight-semi-bold;
            color: $blue;
          }

          span {
            display: block;
          }
        }
      }

      &__view-all {
        min-width: 224px;

        @include mq-mobile {
          width: 100%;
        }
      }
    }
  }

  &__members {
    @include mq-mobile {
      max-width: 360px;
      margin: 0 auto;
    }

    .layout-grid {
      padding: 0;
    }

    &__empty {
      font-size: 18px;
      line-height: 1.2;
      font-weight: $font-weight-light;
    }
  }
}
</style>
