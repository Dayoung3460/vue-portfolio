<template>
  <div>
    <div class="top-btns">
      <div class="cart">
        <a href="#">
          <i class="fas fa-shopping-cart"></i>
          <span>CART</span>
          <span class="cart-num-span"> {{ cartNum ? cartNum : 0 }}</span>
        </a>
      </div>
      <div class="home">
        <button>
          <router-link :to="{ name: 'Main' }">
            <i class="fas fa-home"></i>
          </router-link>
        </button>
      </div>
    </div>

    <div class="logo-con">
      <router-link :to="{ name: 'ProjectMiniShoppingMain' }">
        <img src="./img/logo.jpg" class="img-logo" alt="">
      </router-link>
    </div>

    <div class="cart-container">
      <div class="remove-all-btn" @click="removeAll">
        <button>Delete All</button>
      </div>
      <div class="header">
        <h2 class="h-product">Product</h2>
        <h2 class="h-price">Price</h2>
        <h2 class="h-quantity">Quantity</h2>
        <h2 class="h-total">Total</h2>
      </div>
      <div class="items">
        <div class="products" v-for="item in cartItems" :key="item.id">
          <div class="product">
            <i class="fas fa-window-close" @click="remove(item.id, item.price, item.inCart)"></i>
            <img :src="require(`${item.image}`)">
            <span>{{ item.color }} {{ item.type }}</span>
          </div>
          <div class="price">${{ item.price }}</div>
          <div class="quantity">
            <span class="up"><i class="fas fa-sort-up" @click="countUp(item)"></i></span>
            <span class="value">{{ item.inCart }}</span>
            <span class="down"><i class="fas fa-sort-down" @click="countDown(item)"></i></span>
          </div>
          <div class="total">$ {{ item.price * item.inCart }}</div>
        </div>
        <div class="basket-con">
          <h4 class="basket-title">Basket Total</h4>
          <h4 class="basket-total">${{ cartCost }}</h4>
        </div>
      </div>
    </div>
    <div class="next-btn">
    <button @click="notify('error', '준비중입니다.')">
      <a>NEXT</a>
    </button>
  </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",

  data() {
    return {
      cartNum: parseInt(localStorage.getItem('cartNumbers')),
      cartItems: null,
      cartCost: 0,
    }
  },

  created() {
    if(!this.cartNum) {
      this.$router.push({ name: 'ProjectMiniShoppingMain' })
    }
    this.getCartItems()
    this.getTotalCartCost()
  },

  mounted() {
    this.$parent.showHeaderFooter(false)
  },

  beforeDestroy() {
    this.$parent.showHeaderFooter(true)
  },

  methods: {
    getTotalCartCost() {
      this.cartItems.forEach((cartItem) => {
        this.cartCost += cartItem.price * cartItem.inCart
      })
    },

    countUp(item) {
      this.cartItems.forEach((cartItem) => {
        if(cartItem.id === item.id) {
          cartItem.inCart = cartItem.inCart + 1
          this.cartNum += 1
          this.cartCost += item.price

          const increasedCart = {
            itemInCart: this.cartItems,
            cartNumbers: this.cartNum
          }
          this.modifyLocalStorage(increasedCart)
        }
      })
    },

    countDown(item) {
      this.cartItems.forEach((cartItem) => {
        if(cartItem.id === item.id) {
          if(cartItem.inCart > 0 ) {
            cartItem.inCart = cartItem.inCart - 1
            this.cartNum -= 1
            this.cartCost -= item.price

            const decreasedCart = {
              itemInCart: this.cartItems,
              cartNumbers: this.cartNum
            }
            this.modifyLocalStorage(decreasedCart)
          }
        }
      })
    },

    removeAll() {
      localStorage.clear()
      this.cartItems = null
    },

    getCartItems() {
      if(localStorage.getItem('itemsInCart')) {
        this.cartItems = localStorage.getItem('itemsInCart')
        this.cartItems = JSON.parse(this.cartItems)
        this.cartItems = Object.values(this.cartItems)
      }
    },

    remove(id, price, inCart) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
      this.cartCost -= price * inCart
      this.cartNum -= inCart

      const removedCart = {
        itemInCart: this.cartItems,
        cartNumbers: this.cartNum
      }
      this.modifyLocalStorage(removedCart)
    },

    modifyLocalStorage(modifiedCart) {
      let cartItems = localStorage.getItem('itemsInCart')

      cartItems = JSON.stringify(modifiedCart.itemInCart)
      localStorage.setItem('itemsInCart', cartItems)
      localStorage.setItem('cartNumbers', modifiedCart.cartNumbers)
    },
  }
}
</script>

<style scoped>

</style>