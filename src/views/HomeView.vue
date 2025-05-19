<script lang="ts">
import { defineComponent } from 'vue'
import CardTableFilter from '@/components/CardTableFilter.vue'
import CardTable from '@/components/CardTable.vue'
import CardSummary from '@/components/CardSummary.vue'


export default defineComponent({
  components: {
    CardTableFilter,
    CardTable,
    CardSummary
  },
  setup() {
  }
})
</script>

<template>
  <div class="mt-5 px-10">
    <CardTableFilter />
    <n-layout has-sider class="mt-5 ">
      <n-layout-sider>
        <CardSummary />
      </n-layout-sider>
      <n-layout>
        <n-layout-content class="ml-5">
          <CardTable />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>

</template>

<style scoped>
.n-card {
  border-radius: 16px;
}
</style>
