<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MiniCart from '@/components/MiniCart.vue';
import DiscountedProductsCard from '@/components/DiscountedProductsCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import MediumCard from '@/components/MediumCard.vue';
import BrandCard from '@/components/BrandCard.vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'SvgSpinnersClock',
});
</script>


<template>
  <main>
    <div class="container bv-example-row">
      <section class="mb-30">
        <div class="row">
          <div class="mt-30">
            <Splide class="row" :options="{
              arrows: false, pagination: true, direction: 'rtl', type: 'slide', perPage: 1, trimSpace: false, perMove: 1, height: 400, autoplay: true, gap: 10,
              breakpoints: {
                1200: { height: 400 },
                820: { height: 300 },
                449: { height: 200, pagination: false },
              },
            }" aria-label="My Favorite Images">

              <SplideSlide class="slider" v-for="sliderImg in sliderImgs">
                <img alt={{alt}} :src="sliderImg.thumbnail">
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <div class="row flex-nowrap flex-lg-wrap overflow-auto">
          <div class="col-auto col-lg d-flex justify-content-between gap-2">
            <div class="category-card" v-for="miniCart in miniCarts">
              <MiniCart v-bind="miniCart"></MiniCart>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <div class="row">
          <div class="carousel-discount d-flex align-items-center">

            <div class="col-lg-3 col-md-3 display-responsive">
              <div class="d-flex flex-column text-center">
                <span class="mb-3">
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

            <div class="col-lg-9 col-md-9 col-12 padding-respansive">
              <Splide class="row" :options="{
                arrows: false, pagination: false, direction: 'rtl', type: 'slide', perPage: 4, trimSpace: false, perMove: 1, autoplay: true,
                breakpoints: {
                  1200: { perPage: 4 },
                  820: { perPage: 2.5 },
                  449: { perPage: 1.5 },
                }
              }" aria-label="My Favorite Images">

                <SplideSlide v-for="DiscountedProductsCard in DiscountedProductsCards">
                  <DiscountedProductsCard v-bind="DiscountedProductsCard"></DiscountedProductsCard>
                </SplideSlide>
              </Splide>
            </div>

          </div>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <header class="section-header d-flex align-items-center justify-content-between mb-20">
          <span class="section-title">جدیدترین محصولات</span>
          <button class="btn">
            <router-link :to='{ name: "shopPageRoute" }'>
              دیدن همه
            </router-link>
          </button>
        </header>

        <div class="carousel-content">
          <Splide class="row" :options="{
            arrows: true, pagination: false, interval: '4000', direction: 'rtl', type: 'slide', perPage: 4.5, trimSpace: true, perMove: 1, autoplay: true, rewind: true,
            breakpoints: {
              1200: { perPage: 4.5 },
              820: { perPage: 3.25 },
              449: { perPage: 1.5 },
            }
          }" aria-label="My Favorite Images">

            <SplideSlide v-for="ProductCard in ProductCards">
              <ProductCard v-bind="ProductCard"></ProductCard>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>

    <div class="container bv-example-row display-responsive">
      <section class="mb-30">
        <div class="row">
          <div class="col-lg-3 col-md-3" v-for="MediumCard in MediumCards">
            <MediumCard v-bind="MediumCard"></MediumCard>
          </div>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <header class="section-header d-flex align-items-center justify-content-between mb-20">
          <span class="section-title"> لوازم آرایشی و بهداشتی </span>
          <button class="btn">
            <router-link :to='{ name: "cosmeticsPageRoute" }'>
              دیدن همه
            </router-link>
          </button>
        </header>

        <div class="carousel-content">
          <Splide class="row" :options="{
            arrows: true, pagination: false, interval: '4000', direction: 'rtl', type: 'slide', perPage: 4.5, trimSpace: true, perMove: 1, autoplay: true, rewind: true,
            breakpoints: {
              1200: { perPage: 4.5 },
              820: { perPage: 3.25 },
              449: { perPage: 1.5 },
            }
          }" aria-label="My Favorite Images">

            <SplideSlide v-for="CosmeticProduct in CosmeticProducts">
              <ProductCard v-bind="CosmeticProduct"></ProductCard>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <header class="section-header d-flex align-items-center justify-content-between mb-20">
          <span class="section-title"> مد و پوشاک روز </span>
          <button class="btn">
            <router-link :to='{ name: "fashionPageRoute" }'>
              دیدن همه
            </router-link>
          </button>
        </header>

        <div class="carousel-content">
          <Splide class="row" :options="{
            arrows: true, pagination: false, interval: '4000', direction: 'rtl', type: 'slide', perPage: 4.5, trimSpace: true, perMove: 1, autoplay: true, rewind: true,
            breakpoints: {
              1200: { perPage: 4.5 },
              820: { perPage: 3.25 },
              449: { perPage: 1.5 },
            }
          }" aria-label="My Favorite Images">

            <SplideSlide v-for="fashionProduct in fashionProducts">
              <ProductCard v-bind="fashionProduct"></ProductCard>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>

    <div class="container bv-example-row">
      <section class="mb-30">
        <div class="carousel-brand">
          <Splide class="row" :options="{
            arrows: true, pagination: false, interval: '4000', direction: 'rtl', type: 'slide', perPage: 7, trimSpace: true, perMove: 1, autoplay: true, rewind: true,
            breakpoints: {
              1200: { perPage: 7 },
              820: { perPage: 4 },
              449: { perPage: 2 },
            }
          }" aria-label="My Favorite Images">

            <SplideSlide v-for="brand in brands">
              <BrandCard v-bind="brand"></BrandCard>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>

  </main>
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
      ],

      ProductCards: [
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
      ],

      MediumCards: [
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/1000003322.jpg',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/1000003456.jpg',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/1000003547.jpg',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2022/06/1000003570.jpg',
        }
      ],

      CosmeticProducts: [
        {
          title: ' کرم مرطوب کننده سافت نیوا 300 میلی لیتری (100 میل مجانی) ',
          subtitle: '50,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/st-ives-cream-renewing-688130141601.jpg',
          link: 'thumbnail',
          slug: 'کرم-مرطوب-کننده-سافت-نیوا',

        },
        {
          title: 'کرم مرطوب کننده نئودرم حاوی ویتامین E و B5 مناسب انواع پوست 50 میل ',
          subtitle: ' 80,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/limpo-ure-oserin-522130141201_0.jpg',
          link: 'thumbnail',
          slug: 'کرم-مرطوب-کننده-نئودرم',
        },
        {
          title: 'ادو پرفیوم زنانه فراگرنس ورد مدل Diva Glamorous Girl حجم 100 میل ',
          subtitle: ' 700,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/diva-lamoous-girl-332111291308-300x300.jpg',
          link: 'thumbnail',
          slug: 'fragrance-world-glamorous-girl-eau-de-parfum-for-women-100ml',
        },
        {
          title: 'موزن گوش و بینی و ابرو فیلیپس مدل NT1700 سری 1000',
          subtitle: ' 1,200,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/philips-nt1700-220000000004-300x300.jpg',
          link: 'thumbnail',
          slug: 'philips-nt1150-nose-trimmer',
        },
        {
          title: ' کرم مرطوب کننده سافت نیوا 300 میلی لیتری (100 میل مجانی) ',
          subtitle: '60,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/st-ives-cream-renewing-688130141601.jpg',
          link: 'thumbnail',
          slug: 'کرم-مرطوب-کننده-سافت-نیوا',
        },
        {
          title: 'ادو پرفیوم زنانه فراگرنس ورد مدل Diva Glamorous Girl حجم 100 میل ',
          subtitle: ' 800,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/diva-lamoous-girl-332111291308-300x300.jpg',
          link: 'thumbnail',
          slug: 'fragrance-world-glamorous-girl-eau-de-parfum-for-women-100ml',
        },
        {
          title: 'موزن گوش و بینی و ابرو فیلیپس مدل NT1700 سری 1000',
          subtitle: '1,200,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/02/philips-nt1700-220000000004-300x300.jpg',
          link: 'thumbnail',
          slug: 'philips-nt1150-nose-trimmer',
        }
      ],

      fashionProducts: [
        {
          title: ' ست هدیه مردانه چرما اسپرت کد KDBE01 ',
          subtitle: '250,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/08/b48f5dca694042daf30d8422f45d68b575c2d3b8_1628621724-2-300x300.jpg',
          link: 'thumbnail',
          slug: 'ست-هدیه-مردانه-چرم ',

        },
        {
          title: 'تی شرت مردانه لووین ',
          subtitle: ' 350,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/11/112870089-300x300.png',
          link: 'thumbnail',
          slug: 'تی-شرت-مردانه-لووین ',
        },
        {
          title: 'تی شرت مردانه زرد آگرین ',
          subtitle: ' 400,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/11/112549996-300x300.png',
          link: 'thumbnail',
          slug: 'تی-شرت-مردانه-آگرین',
        },
        {
          title: 'تیشرت مردانه سبز زی ',
          subtitle: ' 300,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/11/111244826-300x300.png',
          link: 'thumbnail',
          slug: 'پولوشرت-مردانه-زی',
        },
        {
          title: ' ست هدیه مردانه چرما اسپرت کد KDBE01 ',
          subtitle: '250,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2021/08/b48f5dca694042daf30d8422f45d68b575c2d3b8_1628621724-2-300x300.jpg',
          link: 'thumbnail',
          slug: 'ست-هدیه-مردانه-چرم ',

        },
        {
          title: 'تی شرت مردانه لووین ',
          subtitle: ' 350,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/11/112870089-300x300.png',
          link: 'thumbnail',
          slug: 'تی-شرت-مردانه-لووین ',
        },
        {
          title: 'تی شرت مردانه زرد آگرین ',
          subtitle: ' 400,000',
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/11/112549996-300x300.png',
          link: 'thumbnail',
          slug: 'تی-شرت-مردانه-آگرین',
        },
      ],

      brands: [
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/2315.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1192.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1076.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1078.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1080.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1086.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1078.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1080.png',
        },
        {
          thumbnail: 'https://demo.coderboy.ir/negarshop/wp-content/uploads/2019/05/1086.png',
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">
.container {
  @media (min-width:450px) and (max-width:820px) {
    min-width: 98%;
  }

  @media (max-width:449px) {
    max-width: 95%;
  }
}

.mt-30 {
  margin-top: 30px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-20 {
  margin-bottom: 20px;
}

.p-10 {
  padding: 10px;
}

.slider {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  display: block;
  width: auto;
  height: 100%;

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
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
  overflow: hidden;
}

.carousel-title {
  color: #FFFFFF;
  font-size: 32px;
  line-height: 1;

  @media (min-width:450px) and (max-width:820px) {
    font-size: 22px;
  }
}

.section-title {
  color: #651fff;
  border-bottom: solid #651fff 2px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
}

.btn {
  background-color: #757575;
  display: inline-block;
  border-radius: 20px;
  border: none;
  outline: none;

  a {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
  }

  &:is(:hover, :focus) {
    background-color: #afaeae;
  }
}

.carousel-brand {
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  padding: 30px;
}

//responsive
.display-responsive {
  @media (max-width:449px) {
    display: none;
  }
}

.padding-respansive {
  @media (max-width:820px) {
    padding: 0 10px;
  }
}
</style>