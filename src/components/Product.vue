<template>
  <div v-for="el in items" class="product">
    <img src="../assets/images/ice-boots.png">
    <div class="product-description">
      <div>
        <p class="overflow">{{ el.name }}</p>
        <p class="overflow">{{ `${el.price}руб` }}</p>
      </div>
      <svg v-if="!el.inLike" @click="$store.dispatch('setFavourite', el.id)" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="35px" fill="#000"><path d="m480-128-44-39.83q-102.78-93.99-170.25-162.28-67.46-68.3-107.39-122-39.93-53.69-55.81-97.77-15.88-44.07-15.88-89.45 0-89.45 59.99-149.39 60-59.95 148.67-59.95 54.62 0 102.31 25.34Q445.33-798 480-750q39.5-49.67 85.46-74.17 45.95-24.5 99.29-24.5 88.59 0 148.59 59.91 59.99 59.91 59.99 149.3 0 45.5-15.88 89.58t-55.81 97.77q-39.93 53.7-107.39 122Q626.78-261.82 524-167.83L480-128Zm0-84q98.22-90.07 161.94-154.2Q705.67-430.33 743-478.5q37.33-48.17 52.17-85.88Q810-602.1 810-639.28q0-63.55-41.02-104.8-41.03-41.25-103.92-41.25-49.93 0-92.08 29.83t-66.31 82.33h-54q-23.5-51.83-65.89-82-42.39-30.16-91.74-30.16-62.99 0-104.02 41.14Q150-703.04 150-639.03q0 37.34 15 75.18 15 37.85 52.29 86.4 37.29 48.54 101.17 112.33Q382.33-301.33 480-212Zm0-286.83Z"/></svg>
      <svg v-else-if="el.inLike" @click="$store.dispatch('setFavourite', el.id)" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="35px" fill="#000"><path d="m480-128-44-39.83q-102.93-93.91-170.32-162.24-67.39-68.34-107.32-122.04-39.93-53.69-55.81-97.77-15.88-44.07-15.88-89.45 0-89.34 59.99-149.34 60-60 148.67-60 54.62 0 102.31 25.34Q445.33-798 480-750q39.5-49.67 85.46-74.17 45.95-24.5 99.29-24.5 88.59 0 148.59 59.96 59.99 59.96 59.99 149.25 0 45.5-15.88 89.58t-55.81 97.77q-39.93 53.7-107.32 122.04Q626.93-261.74 524-167.83L480-128Z"/></svg>
    </div>
    <button class="product-button" v-if="!el.inCart" @click="$store.dispatch('addInCart', el.id)">Добавить в корзину</button>
    <button disabled class="product-button btn-disabled" v-else-if="el.inCart">Товар в корзине!</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: this.$store.state.products
        }
    }
}
</script>

<style scoped>
.product {
  border-radius: 5px;
  padding: 7px;
  background: rgb(37,175,186);
  background: linear-gradient(0deg, rgba(37,175,186,1) 14%, rgba(37,186,48,1) 37%);
}

.product img {
  height: 350px;
  width: 250px;
  border-radius: 5px;
  transition: transform 500ms ease;
}

.product img:hover {
  height: 350px;
  width: 250px;
  border-radius: 5px;
  transform: scale(1.1);
}

.product-description {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.product-description svg:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.product-button {
  margin-top: 5px;
  width: 100%;
  background-color: #25BA7B;
  border: 0;
  border-radius: 5px;
  padding: 7px;
  font-family: "Pangolin", serif;
  font-size: 15px;
  font-weight: 600;
  transition: transform 500ms ease;
}

.product-button:hover:not(.btn-disabled) {
  cursor: pointer;
  background-color: #197c53;
  transform: scale(1.1) translateY(-5px);
}

.btn-disabled {
    background-color: #197c53;
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>