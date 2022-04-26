<template>
  <div class="shopping">
    <div class="top-btns">
      <div class="cart">
        <a class="point" @click="goToCart">
          <i class="fas fa-shopping-cart"></i>
          <span>CART</span>
          <span class="cart-num-span"> {{ cartNum }}</span>
        </a>
      </div>
<!--      <div class="github">-->
<!--        <button>-->
<!--          <a href="https://github.com/Dayoung3460/shopping-website.git" target="_blank">-->
<!--            <i class="fab fa-github-square"></i>-->
<!--          </a>-->
<!--        </button>-->
<!--      </div>-->
    </div>

    <div class="logo-con" @click="initItems">
      <img src="./img/logo.jpg" class="img-logo" alt="">
    </div>

    <div class="btn-con">
      <div class="clothes-btn">
        <img v-for="type in types" :key="type" :src="require(`./img/${type}.png`)" :alt="`${type}.png`" @click="filterItem('type', type)" />
      </div>

      <div class="color-btn">
        <button v-for="color in colors" :key="color" :class="`${color}-btn`" @click="filterItem('color', color)">
          {{ color.charAt(0).toUpperCase() + color.slice(1) }}
        </button>
      </div>
    </div>
    <div class="view-con">
      <div v-for="item in data" :key="item.id">
        <img :src="require(`${item.image}`)" :alt="item.type" />
        <span>{{ item.gender }}, {{ item.size }}</span>
        <button class="add-cart-btn" @click="addCart(item)">ADD CART</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/components/project/mini/shopping/data/data.json'

export default {
  name: "ShoppingMain",

  data() {
    return {
      data: [],
      types: data.types,
      colors: data.colors,
      cartNum: 0,
    }
  },

  async created() {
    await this.initItems()
    await this.getCartNumbers()
  },

  mounted() {
    this.$parent.showHeaderFooter(false)
  },

  beforeDestroy() {
    this.$parent.showHeaderFooter(true)
  },

  methods: {
    goToCart() {
      if(!this.cartNum) {
        this.notify('error', '장바구니가 비었습니다.')
        return
      }
      this.$router.push({ name: 'ProjectMiniShoppingCart' })
    },

    getCartNumbers() {
      let itemNumbers = localStorage.getItem('cartNumbers')
      if(itemNumbers){
        this.cartNum = itemNumbers
      }
    },

    filterItem(filterKey, filterValue) {
      this.initItems()

      let filterValueWithCap = filterValue.charAt(0).toUpperCase() + filterValue.slice(1)
      const filteredItems = this.data.filter((item) => {
        console.log(item[filterKey], filterValueWithCap)
        return item[filterKey] === filterValueWithCap
      })
      this.data = filteredItems
    },

    initItems() {
      this.data = data.items
    },

    addCart(item) {
      let itemNumbers = localStorage.getItem('cartNumbers')
      if(itemNumbers){
        itemNumbers = parseInt(itemNumbers)
        localStorage.setItem('cartNumbers', itemNumbers + 1)
        this.cartNum = itemNumbers + 1
      } else {
        localStorage.setItem('cartNumbers', 1)
        this.cartNum = 1
      }

      this.notify('success', '장바구니에 추가 되었습니다.')

      this.setItems(item)
    },

    setItems(item) {
      let cartItems = localStorage.getItem('itemsInCart')
      cartItems = JSON.parse(cartItems)

      if(cartItems !== null){
        // if clicked another item,
        if(cartItems[item.id] === undefined){
          cartItems = {...cartItems, [item.id]: item}
        }
        cartItems[item.id].inCart += 1
      } else{
        //if nothing in cartItems,
        item.inCart = 1
        cartItems = { [item.id]: item }
      }

      localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
    },
  }


}
</script>

<style scoped>

</style>