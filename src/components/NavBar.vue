<script setup>
import { useRoute } from 'vue-router'
const location = useRoute();
</script>

<template>

  <div class="wrapper">
    <header>
      <div class="container">
        <div class="row align-items-center">
          <div class="mt-10 d-flex">

            <div class="col-2">
              <div class="p-10 text-center">
                <router-link to="/"> <img class="logo-img" :src="logo" alt="logo"></router-link>
              </div>
            </div>

            <div class="col-6">
              <div class="p-10 text-center">
                <form action="">
                  <div class="header-serch p-1">
                    <input type="search" autocomplete="off" placeholder="جستجو در محصولات ...">
                    <div>
                      <button class="search-btn">
                        <font-awesome-icon icon="magnifying-glass" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-1"></div>

            <div class="col-3">
              <div class="p-10 float-left" @click="modalBox = true">
                <router-link class="user-account">
                  <div class="d-flex flex-row align-items-center justify-content">
                    <div class="d-flex flex-column align-items-center">
                      <span class="title"> حساب کاربری </span>
                      <span class="subtitle"> لطفا وارد حساب خود شوید! </span>
                    </div>

                    <div class="user-icon">
                      <font-awesome-icon icon="user" />
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <transition name="fade">
              <div class="fixed_back" v-show="modalBox">
                <div class="modal-content">
                  <button class="close-btn" @click="modalBox = false">
                    <span>
                      <font-awesome-icon icon="xmark" />
                    </span>
                  </button>

                  <div class="p-10">
                    <div class="login-img">
                      <img class="logo-img" :src="login" alt="logo">
                    </div>

                    <h3 class="login-title"> ورود / عضویت </h3>

                    <div class="login-form mb-5">
                      <form action="#">
                        <label for="mobile">لطفا شماره موبایل یا ایمیل خود را وارد نمایید.</label>
                        <input type="text" id="ns-mobile" placeholder="09330000000" style="direction: ltr" required=""
                          autocomplete="off">
                      </form>
                    </div>

                    <div class="d-flex mb-5">
                      <span class="font-14">برای ورود و عضویت فقط شماره موبایل کافی است. </span>
                      <button type="submit" class="login-btn">
                        ادامه
                        <font-awesome-icon class="angle-down-icon color-white" icon="angle-left" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </transition>

          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-9">
            <div class="text-center">
              <nav class="menu-bar">
                <ul>
                  <li class="menu-has-childern">
                    <router-link :to='{ name: "digitalPageRoute" }'>
                      کالای دیجیتال
                      <span>
                        <font-awesome-icon class="angle-down-icon" icon="angle-down" />
                      </span>
                    </router-link>

                    <div class="dropdown-menu">
                      <ul>
                        <li v-for="DigitalGood in DigitalGoods">
                          <router-link class="active"
                            :to='{ name: "digitalPageRoute", params: { slug: DigitalGood.slug } }'>
                            {{ DigitalGood.title }}
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="menu-has-childern">
                    <router-link :to='{ name: "cosmeticsPageRoute" }'>
                      آرایشی و بهداشتی
                      <span>
                        <font-awesome-icon class="angle-down-icon" icon="angle-down" />
                      </span>
                    </router-link>

                    <div class="dropdown-menu">
                      <ul>
                        <li v-for="cosmetic in cosmetics">
                          <router-link class="active"
                            :to='{ name: "cosmeticsPageRoute", params: { slug: cosmetic.slug } }'>
                            {{ cosmetic.title }}
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="menu-has-childern">
                    <router-link :to='{ name: "toolsPageRoute" }'>
                      ابزارآلات
                      <span>
                        <font-awesome-icon class="angle-down-icon" icon="angle-down" />
                      </span>
                    </router-link>

                    <div class="dropdown-menu">
                      <ul>
                        <li v-for="tool in tools">
                          <router-link class="active" :to='{ name: "toolsPageRoute", params: { slug: tool.slug } }'>
                            {{ tool.title }}
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="menu-has-childern">

                    <router-link :to='{ name: "homeSuppliesPageRoute" }'>
                      خانه و آشپزخانه
                      <span>
                        <font-awesome-icon class="angle-down-icon" icon="angle-down" />
                      </span>
                    </router-link>

                    <div class="dropdown-menu">
                      <ul>
                        <li v-for="homeSupplie in homeSupplies">
                          <router-link class="active"
                            :to='{ name: "homeSuppliesPageRoute", params: { slug: homeSupplie.slug } }'>
                            {{ homeSupplie.title }}
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <router-link class="active" :to='{ name: "fashionPageRoute" }'> مد و پوشاک </router-link>
                  </li>

                  <li>
                    <router-link class="active" :to='{ name: "artPageRoute" }'> لوازم تحریر و هنر </router-link>
                  </li>

                  <li>
                    <router-link class="active" :to='{ name: "childPageRoute" }'> کودک و نوزاد </router-link>
                  </li>

                  

                </ul>
              </nav>
            </div>
          </div>

          <div class="col-3">
            <div class="p-10 text-center d-flex justify-content-end">
              <router-link class="active" :to='{ name: "favPageRoute" }'>
                <div class="fav-btn">
                  <span class="icon">
                    <font-awesome-icon icon="heart" />
                  </span>
                </div>
              </router-link>

              <div class="cart" @click="shoppingCartMenu = true">
                <span>
                  <font-awesome-icon icon="cart-shopping" />
                </span>
                <span class="icon pr-10"> سبد خرید </span>
                <span class="cart-count"> 1 </span>
              </div>
            </div>
          </div>

          <transition name="slide-shopping_cart">
            <div v-if="shoppingCartMenu" class="shopping_cart">
              <div class="fixed_back-cart" @click="shoppingCartMenu = false"></div>
              <div class="p-30 shopping_cart">
                <button class="close-btn" @click="shoppingCartMenu = false">
                  <span class="color-gray font-18">
                    <font-awesome-icon icon="xmark" />
                  </span>
                </button>
                <h6> سبد خرید </h6>
                <div class="cart_empty-message">
                  <img :src="shoppingCart" alt="shoppingCart">
                </div>
                <span>هیچ محصولی در سبد خرید نیست.</span>
              </div>
            </div>
          </transition>

        </div>
      </div>
    </header>
  </div>
