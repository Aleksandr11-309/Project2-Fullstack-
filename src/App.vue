<template>
  <Navbar/>
  <div class="margin-navbar">navbar</div>
  <div v-show="$route.path === '/'">
    <h2 v-if="$store.getters.getLength !== 0">Каталог товаров</h2>
    <div class="content">
      <Product/>
    </div>
    <div>
      <CreateProduct/>
    </div>
  </div>
  
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import CreateProduct from './components/CreateProduct.vue';

export default {
  components: { Navbar, Product, CreateProduct },
  data() {
    return {
      isFirst: true,
      defaultProducts: [
        {
          id: 1,
          name: 'Ботинки',
          price: 3500,
          inLike: false,
          inCart: false,
          countInCart: 0
        },
        {
          id: 2,
          name: 'Ice-Foot',
          price: 5600,
          inLike: false,
          inCart: false,
          countInCart: 0
        },
        {
          id: 3,
          name: 'Ледоходы',
          price: 1500,
          inLike: false,
          inCart: false,
          countInCart: 0
        },
        {
          id: 4,
          name: 'Ice-Boots',
          price: 10000,
          inLike: false,
          inCart: false,
          countInCart: 0
        },
        {
          id: 5,
          name: 'Ледоступы',
          price: 2000,
          inLike: false,
          inCart: false,
          countInCart: 0
        }
      ]
    }
  },
  methods: {
    setDefaultProducts() {
      if (this.isFirst) {
        this.defaultProducts.filter(product => this.$store.state.products.push(product));
        this.isFirst = false;
      }
    }
  },
  mounted() {
    this.setDefaultProducts();
  }
}
</script>

<style scoped>
.margin-navbar {
  padding-top: 70px;
}

h2 {
  margin-top: 30px;
  text-align: center;
  font-size: 40px;
  letter-spacing: 5px;
}

.content {
  margin-block: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
}
</style>