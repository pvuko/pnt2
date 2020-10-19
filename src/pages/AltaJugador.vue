<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <h2>Ingrese los datos del jugador</h2>

      <div class="q-gutter-y-md column q-mx-auto" style="max-width: 300px">
        <q-input
          filled
          v-model="nombre"
          label="Nombre"
          placeholder="Ingresá el nombre del jugador"
          hint="Nombre completo del jugador"
          :dense="dense"
        />

        <q-input
          filled
          v-model="apellido"
          label="Apellido"
          placeholder="Ingresá el apellido del jugador"
          hint="Apellido completo del jugador"
          :dense="dense"
        />

        <q-input
          filled
          v-model="camiseta"
          label="Numero"
          placeholder="Ingresá el numero del jugador"
          hint="Camiseta del jugador"
          :dense="dense"
        />

        <q-input
          filled
          v-model="fecha"
          label="Fecha de Nacimiento"
          :dense="dense"
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>

        <q-input filled v-model="text" :dense="dense">
          <template v-slot:append>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
            </q-avatar>
          </template>
        </q-input>

        <q-btn
          color="secondary"
          label="Alta de Jugador"
          @click="this.altaDeJugador"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
methods: {
  altaDeJugador:function()  {
           const jugador = {nombre: this.nombre, apellido: this.apellido, camiseta: this.camiseta, fecha: this.fecha}
       console.log('somee', jugador)
        this.$store.dispatch('plantel/altaDeJugador', jugador)
       } 

},

  data() {
    return {
        text: 'some',
        dense:true,
      nombre : '',
      apellido : '',
      camiseta : '',
      fecha : '',
    };
  },
   
};
</script>
