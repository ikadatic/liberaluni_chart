import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    state: {
      power_store: 0,
      power_protect: 0,
      power_earn: 0,
      power_use: 0,
      power_increase: 0,
    },
    getters: {
      power(state) {
        return [
          state.power_store,
          state.power_protect,
          state.power_earn,
          state.power_use,
          state.power_increase,
        ]
      }
    },
    mutations: {
      up(state, value) {
        if (value === 'power-store') {
          this.state.power_store++
          return
        }
        if (value == 'power-protect') {
          this.state.power_protect++
          return
        }
        if (value === 'power-earn') {
          this.state.power_earn++
          return
        }
        if (value === 'power-use') {
          this.state.power_use++
          return
        }
        if (value === 'power-increase') {
          this.state.power_increase++
          return
        }
      },
      down(state, value) {
        if (value === 'power-store') {
          this.state.power_store--
          return
        }
        if (value === 'power-protect') {
          this.state.power_protect--
          return
        }
        if (value === 'power-earn') {
          this.state.power_earn--
          return
        }
        if (value === 'power-use') {
          this.state.power_use--
          return
        }
        if (value === 'power-increase') {
          this.state.power_increase--
          return
        }
      }
    }
  })
}

export default appStore
