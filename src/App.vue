<template>
  <div class="container-app flex flex-col gap-20 justify-center">
    <div class="calc flex justify-center gap-20" v-if="valutesFull">
      <div class="i-have">
        <p>У меня есть</p>
        <div class="flex gap-2">
          <div
            class="pl-5 pr-5 pt-2 pb-2 rounded shadow cursor-pointer"
            :class="{'bg-green-400 text-white shadow-md': val.active}"
            v-for="(val, index) in selectedValutesHave"
            :key="index"
            @click="SetActiveHave(val.CharCode)"
          >{{ val.CharCode }}</div>
        </div>
        <div>
          <!-- <input type="text"> -->
          1 {{ activeHave.CharCode }} = {{ activeWant.CharCode }} 
        </div>
      </div>
      <div class="i-change"></div>
      <div class="i-buy">
        <p>Хочу приобрести</p>
        <div class="flex gap-2">
          <div
            class="pl-5 pr-5 pt-2 pb-2 rounded shadow cursor-pointer"
            :class="{'bg-green-400 text-white shadow-md': val.active}"
            v-for="(val, index) in selectedValutesWant"
            :key="index"
            @click="SetActiveWant(val.CharCode)"
          >{{ val.CharCode }}</div>
        </div>
      </div>
    </div>
    <div class="use-api flex flex-col justify-center border border-green-300 rounded w-full max-w-xs self-center p-5 shadow-lg gap">
      <a class="border-b border-green-100 hover:border-green-400 p-2 pl-5 hover:bg-green-400 rounded hover:text-white hover:shadow-lg" href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
      <a class="border-b border-green-100 hover:border-green-400 p-2 pl-5 hover:bg-green-400 rounded hover:text-white hover:shadow-lg" href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
      <a class="border-b border-green-100 hover:border-green-400 p-2 pl-5 hover:bg-green-400 rounded hover:text-white hover:shadow-lg" href="https://www.cbr-xml-daily.ru/">Виджет курсов валют</a>
      <a class="border-b border-green-100 hover:border-green-400 p-2 pl-5 hover:bg-green-400 rounded hover:text-white hover:shadow-lg" href="https://www.cbr-xml-daily.ru/">Курсы ЦБ РФ в XML и JSON, API</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      valuteHave: "RUR",
      valuteWant: "USD"
    };
  },
  computed: {
    selectedValutesHave() {
      return this.$store.getters.selectedValutesHave;
    },
    selectedValutesWant() {
      return this.$store.getters.selectedValutesWant;
    },
    valutesFull() {
      return this.$store.getters.valutesFull;
    },
    activeHave() {
      return this.$store.getters.activeHave;
    },
    activeWant() {
      return this.$store.getters.activeWant;
    }
  },
  async mounted() {
    this.$store.dispatch("SET_DATE");
    this.$store.dispatch("SET_RATES");
  },
  methods: {
    SetActiveHave(CharCode) {
      this.$store.dispatch("SET_ACTIVE_HAVE", CharCode);
    },
    SetActiveWant(CharCode) {
      this.$store.dispatch("SET_ACTIVE_WANT", CharCode);
    }
  }
};
</script>

<style lang="scss">
.active {
  background-color: aqua;
}
</style>
