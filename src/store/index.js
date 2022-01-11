import { createStore } from "vuex";
// import axios from 'axios'

export default createStore({
  state: {
    actualDate: null,
    valute: null,
    selectedValutesHave: {
      RUR: {
        CharCode: "RUR",
        active: true,
      },
      USD: {
        CharCode: "USD",
        active: false,
      },
      EUR: {
        CharCode: "EUR",
        active: false,
      },
      GBP: {
        CharCode: "GBP",
        active: false,
      },
    },
    selectedValutesWant: {
      RUR: {
        CharCode: "RUR",
        active: false,
      },
      USD: {
        CharCode: "USD",
        active: true,
      },
      EUR: {
        CharCode: "EUR",
        active: false,
      },
      GBP: {
        CharCode: "GBP",
        active: false,
      },
    },
  },
  getters: {
    selectedValutesHave: (state) => {
      return state.selectedValutesHave;
    },
    selectedValutesWant: (state) => {
      return state.selectedValutesWant;
    },
    activeHave: (state) => {
      // let activeHave;
      for (const key in state.selectedValutesHave) {
        if (Object.hasOwnProperty.call(state.selectedValutesHave, key)) {
          const element = state.selectedValutesHave[key];
          if (element.active) {
            return element;
          }
        }
      }
      // state.selectedValutesHave.filter((item) => {
      //   if (item.active) {
      //     activeHave = item;
      //   }
      // });

      // return activeHave;
    },
    activeWant: (state) => {
      // let activeWant;
      for (const key in state.selectedValutesWant) {
        if (Object.hasOwnProperty.call(state.selectedValutesWant, key)) {
          const element = state.selectedValutesWant[key];
          if (element.active) {
            return element;
          }
        }
      }
      // state.selectedValutesWant.filter((item) => {
      //   if (item.active) {
      //     activeWant = item;
      //   }
      // });

      // return activeWant;
    },
    valutesFull: (state) => {
      return state.valute;
    },
  },
  mutations: {
    SET_DATE: (state, payload) => {
      console.log("mutation", payload);
      state.actualDate = payload;
    },
    SET_RATES: (state, data) => {
      console.log("mutation", data);
      state.valute = data.Valute;
      state.actualDate = data.Date;
    },
    SET_ACTIVE_HAVE: (state, CharCode) => {
      for (const key in state.selectedValutesHave) {
        if (Object.hasOwnProperty.call(state.selectedValutesHave, key)) {
          state.selectedValutesHave[key].active = false;
          // if (element.active) {
          //   return element
          // }
        }
      }
      state.selectedValutesHave[CharCode].active = true;
      // state.selectedValutesHave = state.selectedValutesHave.filter((item) => {
      //   item.active = false;
      //   if (item.CharCode == CharCode) {
      //     item.active = true;
      //   }

      //   return item;
      // });
    },
    SET_ACTIVE_HAVE_NEW: (state, CharCode) => {
      for (const key in state.selectedValutesHave) {
        if (Object.hasOwnProperty.call(state.selectedValutesHave, key)) {
          state.selectedValutesHave[key].active = false;
          // if (element.active) {
          //   return element
          // }
        }
      }
      if (!(CharCode in state.selectedValutesHave)) {
        delete state.selectedValutesHave[
          Object.keys(state.selectedValutesHave)[
            Object.keys(state.selectedValutesHave).length - 1
          ]
        ];
        state.selectedValutesHave[CharCode] = {
          CharCode,
          active: true,
        };
      } else {
        state.selectedValutesHave[CharCode].active = true;
      }
      // state.selectedValutesHave[Object.keys(state.selectedValutesHave)[Object.keys(state.selectedValutesHave).length - 1]] = new Object(`${CharCode}`: {
      //   CharCode,
      //   active: true
      // })
      console.log(
        state.selectedValutesHave[
          Object.keys(state.selectedValutesHave)[
            Object.keys(state.selectedValutesHave).length - 1
          ]
        ]
      );
      console.log(state.selectedValutesHave);
      console.log(CharCode);
      // Object.entries(state.valute).filter((item) => {
      //   // console.log(item);
      //   // item.active = false
      //   if (item[1].CharCode == CharCode) {
      //     // item.active = true
      //     state.selectedValutesHave.pop();
      //     state.selectedValutesHave.push({ CharCode, active: false });

      //     console.log(item[1]);
      //   }

      //   // return item
      // });
    },
    SET_ACTIVE_WANT: (state, CharCode) => {
      for (const key in state.selectedValutesWant) {
        if (Object.hasOwnProperty.call(state.selectedValutesWant, key)) {
          state.selectedValutesWant[key].active = false;
          // if (element.active) {
          //   return element
          // }
        }
      }
      state.selectedValutesWant[CharCode].active = true;
    },
    SET_ACTIVE_WANT_NEW: (state, CharCode) => {
      for (const key in state.selectedValutesWant) {
        if (Object.hasOwnProperty.call(state.selectedValutesWant, key)) {
          state.selectedValutesWant[key].active = false;
          // if (element.active) {
          //   return element
          // }
        }
      }
      if (!(CharCode in state.selectedValutesWant)) {
        delete state.selectedValutesWant[
          Object.keys(state.selectedValutesWant)[
            Object.keys(state.selectedValutesWant).length - 1
          ]
        ];
        state.selectedValutesWant[CharCode] = {
          CharCode,
          active: true,
        };
      } else {
        state.selectedValutesWant[CharCode].active = true;
      }
      // state.selectedValutesHave[Object.keys(state.selectedValutesHave)[Object.keys(state.selectedValutesHave).length - 1]] = new Object(`${CharCode}`: {
      //   CharCode,
      //   active: true
      // })
      // console.log(
      //   state.selectedValutesHave[
      //     Object.keys(state.selectedValutesHave)[
      //       Object.keys(state.selectedValutesHave).length - 1
      //     ]
      //   ]
      // );
      // console.log(state.selectedValutesHave);
      // console.log(CharCode);
      // Object.entries(state.valute).filter((item) => {
      //   // console.log(item);
      //   // item.active = false
      //   if (item[1].CharCode == CharCode) {
      //     // item.active = true
      //     state.selectedValutesHave.pop();
      //     state.selectedValutesHave.push({ CharCode, active: false });

      //     console.log(item[1]);
      //   }

      //   // return item
      // });
    },
  },
  actions: {
    SET_DATE: (context, payload) => {
      console.log("action", payload);
      context.commit("SET_DATE", payload);
    },
    SET_ACTIVE_HAVE: (context, CharCode) => {
      context.commit("SET_ACTIVE_HAVE", CharCode);
    },
    SET_ACTIVE_HAVE_NEW: (context, CharCode) => {
      context.commit("SET_ACTIVE_HAVE_NEW", CharCode);
    },
    SET_ACTIVE_WANT: (context, CharCode) => {
      context.commit("SET_ACTIVE_WANT", CharCode);
    },
    SET_ACTIVE_WANT_NEW: (context, CharCode) => {
      context.commit("SET_ACTIVE_WANT_NEW", CharCode);
    },
    SET_RATES: async(context) => {
      // const data = await axios
      // .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      // .then(result => {
      //   if (result.status == 200) {
      //     return result.data
      //   }
      // })
      // .catch(error => {
      //   if (error.response) {
      //     console.log("err");
      //     console.log(error.response.status);

      //     if (error.response.status === 404) {
      //       console.log(`cannot be found.`);
      //     }
      //   }
      // });
      // console.log("action");
      const data = {
        Date: "2022-01-11T11:30:00+03:00",
        PreviousDate: "2021-12-31T11:30:00+03:00",
        PreviousURL: "//www.cbr-xml-daily.ru/archive/2021/12/31/daily_json.js",
        Timestamp: "2022-01-10T21:00:00+03:00",
        Valute: {
          AUD: {
            ID: "R01010",
            NumCode: "036",
            CharCode: "AUD",
            Nominal: 1,
            Name: "Австралийский доллар",
            Value: 53.982,
            Previous: 53.9141,
          },
          AZN: {
            ID: "R01020A",
            NumCode: "944",
            CharCode: "AZN",
            Nominal: 1,
            Name: "Азербайджанский манат",
            Value: 44.221,
            Previous: 43.7273,
          },
          GBP: {
            ID: "R01035",
            NumCode: "826",
            CharCode: "GBP",
            Nominal: 1,
            Name: "Фунт стерлингов Соединенного королевства",
            Value: 102.0436,
            Previous: 100.0573,
          },
          AMD: {
            ID: "R01060",
            NumCode: "051",
            CharCode: "AMD",
            Nominal: 100,
            Name: "Армянских драмов",
            Value: 15.5311,
            Previous: 15.5164,
          },
          BYN: {
            ID: "R01090B",
            NumCode: "933",
            CharCode: "BYN",
            Nominal: 1,
            Name: "Белорусский рубль",
            Value: 29.1038,
            Previous: 29.1458,
          },
          BGN: {
            ID: "R01100",
            NumCode: "975",
            CharCode: "BGN",
            Nominal: 1,
            Name: "Болгарский лев",
            Value: 43.5066,
            Previous: 42.9487,
          },
          BRL: {
            ID: "R01115",
            NumCode: "986",
            CharCode: "BRL",
            Nominal: 1,
            Name: "Бразильский реал",
            Value: 13.3354,
            Previous: 13.0253,
          },
          HUF: {
            ID: "R01135",
            NumCode: "348",
            CharCode: "HUF",
            Nominal: 100,
            Name: "Венгерских форинтов",
            Value: 23.7608,
            Previous: 22.7476,
          },
          HKD: {
            ID: "R01200",
            NumCode: "344",
            CharCode: "HKD",
            Nominal: 10,
            Name: "Гонконгских долларов",
            Value: 96.3595,
            Previous: 95.264,
          },
          DKK: {
            ID: "R01215",
            NumCode: "208",
            CharCode: "DKK",
            Nominal: 1,
            Name: "Датская крона",
            Value: 11.4399,
            Previous: 11.2956,
          },
          USD: {
            ID: "R01235",
            NumCode: "840",
            CharCode: "USD",
            Nominal: 1,
            Name: "Доллар США",
            Value: 75.1315,
            Previous: 74.2926,
          },
          EUR: {
            ID: "R01239",
            NumCode: "978",
            CharCode: "EUR",
            Nominal: 1,
            Name: "Евро",
            Value: 85.1315,
            Previous: 84.0695,
          },
          INR: {
            ID: "R01270",
            NumCode: "356",
            CharCode: "INR",
            Nominal: 10,
            Name: "Индийских рупий",
            Value: 10.131,
            Previous: 99.8422,
          },
          KZT: {
            ID: "R01335",
            NumCode: "398",
            CharCode: "KZT",
            Nominal: 100,
            Name: "Казахстанских тенге",
            Value: 17.2328,
            Previous: 16.9,
          },
          CAD: {
            ID: "R01350",
            NumCode: "124",
            CharCode: "CAD",
            Nominal: 1,
            Name: "Канадский доллар",
            Value: 59.4536,
            Previous: 58.023,
          },
          KGS: {
            ID: "R01370",
            NumCode: "417",
            CharCode: "KGS",
            Nominal: 100,
            Name: "Киргизских сомов",
            Value: 88.5701,
            Previous: 87.5906,
          },
          CNY: {
            ID: "R01375",
            NumCode: "156",
            CharCode: "CNY",
            Nominal: 1,
            Name: "Китайский юань",
            Value: 11.7907,
            Previous: 11.6503,
          },
          MDL: {
            ID: "R01500",
            NumCode: "498",
            CharCode: "MDL",
            Nominal: 10,
            Name: "Молдавских леев",
            Value: 41.9378,
            Previous: 41.855,
          },
          NOK: {
            ID: "R01535",
            NumCode: "578",
            CharCode: "NOK",
            Nominal: 10,
            Name: "Норвежских крон",
            Value: 84.95,
            Previous: 84.2568,
          },
          PLN: {
            ID: "R01565",
            NumCode: "985",
            CharCode: "PLN",
            Nominal: 1,
            Name: "Польский злотый",
            Value: 18.7276,
            Previous: 18.296,
          },
          RON: {
            ID: "R01585F",
            NumCode: "946",
            CharCode: "RON",
            Nominal: 1,
            Name: "Румынский лей",
            Value: 17.2099,
            Previous: 16.9719,
          },
          XDR: {
            ID: "R01589",
            NumCode: "960",
            CharCode: "XDR",
            Nominal: 1,
            Name: "СДР (специальные права заимствования)",
            Value: 105.0474,
            Previous: 103.9792,
          },
          SGD: {
            ID: "R01625",
            NumCode: "702",
            CharCode: "SGD",
            Nominal: 1,
            Name: "Сингапурский доллар",
            Value: 55.4231,
            Previous: 54.8852,
          },
          TJS: {
            ID: "R01670",
            NumCode: "972",
            CharCode: "TJS",
            Nominal: 10,
            Name: "Таджикских сомони",
            Value: 66.5175,
            Previous: 65.8039,
          },
          TRY: {
            ID: "R01700J",
            NumCode: "949",
            CharCode: "TRY",
            Nominal: 10,
            Name: "Турецких лир",
            Value: 54.3317,
            Previous: 57.8432,
          },
          TMT: {
            ID: "R01710A",
            NumCode: "934",
            CharCode: "TMT",
            Nominal: 1,
            Name: "Новый туркменский манат",
            Value: 21.4969,
            Previous: 21.2568,
          },
          UZS: {
            ID: "R01717",
            NumCode: "860",
            CharCode: "UZS",
            Nominal: 10000,
            Name: "Узбекских сумов",
            Value: 69.4501,
            Previous: 68.5504,
          },
          UAH: {
            ID: "R01720",
            NumCode: "980",
            CharCode: "UAH",
            Nominal: 10,
            Name: "Украинских гривен",
            Value: 27.3005,
            Previous: 27.2584,
          },
          CZK: {
            ID: "R01760",
            NumCode: "203",
            CharCode: "CZK",
            Nominal: 10,
            Name: "Чешских крон",
            Value: 34.8784,
            Previous: 33.7234,
          },
          SEK: {
            ID: "R01770",
            NumCode: "752",
            CharCode: "SEK",
            Nominal: 10,
            Name: "Шведских крон",
            Value: 82.6338,
            Previous: 82.1512,
          },
          CHF: {
            ID: "R01775",
            NumCode: "756",
            CharCode: "CHF",
            Nominal: 1,
            Name: "Швейцарский франк",
            Value: 81.5583,
            Previous: 80.9376,
          },
          ZAR: {
            ID: "R01810",
            NumCode: "710",
            CharCode: "ZAR",
            Nominal: 10,
            Name: "Южноафриканских рэндов",
            Value: 47.9712,
            Previous: 46.4948,
          },
          KRW: {
            ID: "R01815",
            NumCode: "410",
            CharCode: "KRW",
            Nominal: 1000,
            Name: "Вон Республики Корея",
            Value: 62.7222,
            Previous: 62.4483,
          },
          JPY: {
            ID: "R01820",
            NumCode: "392",
            CharCode: "JPY",
            Nominal: 100,
            Name: "Японских иен",
            Value: 64.9168,
            Previous: 64.5097,
          },
        },
      };
      data.Valute["RUR"] = {
        ID: "RUR",
        NumCode: "000",
        CharCode: "RUR",
        Nominal: 1,
        Name: "Российский рубль",
        Value: 1,
        Previous: 1,
      };
      console.log(data);
      context.commit("SET_RATES", data);
    },
  },
  modules: {},
});