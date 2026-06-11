<template>
  <q-card class="text-white q-pa-lg shadow-5 card-request" flat bordered style="border-color: #333">
    <div class="row items-center no-wrap">
      
      <q-avatar rounded color="grey-9" text-color="white" size="44px" class="text-weight-bold q-mr-md">
        {{ userInitial }}
      </q-avatar>

      <div class="col column justify-center">
        
        <div class="text-subtitle2 text-white q-mb-xs">
          <span
            class="requester"
            @mouseenter="showProfileInfo = true"
            @mouseleave="showProfileInfo = false"
          >
            {{ props.request.requester.firstName }}
            <q-menu
              class="bg-transparent"
              v-model="showProfileInfo"
              no-parent-event
              anchor="top middle"
              self="bottom middle"
              :offset="[0, 8]"
              @mouseenter="showProfileInfo = true"
              @mouseleave="showProfileInfo = false"
            >
              <ProfileInfo />
            </q-menu>
          </span>
          <span class="text-grey-5 text-caption"> • 5h ago</span>
        </div>

        <div class="row items-center justify-between no-wrap">
          
          <div class="text-card">
            Solicitou acesso em
            <span class="acessFor"> {{ props.request.client.name }} </span> para
            <span class="acessLevel">{{ props.request.field }}</span>
          </div>

          <div style="min-width: 120px; display: flex; justify-content: flex-start;">
            <div :class="['status text-caption', statusClass]">
              <component :is="statusIcon" size="18px" /> {{ props.request.status.name }}
            </div>
          </div>

        </div>

      </div>
    </div>
  </q-card>
</template>

  <script setup>
  import { computed, onMounted, ref } from 'vue'
  import ProfileInfo from './ProfileInfo.vue'
  import { CircleCheckBig, ClockFading, ShieldMinus, Info } from '@lucide/vue'

  const props = defineProps({
    request: {
      type: Object,
      required: true,
    },
  })

  const showProfileInfo = ref(false)

  console.log(props.request.requester)

  const userInitial = computed(() => {
    const name = props.request?.requester?.firstName
    if (!name) return '?' // Retorna '?' se não tiver nome
    return name.charAt(0).toUpperCase()
  })

  function openProfileInfo() {
    showProfileInfo.value = true
  }

  const statusClass = computed(() => {
    const statusName = props.request?.status?.name

    const classMap = {
      Aprovado: 'aprovado',
      'Em análise': 'analise',
      Pendente: 'pendente',
      Reprovado: 'reprovado',
    }

    return classMap[statusName] || 'text-grey-5'
  })

  const statusIcon = computed(() => {
    const statusName = props.request?.status?.name

    const statusMap = {
      Aprovado: CircleCheckBig,
      'Em análise': ClockFading,
      Pendente: Info,
      Reprovado: ShieldMinus,
    }

    return statusMap[statusName]
  })
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

  .card-request {
    transition: 0.2s ease;
    background-color: #212121;
  }
  .card-request:hover {
    background-color: #393939;
    cursor: pointer;
  }

  .requester {
    font-size: 15px;
    font-weight: 600;
    transition: 0.3s ease;
    text-decoration: none;
  }

  .requester:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .acessFor {
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 0px;
    font-weight: bold;
    font-style: normal;
    justify-content: center;
    background-color: rgb(60, 60, 60);
    padding: 4px 0px 0px 4px;
    text-align: right;
    align-items: center;
    margin-right: 6px;
    transition: 0.3s ease;
  }

  .card-request:hover .acessFor {
    background-color: rgb(1, 99, 73);
    cursor: pointer;
  }

  .acessFor:hover {
    background-color: rgb(83, 83, 83);
    cursor: pointer;
  }

  .text-card {
    font-weight: 300;
    font-size: 14px;
    width: 100%;
  }

  .acessLevel {
    color: aquamarine;
    font-weight: 500;
    transition: 0.4s ease;
  }

  .acessLevel:hover {
    color: rgb(0, 217, 144);
    cursor: pointer;
  }

  .status {
    text-transform: uppercase;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 5px;
  }

  .status.aprovado {
    color: aquamarine;
  }

  .status.analise {
    color: rgb(144, 213, 255);
  }

  .status.pendente {
    color: rgb(249, 255, 127);
  }

  .status.reprovado {
    color: rgb(255, 168, 127);
  }
  </style>
