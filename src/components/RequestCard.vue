<template>
  <q-card class="text-white q-pa-lg shadow-5 card-request" flat bordered style="border-color: #333">
    <div class="flex flex-start" style="letter-spacing: 1px; line-height: 1.2">
      <div class="row items-center q-gutter-x-sm">
        <q-avatar rounded color="grey-9" text-color="white" size="40px" class="text-weight-bold">
          M
        </q-avatar>

        <div>
          <div class="text-subtitle2 text-white">
            <div></div>
            <span
              class="requester"
              @mouseenter="showProfileInfo = true"
              @mouseleave="showProfileInfo = false"
              >Maria
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
          <div>
            <div>
              <span class="text-card">
                Solicitou acesso em <span class="acessFor"> Clourse </span> para
                <span class="acessLevel">EDUCADOR</span>
              </span>
              <div
                class="row items-center q-mt-xs text-grey-5 text-caption"
                style="gap: 6px; letter-spacing: 0.5px"
              >
                <Info size="18px" /> APROVADO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProfileInfo from './ProfileInfo.vue'
import { Info } from '@lucide/vue'
import { api } from 'src/boot/axios.js'

const showProfileInfo = ref(false)

async function getRequest() {
  const response = await api.get('/v1/request')

  console.log(response.data)
}

function openProfileInfo() {
  showProfileInfo.value = true
}

onMounted(() => getRequest())
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
</style>
