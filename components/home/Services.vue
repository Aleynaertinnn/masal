<script setup>
import { workshopsData } from '~/composables/workshops';
</script>

<template>
  <section class="w-full py-24 px-6 relative overflow-hidden">
    <div class="max-w-6xl mx-auto space-y-14 relative z-10">
      <BaseSectionHeader
        badge="NELER SUNUYORUZ?"
        title="Masal'da Eğitim ve Atölyeler"
        desc="24-72 ay arası çocuklarımızın gelişim adımlarına uygun, onları hem ilkokula hazırlayan hem de yeteneklerini keşfetmelerini sağlayan ayrıcalıklı eğitim programlarımız."
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 mt-16"
      >
        <div
          v-for="item in workshopsData"
          :key="item.id"
          class="relative flex flex-col items-center justify-center w-full max-w-[360px] mx-auto group"
        >
          <div
            class="relative w-full aspect-square transition-transform duration-500 group-hover:scale-[1.02] rounded-[40px] border-4 border-dashed dashed-border-pink overflow-hidden p-2"
          >
            <div class="services-image-mask h-full w-full bg-neutral-50">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>

          <div
            class="absolute -bottom-12 left-4 right-4 bg-brand-pink text-white p-5 rounded-[24px] shadow-lg shadow-pink-900/10 transition-all duration-500 transform group-hover:-translate-y-2"
          >
            <h3 class="font-heading font-bold text-lg mb-2 leading-tight">
              {{ item.title }}
            </h3>

            <p
              class="font-sans text-xs sm:text-sm text-white/90 font-normal leading-relaxed"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-image-mask {
  -webkit-mask-image: url('/images/masal-11.png');
  mask-image: url('/images/masal-11.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
