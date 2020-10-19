<template>
  <q-page class="flex flex-center">
   <h1>Plantel</h1>
  {{getJugadoresComputed}}
 
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      
    
      
      <q-item clickable v-ripple v-for="(jugador, index) in getJugadoresComputed" :key='index'>
        <q-item-section>
          <q-item-label>{{jugador.nombre}}</q-item-label>
           <q-item-label>{{jugador.apellido}}</q-item-label>
          <q-item-label caption>{{jugador.camiseta}}</q-item-label>
        </q-item-section>
      </q-item>

      
    </q-list>
  </div>

  
  <AltaJugador>
  </AltaJugador>
    
  </q-page>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'Plantel',
  components:{
    AltaJugador: () => import('./AltaJugador.vue')
  },
  computed:{
    ...mapGetters('plantel', ['getJugadores']),
    
    getJugadoresComputed(){
    console.log(this.getJugadores) 
    return this.getJugadores}
  }
}



</script>