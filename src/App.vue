<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/counter";
import { useUserStore } from "./stores/user";

const counterStore = useCounterStore();
const userStore = useUserStore();
counterStore.$subscribe((mutations, state) => {
  console.log(mutations);
  console.log(state);
});

const { name, age } = storeToRefs(userStore);
</script>
<template>
  <div>
    <h1>Counter : {{ counterStore.counter }}</h1>

    <h1>User : {{ userStore.name }}</h1>
    <h1>MyUser : {{ name }}</h1>
    <h1>MyAge : {{ age }}</h1>
    <button @click="age++">Age++</button>

    <button @click="counterStore.counter++">+</button>
    <button @click="counterStore.$reset">Reset</button>
    <button
      @click="
        counterStore.$patch({
          counter: counterStore.counter + 6,
        })
      "
    >
      patch
    </button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
