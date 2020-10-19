import * as types from './types.js'

export default {

    [types.ALTA_DE_JUGADOR]: function ({ state, commit }, payload) {
      console.log('en actions',payload)
          const jugador = payload
     commit(  types.ALTA_DE_JUGADOR , jugador )
    }, 
  
  
  
  
  }
  