<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSprintYearStore, useSprintStore, useStatusStore, useClientStore, usePointTypeStore } from '@/stores/card_status_store'


export default defineComponent({
  setup() {

    const sprintYearStore = useSprintYearStore()
    const sprintStore = useSprintStore()
    const statusStore = useStatusStore()
    const clientStore = useClientStore()
    const pointTypeStore = usePointTypeStore()

    const defaultSprintYear = computed({
      get: () => sprintYearStore.selectedSprintYear,
      set: (val: string) => {
        sprintYearStore.setSelectedSprintYear(val)
      }
    })

    const defaultSprint = computed({
      get: () => sprintStore.selectedSprint,
      set: (val: string) => {
        sprintStore.setSelectedSprint(val)
      }
    })

    const defaultStatus = computed({
      get: () => statusStore.selectedStatus,
      set: (val: string) => {
        statusStore.setSelectedStatus(val)
      }
    })

    const defaultClient = computed({
      get: () => clientStore.selectedClient,
      set: (val: string) => {
        clientStore.setSelectedClient(val)
      }
    })

    const defaultPointType = computed({
      get: () => pointTypeStore.selectedPointType,
      set: (val: string) => {
        pointTypeStore.setSelectedPointType(val)
      }
    })


    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    const months = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2000, i); // year doesn't matter
      const monthName = date.toLocaleString('default', { month: 'long' });
      return {
        label: monthName,
        value: monthName
      };
    }).filter(month => month.value !== currentMonth); // Exclude current month

    months.push({
      label: `Current (${currentMonth})`,
      value: currentMonth
    });


    const currentYear = new Date().getFullYear().toString();

    const years = Array.from({ length: 3 }, (_, i) => {
      const year = (2023 + i).toString();
      return {
        label: year,
        value: year
      };
    }).filter(year => year.value !== currentYear); // Exclude current year

    years.push({
      label: `Current (${currentYear})`,
      value: currentYear
    });

    return {
      defaultSprintYear,
      defaultSprint,
      defaultStatus,
      defaultClient,
      defaultPointType,
      sprint_year: years,
      sprint: months,
      status: [
        {
          label: 'Done',
          value: 'Done'
        },
        {
          label: 'Doing',
          value: 'Doing'
        },
        {
          label: 'Planned',
          value: 'Planned'
        },
        {
          label: 'All',
          value: 'All'
        },
      ],
      client: [
        {
          label: 'Client A',
          value: 'Client A'
        },
        {
          label: 'Client B',
          value: 'Client B'
        },
        {
          label: 'Client C',
          value: 'Client C'
        },
        {
          label: 'Client D',
          value: 'Client D'
        },
        {
          label: 'All',
          value: 'All'
        },
      ],
      point_type: [
        {
          label: 'Prepaid',
          value: 'Prepaid'
        },
        {
          label: 'Retainer',
          value: 'Retainer'
        },
        {
          label: 'All',
          value: 'All'
        },
      ]
    }
  }
})
</script>

<template>
  <n-grid x-gap="12" :cols="6">
    <n-gi>
      <div style="display: flex; align-items: center; justify-content: center; height: 100%;" class="px-5">
        <n-image width="400" height="400" src="/src/assets/logo.png" />
      </div>
    </n-gi>
    >

    <n-gi>
      <n-card title="Sprint Year">
        <n-select v-model:value="defaultSprintYear" :options="sprint_year" />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="Sprint">
        <n-select v-model:value="defaultSprint" :options="sprint" />
      </n-card>
    </n-gi>

    <n-gi>
      <n-card title="Card Status">
        <n-select v-model:value="defaultStatus" :options="status" />
      </n-card>
    </n-gi>

    <n-gi>
      <n-card title="Client">
        <n-select v-model:value="defaultClient" :options="client" />
      </n-card>
    </n-gi>

    <n-gi>
      <n-card title="Point Type">
        <n-select v-model:value="defaultPointType" :options="point_type" />
      </n-card>
    </n-gi>
  </n-grid>
</template>
