<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import TeamAddModal from "@/components/Teams/TeamAddModal.vue";

import { useTeamStore } from "@/stores/TeamStore";
import { ref } from "vue";
let team = useTeamStore();
team.fill();
let showModal = ref(false);
let name = ref('');
let email = ref('');

function addTeamMember() {
  team.addMember(name.value, email.value);
  showModal = false;
}
</script>

<template >
  <div style="display:flex; flex-direction: column;">
    
    <TeamHeader :team="team"   @add="showModal = true"/>
    
    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
      <TeamMembers :team="team" />
    </div>
    
    <TeamFooter :team="team" />
  </div>
  <TeamAddModal :show="showModal" @close="showModal = false">
    <template #default>
      <p>Need to add a new member to your team?</p>

      <form class="mt-6 gap-2">
        <div class="m-2">
          <input type="input" placeholder="Name..." v-model="name" class="flex-1">
        </div>
        <div class="m-2">
          <input type="email" placeholder="Email Address..." v-model="email" class="flex-1">
        </div>
        <div class="button-container">
          <button @click="addTeamMember()" class="add-button">Add</button>
        </div>
      </form>
    </template>
  </TeamAddModal>
</template>

<style>
  .add-button{
    background: #402889;
    padding: .25rem .75rem;
    border-radius: 20px;
    color: white;
    margin-left: auto;
  }

  .button-container{
    display: flex;
    align-items: flex-end;
  }
</style>