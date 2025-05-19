import { defineStore } from 'pinia'
import { computed } from 'vue'
import {
  useSprintYearStore,
  useSprintStore,
  useStatusStore,
  useClientStore,
  usePointTypeStore
} from '@/stores/card_status_store'
import { pointEntries } from '@/components/data';

export type PointEntry = {
  status: "Done" | "Blocked" | "Planned";
  client: "Client A" | "Client B";
  points: number;
  point_type: "Prepaid" | "Retainer";
  card_description: string;
  month: string;
  year: string;
};

export const useFilteredEntriesStore = defineStore('filteredEntries', () => {
  const sprintYearStore = useSprintYearStore()
  const sprintStore = useSprintStore()
  const statusStore = useStatusStore()
  const clientStore = useClientStore()
  const pointTypeStore = usePointTypeStore()

  const filtered = computed(() =>
    pointEntries.filter((entry) => {
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

  return {
    filtered
  }
})
