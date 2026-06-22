<script setup>
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';

const swiperModules = [Autoplay, FreeMode];

const posts = [
  {
    id: 1,
    tag: 'Sosyal Yaşam',
    title: 'Lüleburgaz’da Çocuklarla Hafta Sonu...',
    desc: 'Okul psikoloğumuz ve eğitmenlerimizin kaleminden çocuk gelişimi ve okul öncesi eğitime dair ipuçları.',
    author: 'Admin',
    date: '10 Temmuz 2026',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  },
  {
    id: 2,
    tag: 'Sosyal Yaşam',
    title: 'Lüleburgaz’da Çocuklarla Hafta Sonu...',
    desc: 'Okul psikoloğumuz ve eğitmenlerimizin kaleminden çocuk gelişimi ve okul öncesi eğitime dair ipuçları.',
    author: 'Admin',
    date: '10 Temmuz 2026',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  },
  {
    id: 3,
    tag: 'Sosyal Yaşam',
    title: 'Lüleburgaz’da Çocuklarla Hafta Sonu...',
    desc: 'Okul psikoloğumuz ve eğitmenlerimizin kaleminden child gelişimi ve okul öncesi eğitime dair ipuçları.',
    author: 'Admin',
    date: '10 Temmuz 2026',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  },
  {
    id: 4,
    tag: 'Eğitim Modeli',
    title: 'Montessori Eğitimi ve Masal Dünyası',
    desc: 'Çocukların kendi kararlarını alarak özgüvenli bireyler olarak büyümesinde okul öncesi eğitimin rolü.',
    author: 'Pedagog Merve',
    date: '18 Haziran 2026',
    image: 'https://images.pexels.com/photos/8612933/pexels-photo-8612933.jpeg',
  },
];
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
          <SwiperSlide v-for="post in posts" :key="post.id">
            <div
              class="w-full bg-[#FAF7F2]/40 border border-brand-pink-light/10 p-4 rounded-[28px] space-y-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-pink/5 group"
            >
              <div
                class="w-full aspect-[4/3] rounded-[20px] overflow-hidden relative shadow-inner"
              >
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  placeholder
                />
                <span
                  class="absolute top-4 right-4 z-10 px-4 py-1.5 bg-brand-pink-50 text-brand-pink rounded-full text-[10px] font-bold tracking-wide shadow-sm font-sans"
                >
                  {{ post.tag }}
                </span>
              </div>

              <div
                class="flex items-center gap-6 text-[11px] font-medium text-brand-dark/50 font-sans px-1"
              >
                <div class="flex items-center gap-1.5">
                  <Icon name="uis:user" class="text-brand-pink/70 text-xs" />
                  <span class="text-brand-dark/80 font-medium">{{
                    post.author
                  }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <Icon
                    name="uis:calender"
                    class="text-brand-blue/70 text-xs"
                  />
                  <span class="text-brand-dark/80 font-medium">{{
                    post.date
                  }}</span>
                </div>
              </div>

              <div class="space-y-2 px-1 font-sans text-brand-dark">
                <h3
                  class="text-base md:text-lg font-heading font-black leading-snug tracking-tight transition-colors duration-300 group-hover:text-brand-pink line-clamp-1"
                >
                  {{ post.title }}
                </h3>
                <p
                  class="text-xs md:text-sm text-brand-dark/60 font-medium leading-relaxed line-clamp-3"
                >
                  {{ post.desc }}
                </p>
              </div>

              <div class="pt-2 pb-1 px-1 border-t border-brand-pink-light/10">
                <button
                  type="button"
                  class="inline-flex items-center gap-1 text-xs font-bold text-brand-dark border-b border-brand-dark hover:text-brand-pink hover:border-brand-pink transition-colors duration-300 pb-0.5"
                >
                  <span>Devamını Oku</span>
                </button>
              </div>
            </div>
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
