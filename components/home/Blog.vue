<script setup>
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';

const swiperModules = [Autoplay, FreeMode];

const { blogPosts } = useBlogData();
</script>

<template>
  <section class="w-full py-24 px-6 relative overflow-hidden">
    <div
      class="absolute -top-10 -right-10 w-44 h-44 bg-brand-pink/10 rounded-full blur-2xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto space-y-14 relative z-10">
      <BaseSectionHeader
        badge="Ebeveyn Rehberi"
        title="Güncel Paylaşımlarımız"
        desc="Okul psikoloğumuz ve eğitmenlerimizin kaleminden çocuk gelişimi ve okul öncesi eğitime dair ipuçları."
      />

      <!-- 2. Bölüm: Swiper.js Entegrasyonu -->
      <div class="w-full">
        <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '640': { slidesPerView: 2, spaceBetween: 24 },
            '1024': { slidesPerView: 3, spaceBetween: 30 },
          }"
          class="!pb-6"
        >
          <SwiperSlide v-for="post in blogPosts" :key="post.id">
            <BlogCard :post="post" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="text-center mt-4">
        <BaseButton
          text="Tüm Paylaşımları Gör"
          as="nuxt"
          to="/blog"
          variant="dark"
        />
      </div>
    </div>
  </section>
</template>
