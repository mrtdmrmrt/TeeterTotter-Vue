<template>
  <div class="flex flex-col mb-24 w-10/12 mx-auto flex-auto min-w-3/4">
    <Dropbox />
    <TeeterTotter />
  </div>
</template>

<script>
import TeeterTotter from "./TeeterTotter";
import Dropbox from "./Dropbox";
export default {
  name: "GameArea",
  components: {
    Dropbox,
    TeeterTotter
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.$store.commit("updateMovingIntervalGap", true);
      this.$store.commit("generateObject");
      this.$store.commit("generateObject");
      this.$store.commit("generateObject", true);
    },
  },
};
</script>
