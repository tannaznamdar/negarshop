<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MiniCart from '@/components/MiniCart.vue';
</script>

<template>
  <div class="container-fluid">
    <section class="mb-30">
      <div class="container bv-example-row">
        <div class="row">
          <div class="mt-30">
            <Splide class="row" :options="{
              arrows: false, pagination: true, direction: 'rtl', type: 'slide', perPage: 1, trimSpace: false, perMove: 1, height: 400, autoplay: true,
            }" aria-label="My Favorite Images">

              <SplideSlide class="slider" v-for="sliderImg in sliderImgs">
                <img alt={{alt}} :src="sliderImg.thumbnail">
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-30">
      <div class="container bv-example-row">
        <div class="row flex-nowrap flex-lg-wrap overflow-auto">
          <div class="col-auto col-lg mb-3 d-flex justify-content-between">
            <div class="category-card" v-for="miniCart in miniCarts">
              <MiniCart v-bind="miniCart"></MiniCart>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>


export default {
  name: 'Home',
  data() {
    return {

      sliderImgs: [
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/slider-1-1.jpg',
          alt: 'slider-1'
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/slider-2-1.jpg',
          alt: 'slider-2'
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/slider-3-1.jpg',
          alt: 'slider-3'
        }
      ],

      miniCarts: [
        {
          title: 'کالای دیجیتال',
          subtitle: '+22 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-1-1.jpg'

        },
        {
          title: 'سویشرت و هودی',
          subtitle: '+5 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-5.jpg'
        },
        {
          title: 'کفش ورزشی',
          subtitle: '+18 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-3.jpg'
        },
        {
          title: 'نوزاد',
          subtitle: '+2 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-6.jpg'
        }, {
          title: 'اسباب بازی',
          subtitle: '+10 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-4.jpg'
        },
        {
          title: 'لوازم آرایشی',
          subtitle: '+22 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-7.jpg'
        },
        {
          title: 'لپتاپ',
          subtitle: '+22 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-8.jpg'
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">
.mt-30 {
  margin-top: 30px;
}

.mb-30 {
  margin-bottom: 30px;
}

.slider {
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}

.category-card {
  width: 170px;
  height: 170px;
}
</style>