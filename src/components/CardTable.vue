<template>
  <n-data-table :max-height="620" :columns="columns" :data="filteredEntries" :summary="createSummary" />
</template>

<script lang="ts">
import { defineComponent, h, computed } from 'vue'
import type { DataTableColumns, DataTableCreateSummary } from 'naive-ui'
import {
  useSprintYearStore,
  useSprintStore,
  useStatusStore,
  useClientStore,
  usePointTypeStore
} from '@/stores/card_status_store'
import { useFilteredEntriesStore } from '@/stores/data_store'


interface RowData {
  status: string
  client: string
  points: number
  point_type: string
  card_description: string
}

function createColumns(): DataTableColumns<RowData> {
  return [
    { title: 'Status', key: 'status' },
    { title: 'Client', key: 'client' },
    { title: 'Points', key: 'points' },
    { title: 'Point Type', key: 'point_type' },
    {
      title: 'Card Description', key: 'card_description', render(row) {
        return h(
          'a',
          {
            href: "https://cataas.com/cat",
            target: '_blank',
            rel: 'noopener noreferrer',
            style: 'color: #18a058; text-decoration: underline;'
          },
          row.card_description
        )
      }
    },
  ]
}

export default defineComponent({
  setup() {

    const sprintYearStore = useSprintYearStore()
    const sprintStore = useSprintStore()
    const statusStore = useStatusStore()
    const clientStore = useClientStore()
    const pointTypeStore = usePointTypeStore()
    const filteredEntriesStore = useFilteredEntriesStore()

    const filteredEntries = computed(() =>
      filteredEntriesStore.filtered.filter((entry) => {
        const matchSprintYear =
          sprintYearStore.selectedSprintYear === "2025" || entry.year === sprintYearStore.selectedSprintYear

        const matchSprint =
          sprintStore.selectedSprint === "May" || entry.month === sprintStore.selectedSprint

        const matchStatus =
          statusStore.selectedStatus === "All" || entry.status === statusStore.selectedStatus

        const matchClient =
          clientStore.selectedClient === "All" || entry.client === clientStore.selectedClient

        const matchPointType =
          pointTypeStore.selectedPointType === "All" || entry.point_type === pointTypeStore.selectedPointType

        return matchSprintYear && matchSprint && matchStatus && matchClient && matchPointType
      })
    )

    const createSummary: DataTableCreateSummary = (pageData) => {
      const totalPoints = (pageData as RowData[]).reduce((sum, row) => sum + row.points, 0)
      return {
        points: {
          value: h('strong', totalPoints.toString()),
          colSpan: 2
        }
      }
    }

    return {
      columns: createColumns(),
      filteredEntries,
      createSummary
    }
  }
})
</script>
