
import * as types from './types'

export default {

  [types.ALTA_DE_JUGADOR]: function (state, payload) {
    state.jugadores.push(payload)
    console.log(state)
  },
 





}