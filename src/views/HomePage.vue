<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MiniCart from '@/components/MiniCart.vue';
import DiscountedProductsCard from '@/components/DiscountedProductsCard.vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'SvgSpinnersClock',
});
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
          <div class="col-auto col-lg d-flex justify-content-between">
            <div class="category-card" v-for="miniCart in miniCarts">
              <MiniCart v-bind="miniCart"></MiniCart>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-30">
      <div class="container bv-example-row">
        <div class="row ">
          <div class="carousel-discount d-flex align-items-center">

            <div class="col-lg-3">
              <div class="d-flex flex-column text-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24">
                    <path fill="#fff"
                      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                    <rect width="2" height="7" x="11" y="6" fill="#fff" rx="1">
                      <animateTransform attributeName="transform" dur="12s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </rect>
                    <rect width="2" height="9" x="11" y="11" fill="#fff" rx="1">
                      <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </rect>
                  </svg>
                </span>
                <h2 class="carousel-title">زنگ تخفیفه! </h2>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="p-10">
                <Splide class="row" :options="{
                  arrows: false, pagination: false, direction: 'rtl', type: 'slide', perPage: 4, trimSpace: false, perMove: 1, autoplay: true,
                }" aria-label="My Favorite Images">

                  <SplideSlide v-for="DiscountedProductsCard in DiscountedProductsCards">
                    <DiscountedProductsCard v-bind="DiscountedProductsCard"></DiscountedProductsCard>
                  </SplideSlide>
                </Splide>
              </div>
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
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-1-1.jpg',
          link: 'digitalPageRoute'
        },
        {
          title: 'سویشرت و هودی',
          subtitle: '+5 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-5.jpg',
          link: 'fashionPageRoute'
        },
        {
          title: 'کفش ورزشی',
          subtitle: '+18 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-3.jpg',
          link: 'fashionPageRoute'
        },
        {
          title: 'نوزاد',
          subtitle: '+2 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-6.jpg',
          link: 'childPageRoute'
        }, {
          title: 'اسباب بازی',
          subtitle: '+10 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-4.jpg',
          link: 'childPageRoute'
        },
        {
          title: 'لوازم آرایشی',
          subtitle: '+22 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-7.jpg',
          link: 'cosmeticsPageRoute'
        },
        {
          title: 'لپتاپ',
          subtitle: '+22 محصول',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/icon-8.jpg',
          link: 'digitalPageRoute'
        }
      ],

      DiscountedProductsCards: [
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 Pro ظرفیت 256GB دو سیم کارت',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/note-20-ultra-300x300.jpg',
          link: 'thumbnail',
          slug: 'iPhone-13-Pro',

        },
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 ظرفیت 128GB دو سیم کارت  ',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/iphone-13-1-300x300.jpg',
          link: 'thumbnail',
          slug: 'iPhone-13',
        },
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 Pro ظرفیت 256GB دو سیم کارت',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/iphone-13-pro-1-300x300.jpg',
          link: 'thumbnail',
          slug: 'iPhone-13-Pro',
        },
        {
          title: 'گوشی سامسونگ مدل S20 رم 8GB حافظه داخلی 128GB ',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/s20-fe-300x300.jpg',
          link: 'thumbnail',
          slug: 'سامسونگ-s20',
        },
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 Pro ظرفیت 256GB دو سیم کارت',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/note-20-ultra-300x300.jpg',
          link: 'thumbnail',
          slug: 'galaxy-note-20',
        },
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 ظرفیت 128GB دو سیم کارت  ',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/iphone-13-1-300x300.jpg',
          link: 'thumbnail',
          slug: 'iPhone-13',
        },
        {
          title: 'گوشی موبایل اپل مدل iPhone 13 Pro ظرفیت 256GB دو سیم کارت',
          subtitle: ' ۴۲,۰۰۰,۰۰۰',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/iphone-13-pro-1-300x300.jpg',
          link: 'thumbnail',
          slug: 'iPhone-13-Pro',
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

.p-10 {
  padding: 10px;
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

.carousel-discount {
  background-color: transparent;
  background-image: linear-gradient(10deg, #F43C3C 0%, #F22953 100%);
  border-radius: 20px;
  width: 100%;
  padding: 10px;
}

.carousel-title {
  color: #FFFFFF;
  font-size: 32px;
  line-height: 1;
}
</style>