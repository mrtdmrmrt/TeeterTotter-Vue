<template>
  <div class="w-full flex items-center flex-col">
    <div
      class="teeter-totter-board w-full relative transition duration-300 ease-in-out bg-yellow-700 rounded-full" :style="boardStyle"
    >
      <TeeterObject
        v-for="element in droppedElements"
        :key="element.id"
        :element="element"
      ></TeeterObject>
      <TeeterObject
        v-for="element in randomPlacedElements"
        :key="element.id"
        :element="element"
      ></TeeterObject>
    </div>
    <div class="stand relative w-0 h-0 border "></div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { board } from "../constants";
import TeeterObject from "./Object";
export default {
  name: "TeeterTotter",
  components: {
    TeeterObject
  },
  computed: {
    ...mapState({
      elements: (state) => state.objectModule.elements,
    }),
    ...mapGetters([
      "droppedElements",
      "randomPlacedElements",
      "isBoardAngleWithinLimits",
      "boardBendingAngle",
    ]),
    sideDiff() {
      return this.droppedElements.length - this.randomPlacedElements.length;
    },
    boardStyle() {
      return {
        transform: `rotate(${this.boardBendingAngle / 2}deg)`,
        height: `${board.BOARD_HEIGHT}px`,
      };
    },
  },
  watch: {
    sideDiff(val) {
      if (val && this.isBoardAngleWithinLimits) {
        this.$store.commit("generateObject", true);
      }
    },
  }
};
</script>

<style scoped>
.stand {
	width: 0;
	height: 0;
	border-left: 3.5rem solid transparent;
	border-right: 3.5rem solid transparent;
	border-bottom: 8rem solid #3286d5;
}

.stand::after {
	content: "";
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: -0.5rem;
	left: -0.75rem;
	border-radius: 100%;
	display: block;
	background-color: orange;
}
</style>
