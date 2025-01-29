<template>
  <h2>Корзина</h2>
  <div class="content">
    <div class="content__container">
      <div class="content__container--left-block">
        <div v-for="product in viewInCart" class="overflow-scroll flex margin-block">
          <img alt="product" src="../assets/images/ice-boots.png">
          <div>
            <p class="overflow">{{ product.name }}</p>
            <p class="overflow">{{ `${product.price}руб` }}</p>
          </div>
          <div>
            <svg @click="$store.dispatch('addInCart', product.id)" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#8B1A10"><path d="M267.33-120q-27 0-46.83-19.83-19.83-19.84-19.83-46.84V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm97.34-150.67h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386Z"/></svg> -->
            <div><Counter @count-change="(count) => getCount(product.id, count)"/></div>
          </div>
        </div>
      </div>
      <div class="content__container--right-block">
        <div class="content__container--right-block--top">
          <select>
            <option value="">--Выберите город--</option>
            <option value="Kazan">Казань</option>
            <option value="Moscow">Москва</option>
            <option value="Saint-Petersburg">Санкт-Петербург</option>
            <option value="Oktyabrski">Октябрьский</option>
            <option value="Ufa">Уфа</option>
          </select>
          <div>
            <h3 class="font-size-40">В корзине:</h3>
            <p class="font-size-40">{{ countInCart }}</p>
          </div>
          <div>
            <h3 class="font-size-40">Итоговая сумма:</h3>
            <p class="font-size-40">{{ `${allPrice}руб` }}</p>
          </div>
        </div>
        <div class="content__container--right-block--bottom">
          <button>Перейти к оплате</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  components: { Counter },
  data() {
    return {
      newCount: 1,
      isActive: false
    }
  },
  computed: {
    viewInCart() {
      return this.$store.state.products.filter(item => item.inCart === true);
    },
    countInCart() {
      let count = 0;
      this.$store.state.products.filter(item => item.inCart === true && (count += item.countInCart));
      return count;
    },
    allPrice() {
      let price = 0;
      this.$store.state.products.filter(item => item.inCart === true && (price += item.price * item.countInCart));
      return price;
    }
  },
  methods: {
    getCount(productId, newCount) {
      const payload = {
        id: productId,
        count: newCount
      }

      this.$store.dispatch('changeCountInCart', payload);
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 30px;
  text-align: center;
  font-size: 40px;
  letter-spacing: 5px;
}

.content {
  display: flex;
  justify-content: center;
}

.content img {
  height: 150px;
  width: 120px;
}

.content svg {
  margin-left: 95px;
}

.content svg:hover {
  cursor: pointer;
  transform: scale(0.8);
}

.content__container {
  margin-block: 36px;
  display: flex;
  gap: 40px
}

.content__container--left-block {
  width: 550px;
  height: 290px;
  padding: 15px 24px 0;
  box-sizing: border-box;
  border-radius: 5px;
  overflow-x: auto;
  background-color: #f5f5f5;
  box-shadow: 5px 0 20px #00000052, 0 5px 20px #00000052, -5px 0 20px #00000052, 0 -5px 20px #00000052;
}

.content__container--left-block::-webkit-scrollbar {
  width: 0; /* Для вертикального scrollbar */
  background: transparent; /* Делаем фон прозрачным */
}

.content__container--left-block p {
  padding-left: 10px;
  font-size: larger;
 }

.content__container--right-block {
  width: 500px;
  height: 520px;
  padding: 24px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 5px 0 20px #00000052, 0 5px 20px #00000052, -5px 0 20px #00000052, 0 -5px 20px #00000052;
}

.content__container--right-block--top {
  display: flex;
  flex-direction: column;
  gap: 30px
}

select {
  border: 0;
  outline: none;
  padding: 7px 15px;
  background-color: #f5f5f5;
  border: 1px solid;
  border-radius: 5px;
}

.content__container--right-block--bottom {
  border-top: 2px solid #ddd;
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.content__container--right-block--bottom button {
  width: 400px;
  height: 55px;
  border: 0;
  border-radius: 10px;
  font-size: larger;
  color: #f5f5f5;
  background-color: #25ba30;
}

button:hover{
  cursor: pointer;
  background-color: #1b8822;
}

.flex {
  display: flex;
}

.margin-block {
  margin-block: 10px;
}

.overflow {
  overflow: hidden;
  word-wrap: break-word;
  width: 230px;
}

.font-size-40 {
  font-size: 40px;
}
</style>