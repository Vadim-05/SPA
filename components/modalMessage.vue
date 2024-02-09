<template>
  <v-dialog class="v-dialog" v-model="dialog" width="auto">
    <v-card class="v-card">
      <v-card-actions class="flex-end">
        <img class="close-modal-picture" @click="dialog = false" src="/closeModal.png"/>
      </v-card-actions>
      <v-card-title v-if='statusMessage' class="font-open-sans text-center">
        {{ statusMessage }}
      </v-card-title>
      <v-card-text :class="{'pt-3':statusMessage}" class="text-center card-text font-open-sans">
        {{ message }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
var dialog = ref(false);

const statusMessage = ref('');
const message = ref('');
const bus = useNuxtApp().$bus

bus.$on('dataModalWindow', (data) => {
  dialog.value = true;
  statusMessage.value = data.status;
  message.value = data.textMessage;
});
</script>
<style scoped lang="scss">
@import '~/scss/mainColors.scss';
.v-card .v-card-title{
  padding: 0;
}
.v-dialog > .v-overlay__content > .v-card > .card-text, .v-dialog > .v-overlay__content > form > .v-card > .card-text{
  padding-bottom: 36px;
  font-size: 14px;
}
.v-dialog > .v-overlay__content > .v-card, .v-dialog > .v-overlay__content > form > .v-card{
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(90deg, $main-border-modal 0%, $main-border-modal 100%) 1;
  width: 300px;
}
.close-modal-picture{
  width: 20px;
  cursor: pointer;
}
.v-dialog > .v-overlay__content{
  max-width: 400px ;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-text, .v-dialog > .v-overlay__content > form > .v-card > .v-card-text{
  padding-top: 50px;
}
.v-card-actions{
  padding: 0;
  width: 20px;
  min-height: 20px;
  top: 11px;
  right: 15px;
  position: absolute;
}
.v-card .v-card-title>.v-card-text{
  padding-top: 20px;
}
.v-card .v-card-title{
  font-size: 20px;
  padding-top: 38px;
}
@media screen and (min-width: 768px){
  .v-dialog > .v-overlay__content > .v-card, .v-dialog > .v-overlay__content > form > .v-card{
    width: 415px;
  }
  .close-modal-picture{
    width: 26px;
  }
  .v-dialog > .v-overlay__content{
    max-width: 400px ;
  }
  .v-card-actions{
    width: 26px;
    top: 13px;
    right: 17px;
    min-height: 26px;
  }
  .v-card .v-card-title{
    font-size: 26px;
    padding: 45px 0 16px 0;
  }
  .v-dialog > .v-overlay__content > .v-card > .card-text, .v-dialog > .v-overlay__content > form > .v-card > .card-text{
    font-size: 18px;
  }
}
</style>