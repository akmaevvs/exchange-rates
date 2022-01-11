<template>
  <div class="container-app">
    <div class="calc" v-if="valutesFull">
      <div class="calc__block calc__block--have">
        <p class="calc__text">У меня есть</p>
        <div class="calc__valutes">
          <div
            class="calc__valute"
            :class="{ 'calc__valute--active': val.active }"
            v-for="(val, index) in selectedValutesHave"
            :key="index"
            @click="SetActiveHave(val.CharCode)"
          >
            {{ val.CharCode }}
          </div>
          <button
            class="calc__valute calc__valute--arrow"
            :class="{ 'calc__valute--active': showValutesHave }"
            @click="showValutesHave = !showValutesHave"
          >
            <img class="calc__arrow" :src="arrowDown" alt="" srcset="" />
          </button>
          <div class="absolute inset-0 w-full flex justify-center items-center"
              v-if="showValutesHave"
              @click.self="showValutesHave = false"
          >
            <div
              class="absolute mx-10 top-40 bg-white p-5 w-full flex flex-wrap gap-2 shadow-lg rounded w-full max-w-2xl"
            >
              <div
                class="bg-gray-100 px-2 cursor-pointer rounded shadow hover:bg-green-400 hover:text-white hover:shadow-md"
                v-for="valute in valutesFull"
                :key="valute"
              >
                <button
                  @click="
                    () => {
                      SetActiveHaveNew(valute.CharCode);
                      showValutesHave = false;
                    }
                  "
                >
                  {{ valute.Name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="calc__input-block">
          <input
            class="calc__sum"
            type="number"
            v-model="sum"
            placeholder="Input sum"
          />
          <span class="calc__rates">
            1 {{ activeHave.CharCode }} =
            {{
              parseInt(
                (valutesFull[activeHave.CharCode].Value /
                  valutesFull[activeWant.CharCode].Value) *
                  10000
              ) / 10000
            }}
            {{ activeWant.CharCode }}
          </span>
        </div>
      </div>
      <div class="calc__block calc__block--change">
        <button class="w-12 h-12 cursor-pointer" @click="Change">
          <img class="w-12 h-12" :class="{'animate': animateStyle}" :src="changeIcon" alt="" />
        </button>
      </div>
      <div class="calc__block calc__block--buy">
        <p class="calc__text">Хочу приобрести</p>
        <div class="calc__valutes">
          <div
            class="calc__valute"
            :class="{ 'calc__valute--active': val.active }"
            v-for="(val, index) in selectedValutesWant"
            :key="index"
            @click="SetActiveWant(val.CharCode)"
          >
            {{ val.CharCode }}
          </div>
          <button
            class="calc__valute calc__valute--arrow"
            :class="{ 'calc__valute--active': showValutesWant }"
            @click="showValutesWant = !showValutesWant"
          >
            <img class="calc__arrow" :src="arrowDown" alt="" srcset="" />
          </button>
          <div class="absolute inset-0 w-full flex justify-center items-center"
              v-if="showValutesWant"
              @click.self="showValutesWant = false"
          >
            <div
              class="absolute mx-10 top-40 bg-white p-5 w-full flex flex-wrap gap-2 shadow-lg rounded w-full max-w-2xl"
            >
              <div
                class="bg-gray-100 px-2 cursor-pointer rounded shadow hover:bg-green-400 hover:text-white hover:shadow-md"
                v-for="valute in valutesFull"
                :key="valute"
              >
                <button
                  @click="
                    () => {
                      SetActiveWantNew(valute.CharCode);
                      showValutesWant = false;
                    }
                  "
                >
                  {{ valute.Name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="calc__input-block">
          <!-- <input type="number" v-model="sum"> -->
          <p class="calc__sum">
            <span>
              {{
                (sum *
                  parseInt(
                    (valutesFull[activeHave.CharCode].Value /
                      valutesFull[activeWant.CharCode].Value) *
                      10000
                  )) /
                10000
              }}
            </span>
          </p>
          <span class="calc__rates">
            1 {{ activeWant.CharCode }} =
            {{
              parseInt(
                (valutesFull[activeWant.CharCode].Value /
                  valutesFull[activeHave.CharCode].Value) *
                  10000
              ) / 10000
            }}
            {{ activeHave.CharCode }}
          </span>
        </div>
      </div>
    </div>
    <div class="use-api">
      <a class="use-api__link" href="https://www.cbr-xml-daily.ru/"
        >Курсы валют, API</a
      >
      <a class="use-api__link" href="https://www.cbr-xml-daily.ru/"
        >API для курсов ЦБ РФ</a
      >
      <a class="use-api__link" href="https://www.cbr-xml-daily.ru/"
        >Виджет курсов валют</a
      >
      <a class="use-api__link" href="https://www.cbr-xml-daily.ru/"
        >Курсы ЦБ РФ в XML и JSON, API</a
      >
    </div>
  </div>
</template>

<script>
import changeIcon from "@/assets/img/change.png";
import arrowDown from "@/assets/img/arrow_down.png";

export default {
  name: "App",
  components: {},
  data() {
    return {
      valuteHave: "RUR",
      valuteWant: "USD",
      sum: 5000,
      changeIcon,
      arrowDown,
      showValutesHave: false,
      showValutesWant: false,
      animateStyle: false,
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
    },
  },
  async mounted() {
    this.$store.dispatch("SET_DATE");
    this.$store.dispatch("SET_RATES");
  },
  methods: {
    SetActiveHave(CharCode) {
      this.$store.dispatch("SET_ACTIVE_HAVE", CharCode);
    },
    SetActiveHaveNew(CharCode) {
      this.$store.dispatch("SET_ACTIVE_HAVE_NEW", CharCode);
    },
    SetActiveWant(CharCode) {
      this.$store.dispatch("SET_ACTIVE_WANT", CharCode);
    },
    SetActiveWantNew(CharCode) {
      this.$store.dispatch("SET_ACTIVE_WANT_NEW", CharCode);
    },
    Change() {
      let temp = this.activeWant;
      console.log(this.activeHave);
      console.log(this.activeWant);
      console.log(temp);
      // this.$store.dispatch("SET_ACTIVE_WANT", this.activeHave.CharCode);
      this.$store.dispatch("SET_ACTIVE_WANT_NEW", this.activeHave.CharCode);
      // this.$store.dispatch("SET_ACTIVE_HAVE", temp.CharCode);
      this.$store.dispatch("SET_ACTIVE_HAVE_NEW", temp.CharCode);
      this.Animate()
    },
    async Animate() {
      this.animateStyle = true
      setTimeout(() => {
        this.animateStyle = false
      }, 500)
    }
  },
};
</script>

<style lang="scss">
.animate {
  animation-duration: .5s;
  animation-name: spinner;
  animation-iteration-count: 1;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  // 50% {
  //   transform: rotate(180deg);
  // }
  100% {
    transform: rotate(-180deg);
  }
}
</style>