</template>


<script>

import logo from '../assets/images/logo.png'
import login from '../assets/images/login.jpg'
import shoppingCart from '../assets/images/bc6a97c7.svg'

export default {
  name: 'navbar',

  data() {
    return {
      logo,
      modalBox: false,
      shoppingCartMenu: false,

      DigitalGoods: [
        {
          title: 'موبایل',
          slug: 'موبایل'
        }, {
          title: 'تبلت',
          slug: 'تبلت'
        }, {
          title: 'لپ تاپ',
          slug: 'لپتاپ'
        }, {
          title: 'مانیتور',
          slug: 'مانیتور'
        }, {
          title: 'تلوزیون',
          slug: 'تلوزیون'
        }, {
          title: 'کیبرد',
          slug: 'کیبرد'
        },
      ],

      cosmetics: [
        {
          title: 'آرایشی',
          slug: 'آرایشی'
        }, {
          title: 'مراقبت پوستی',
          slug: 'مراقبت-پوستی'
        }, {
          title: 'مراقبت مو',
          slug: 'مراقبت-مو'
        }, {
          title: 'لوازم شخصی',
          slug: 'لوازم-شخصی'
        }
      ],

      tools: [
        {
          title: 'کارواش',
          slug: 'کارواش'
        }, {
          title: 'دریل',
          slug: 'دریل'
        }, {
          title: 'اره برقی',
          slug: 'اره-برقی'
        }, {
          title: 'لوازم مصرفی خودرو',
          slug: 'لوازم-مصرفی-خودرو'
        }
      ],

      homeSupplies: [
        {
          title: 'قابلمه',
          slug: 'قابلمه'
        }, {
          title: 'ست قاشق',
          slug: 'ست-قاشق'
        }, {
          title: 'لیوان',
          slug: 'لیوان'
        }, {
          title: 'جا ادویه',
          slug: 'جا-ادویه'
        }
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.logo-img {
  width: 80%;
  height: auto;
}

.color-gray {
  color: #666;
}

.font-14 {
  font-size: 14px;
}

.font-18 {
  font-size: 18px;
}

.p-10 {
  padding: 10px;
}

.p-30 {
  padding: 30px;
}

.mt-10 {
  margin-top: 10px;
}

.pr-10 {
  padding-right: 10px;
}

.header-serch {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  border: none;
  display: flex;
  flex-direction: row;
}

.header-serch input {
  height: 50px;
  width: 100%;
  font-size: 13px;
  border: none;
  padding: 0 15px;
  background: transparent;
  box-shadow: none;
  outline: none;
  align-items: center;
}

.search-btn {
  height: 50px;
  background-color: #999999;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 0 17px;
  transition: .2s;
  line-height: 0;

  &:is(:hover, :focus) {
    background-color: #afaeae;
  }
}

.user-icon {
  height: 50px;
  width: 50px;
  font-size: 18px;
  color: #666;
  border-radius: 100%;
  background: #dedede;
  text-align: center;
  transition: 0.3s;
  margin-right: 10px;
  align-content: space-evenly;
}

.float-left {
  float: left;
}

.title {
  font-size: 15px;
  display: block;
  text-align: center;
  color: #666;
  font-weight: 500;
  transition: 0.3s;
}

.subtitle {
  display: block;
  color: #707070;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-account {
  text-decoration: none;
}

.user-account:hover .user-icon {
  color: #fff;
  background-color: #651fff;
}

.user-account:hover .title {
  color: #651fff;
}

.menu-bar {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  float: right;
  align-items: center;
  margin: 10px;
  border-radius: 20px;
  padding: 20px;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      /*in nemizare vaghti hover mishe tekon bokhoran*/
      margin-right: 5px;
      color: #666666;
      font-weight: 500;
      cursor: pointer;
      font-size: 14px;
      margin-left: 15px;
      transition: .2S;

      a {
        text-decoration: none;
        color: #666666;
        display: block;
        font-weight: 500;
        font-size: 14px;
        transition: .2S;

        &:is(:hover, :focus) {
          color: #651fff;
        }
      }

      &:is(:hover, :focus) {
        color: #651fff;
      }
    }
  }
}

.menu-has-childern {
  position: relative;
}

.angle-down-icon {
  font-size: 10px;
  line-height: inherit;
  margin-right: 3px;
  font-weight: 900;
  transition: .3s;
  color: #999;
}

.dropdown-menu {
  display: none;

  ul {
    display: block;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    border-radius: 6px;
    width: 200px;

    li {
      padding: 0;
      margin-bottom: 10px;

      &:is(:hover, :focus) {
        color: #651fff;
        padding-right: 15px;
      }
    }
  }
}

.menu-has-childern:hover .dropdown-menu {
  display: block;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
  background-color: #fff;
  text-align: right;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .075);
  padding: 10px 0;
  border-radius: 20px;
  border: none;
}

.menu-has-childern:hover .angle-down-icon {
  color: #651fff;
  transform: rotatex(180deg);
}

.fav-btn {
  background-color: #999999;
  border-radius: 20px;
  padding: 20px;
  width: auto;
  transition: .2s;
  line-height: 0;
  display: flex;
  flex-direction: column-reverse;

  &:is(:hover, :focus) {
    background-color: #afaeae;
  }
}

.icon {
  font-size: 16px;
  color: #fff;
}

.cart {
  flex-direction: row;
  background-color: #60BD10;
  padding: 16px 16px 16px 16px;
  box-shadow: 0px 3px 6px 0px rgba(96, 189, 15.999999999999979, 0.48);
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 60%;
  margin-right: 10px;
  cursor: pointer;
}

.cart-count {
  margin-right: 10px;
  background-color: #fff;
  color: #666666;
  border-radius: 20px;
  padding: 12px 8px;
}

/* .fade-leave-active below version 2.1.8 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

.fixed_back {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(10 10 10 / 30%);
  backdrop-filter: blur(5px);
  top: 0;
  right: 0;
  z-index: 50;
  overflow-y: auto;
}

.fixed_back-cart {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(10 10 10 / 30%);
  top: 0;
  right: 0;
  z-index: 40;
  overflow-y: auto;
}

.modal-content {
  width: 25%;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  cursor: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 60px;
  z-index: 50;
}

.close-btn {
  display: block;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #ff5153;
  font-size: 24px;
  background-color: transparent;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
}

.login-title {
  color: #222;
  margin-bottom: 30px;
}

.login-img {
  text-align: center;

  img {
    width: 90%;
  }
}

.login-form input[type=text] {
  display: block;
  background: #f5f5f5;
  border: none;
  transition: 0.2s;
  font-size: 13px;
  border-radius: 20px;
  padding: 10px;
  color: #495057;
  height: auto;
  width: 100%;
  outline: none;
}

.login-form label {
  font-size: 14px;
  margin-bottom: 10px;
}

.login-btn {
  background-color: #651fff;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 10px 10px;
  margin-right: 10px;
  transition: .2s;
  width: 25%;

  &:is(:hover, :focus) {
    background-color: #CA1B1B;
  }
}

.shopping_cart {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  transition: 0.3s;
  z-index: 50;
  overflow-y: auto;
  background-color: #fff;
}

.slide-shopping_cart-enter {
  transform: translateX(350px);
}

.slide-shopping_cart-enter-active {
  transition: all .5s ease-in;
}

.slide-shopping_cart-leave-active {
  transition: all .5s ease-in;
}

.slide-shopping_cart-leave-to {
  transform: translateX(350px);
}

.cart_empty-message {
  text-align: center;
  padding: 110px 15px 0 15px;
  color: #666;
}
</style>