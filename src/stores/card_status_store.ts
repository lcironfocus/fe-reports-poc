import { defineStore } from 'pinia'

export const useSprintYearStore = defineStore('sprintYear', {
  state: () => ({
    selectedSprintYear: new Date().getFullYear().toString()
  }),
  actions: {
    setSelectedSprintYear(value: string) {
      this.selectedSprintYear = value
    }
  }
})

export const useSprintStore = defineStore('sprint', {
  state: () => ({
    selectedSprint: new Date().toLocaleString('default', { month: 'long' }) // e.g., "May"
  }),
  actions: {
    setSelectedSprint(value: string) {
      this.selectedSprint = value
    }
  }
})

export const useStatusStore = defineStore('status', {
  state: () => ({
    selectedStatus: 'All' as string
  }),
  actions: {
    setSelectedStatus(value: string) {
      this.selectedStatus = value
    }
  }
})

export const useClientStore = defineStore('client', {
  state: () => ({
    selectedClient: 'All' as string
  }),
  actions: {
    setSelectedClient(value: string) {
      this.selectedClient = value
    }
  }
})

export const usePointTypeStore = defineStore('pointType', {
  state: () => ({
    selectedPointType: 'All' as string
  }),
  actions: {
    setSelectedPointType(value: string) {
      this.selectedPointType = value
    }
  }
})
