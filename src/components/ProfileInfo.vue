<template>
  <q-card
    class="bg-grey-10 text-white q-pa-lg"
    bordered
    flat
    style="border-radius: 12px; border-color: #333; box-shadow: 2px 2px 2px 2px black"
  >
    <div
      class="flex flex-start text-overline text-grey-5"
      style="letter-spacing: 1px; line-height: 1.2"
    >
      <div class="row items-center q-gutter-x-sm">
        <q-avatar
          @mouseenter="corAvatar = 'grey-10'"
          @mouseleave="corAvatar = 'black'"
          rounded
          :color="corAvatar"
          text-color="white"
          size="30px"
          class="text-weight-bold avatar"
          style="border-radius: 50%"
        >
          M
        </q-avatar>

        <div>
          <div class="text-subtitle2 text-white">
            <div></div>
            <span
              class="requester"
              @mouseenter="showProfileInfo = true"
              @mouseleave="showProfileInfo = false"
              >Maria Fernanda Alves
              <q-menu
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
            <span class="text-grey-5 text-caption"> • <span>mariateste@gmail.com</span> </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const corAvatar = ref('black')
</script>

<style scoped>
.avatar {
  transition: 0.3s ease;
}

.avatar:hover {
  cursor: pointer;
}

.requester {
  color: ffffff;
  font-size: 15px;
  font-weight: 600;
  transition: 0.4s ease;
  text-decoration: none;
}

.requester:hover {
  color: aquamarine;
  cursor: pointer;
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
