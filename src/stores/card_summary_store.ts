import { defineStore } from 'pinia'
import { useFilteredEntriesStore } from '@/stores/data_store'
import type { PointEntry } from '@/components/data'


function filterByStatus(entries: PointEntry[], status: string): PointEntry[] {
  return entries.filter(entry => entry.status === status)
}

export const useCardTotalStore = defineStore('cardTotal', {
  getters: {
    filteredEntries() {
      const filteredEntriesStore = useFilteredEntriesStore()
      return filteredEntriesStore.filtered
    },
    totalPoints(): number {
      return this.filteredEntries.reduce((sum, entry) => sum + entry.points, 0)
    },
    totalCards(): number {
      return this.filteredEntries.length
    }
  }
})


export const useCardPlannedStore = defineStore('cardPlanned', {
  getters: {
    filteredEntries() {
      const filteredEntriesStore = useFilteredEntriesStore()
      return filterByStatus(filteredEntriesStore.filtered, 'Planned')
    },
    totalPoints(): number {
      return this.filteredEntries.reduce((sum, entry) => sum + entry.points, 0)
    },
    totalCards(): number {
      return this.filteredEntries.length
    }
  }
})

export const useCardDoingStore = defineStore('cardDoing', {
  getters: {
    filteredEntries() {
      const filteredEntriesStore = useFilteredEntriesStore()
      return filterByStatus(filteredEntriesStore.filtered, 'Doing')
    },
    totalPoints(): number {
      return this.filteredEntries.reduce((sum, entry) => sum + entry.points, 0)
    },
    totalCards(): number {
      return this.filteredEntries.length
    }
  }
})

export const useCardDoneStore = defineStore('cardDone', {
  getters: {
    filteredEntries() {
      const filteredEntriesStore = useFilteredEntriesStore()
      return filterByStatus(filteredEntriesStore.filtered, 'Done')
    },
    totalPoints(): number {
      return this.filteredEntries.reduce((sum, entry) => sum + entry.points, 0)
    },
    totalCards(): number {
      return this.filteredEntries.length
    }
  }
})

export const useCardBlockedStore = defineStore('cardBlocked', {
  getters: {
    filteredEntries() {
      const filteredEntriesStore = useFilteredEntriesStore()
      return filterByStatus(filteredEntriesStore.filtered, 'Blocked')
    },
    totalPoints(): number {
      return this.filteredEntries.reduce((sum, entry) => sum + entry.points, 0)
    },
    totalCards(): number {
      return this.filteredEntries.length
    }
  }
})

