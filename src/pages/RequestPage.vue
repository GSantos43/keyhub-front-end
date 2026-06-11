<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-grey-10">
        <q-toolbar>
          <h4>Solicitações</h4>
          <!-- <q-btn flat round dense icon="search" /> -->
        </q-toolbar>

        <p class="text-weight-thin text-grey-6" style="padding-left: 12px; letter-spacing: 0px">
          Revise e gerencie solicitações.
        </p>

        <q-tabs v-model="tab" align="left">
          <q-tab name="Todas" label="Todas (12)" />
          <q-tab name="Pendentes" label="Pendentes (6)" />
          <q-tab name="articles" label="Em análise (22)" />
          <q-tab name="articles" label="Aprovado (3)" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <RequestCard 
          v-for="item in solicitacoes"
          :key="item.id"
          :request="item"
          />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { api } from 'src/boot/axios'
import RequestCard from 'src/components/RequestCard.vue'
import { onMounted, ref } from 'vue'

const solicitacoes = ref([])

async function getRequest() {
  try {
    const response = await api.get('v1/request')

    solicitacoes.value = response.data
  } catch (error) {
    console.error('Erro ao buscar solicitacoes', error)
  }
}

onMounted(() => {
  getRequest()
})

</script>

<style scoped></style>
