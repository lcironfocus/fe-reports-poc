<script lang="ts">
import { defineComponent, h, } from 'vue'
import { progressSvg, doneSvg, blockedSvg, reportSvg, calendarSvg } from './icons'
import { useCardTotalStore, useCardPlannedStore, useCardDoingStore, useCardDoneStore, useCardBlockedStore } from '@/stores/card_summary_store'

export default defineComponent({
  setup() {

    const cardTotalStore = useCardTotalStore()
    const cardPlannedStore = useCardPlannedStore()
    const cardDoingStore = useCardDoingStore()
    const cardDoneStore = useCardDoneStore()
    const cardBlockedStore = useCardBlockedStore()

    const doingTitle = () =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h(progressSvg),
        h('span', 'Doing')
      ])

    const doneTitle = () =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h(doneSvg),
        h('span', 'Done')
      ])

    const blockedTitle = () =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h(blockedSvg),
        h('span', 'Blocked')
      ])

    const totalTitle = () =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h(reportSvg),
        h('span', 'Total')
      ])

    const plannedTitle = () =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h(calendarSvg),
        h('span', 'Planned')
      ])


    return {
      doingTitle,
      doneTitle,
      blockedTitle,
      totalTitle,
      plannedTitle,
      cardTotalStore,
      cardPlannedStore,
      cardDoingStore,
      cardDoneStore,
      cardBlockedStore
    }
  },
})
</script>

<template>
  <n-grid cols="1" y-gap="15">
    <n-grid-item>
      <n-card :title=totalTitle size="small">
        <n-grid cols="2" x-gap="2">
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardTotalStore.totalPoints }}</span>
              <span>
                Points
              </span>
            </n-flex>
          </n-grid-item>
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardTotalStore.totalCards }}</span>
              <span>Cards</span>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>

    <n-grid-item>
      <n-card :title=plannedTitle size="small">
        <n-grid cols="2" x-gap="2">
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold"> {{ cardPlannedStore.totalPoints }}</span>
              <span>Points</span>
            </n-flex>
          </n-grid-item>
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardPlannedStore.totalCards }}</span>
              <span>Cards</span>
            </n-flex>
          </n-grid-item>
        </n-grid>

      </n-card>
    </n-grid-item>

    <n-grid-item>
      <n-card :title=doingTitle size="small">
        <n-grid cols="2" x-gap="2">
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold"> {{ cardDoingStore.totalPoints }}</span>
              <span>Points</span>
            </n-flex>
          </n-grid-item>
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold"> {{ cardDoingStore.totalCards }}</span>
              <span>Cards</span>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>

    <n-grid-item>
      <n-card :title=doneTitle size="small">
        <n-grid cols="2" x-gap="2">
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardDoneStore.totalPoints }}</span>
              <span>Points</span>
            </n-flex>
          </n-grid-item>
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardDoneStore.totalCards }}</span>
              <span>Cards</span>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>

    <n-grid-item>
      <n-card :title=blockedTitle size="small">
        <n-grid cols="2" x-gap="2">
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold">{{ cardBlockedStore.totalPoints }}</span>
              <span>Points</span>
            </n-flex>
          </n-grid-item>
          <n-grid-item>
            <n-flex vertical>
              <span class="text-lg font-semibold"> {{ cardBlockedStore.totalCards }}</span>
              <span>Cards</span>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
