<template>
  <div>
    <div class="top-btns">
      <div class="cart">
        <a href="#">
          <i class="fas fa-shopping-cart"></i>
          <span>CART</span>
          <span class="cart-num-span">0</span>
        </a>
      </div>
      <div class="home">
        <button>
          <a href="index(shopping).html">
            <i class="fas fa-home"></i>
          </a>
        </button>
      </div>
    </div>

    <div class="logo-con">
      <router-link :to="{ name: 'ProjectMiniShoppingMain' }">
        <img src="./img/logo.jpg" class="img-logo" alt="">
      </router-link>
    </div>

    <div class="cart-container">
      <div class="remove-all-btn" onclick="clearAllCart()">
        <button>Delete All</button>
      </div>
      <div class="header">
        <h2 class="h-product">Product</h2>
        <h2 class="h-price">Price</h2>
        <h2 class="h-quantity">Quantity</h2>
        <h2 class="h-total">Total</h2>
      </div>
      <div class="items"></div>
    </div>
    <div class="next-btn">
    <button>
      <a href="">NEXT</a>
    </button>
  </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart"
}
</script>

<style scoped>

</style>