import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  actions: {
    async fill() {
      let r = await import('@/team.json');

      this.$state = r.default;
    },

    grow(spots) {
      this.spots = spots;
    },

    addMember(name, email) {
      let member = {
        name : name,
        email : email,
        status : "active"
      }
      console.log(member);
      if (this.spotsRemaining > 0) {
        this.members.push(member);
      } else {
        throw new Error("No spots remaining to add a new member.");
      }
    }

  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    }
  }
});