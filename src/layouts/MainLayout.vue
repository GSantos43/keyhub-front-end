<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-10">
        <!-- ESQUERDA -->
        <q-btn class="lt-md" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <!-- CENTRO (Empurra os itens abaixo para a direita) -->
        <q-toolbar-title> KeyHub </q-toolbar-title>
        <!-- DIREITA -->
        <q-btn flat round dense icon="settings" target="_blank" />
        <q-btn flat round dense icon="person" target="_blank" />
        
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above  style="background-color: #121212;">
      <div class="column justify-between fit">
        <q-list>
          <q-item-label header> KeyHub </q-item-label>

          <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>

        <q-list>
          <q-item-label header> KeyHub </q-item-label>

          <EssentialLink v-for="link in qf_list" :key="link.title" v-bind="link" />
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Clients',
    icon: 'security',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Solicitações',
    icon: 'beenhere',
    link: '/solicitacoes',
  },
  {
    title: 'Users',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Permissões',
    icon: 'key',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Eventos',
    icon: 'history',
    link: 'https://forum.quasar.dev',
  },
]

const qf_list = [
  {
    title: 'Configurações',
    icon: 'settings',
    link: 'https://quasar.dev',
  },
  {
    title: 'Suporte',
    icon: 'info',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Perfil',
    icon: 'person',
    link: 'https://github.com/quasarframework',
  },
]

const leftDrawerOpen = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
