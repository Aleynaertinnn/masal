<script setup>
import { Icon } from '@iconify/vue';

const stats = [
  {
    icon: 'vaadin:office',
    number: '8+',
    label: 'Yıldır Güvenle',
  },
  {
    icon: 'streamline-ultimate:workflow-teamwork-user-high-five-bold',
    number: '22+',
    label: 'Uzman Kadro',
  },
  {
    icon: 'mdi:emoticon-happy',
    number: '100%',
    label: 'Mutlu Veli Oranı',
  },
  {
    icon: 'solar:cup-star-bold',
    number: '2 +',
    label: 'Başarı Ödülü',
  },
];
</script>

<template>
  <div class="w-full flex flex-col mt-[-50px] relative z-10">
    <!-- Üst Dalgalı Baloncuk Şeridi (decor-2.png) -->
    <div
      class="w-full h-8 bg-repeat-x bg-top pointer-events-none select-none"
      style="
        background-image: url('/images/decor-2.png');
        background-size: auto 100%;
      "
    ></div>

    <!-- İstatistik Kartları Alanı (Poppins ve Bricolage Font Yapısıyla) -->
    <section class="bg-brand-yellow">
      <div
        class="max-w-6xl w-full mx-auto px-6 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col items-center text-center animate-fade-in"
        >
          <Icon
            :icon="stat.icon"  
            class="text-brand-dark text-4xl md:text-7xl mb-2 md:mb-3"
          />

          <span
            class="font-heading font-extrabold text-3xl lg:text-5xl text-brand-dark mb-1 tracking-tight"
          >
            {{ stat.number }}
          </span>

          <p
            class="font-sans font-medium text-xs sm:text-sm text-brand-dark/90 tracking-wide"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- Alt Dalgalı Baloncuk Şeridi (decor-2.png - Ters Çevrilmiş) -->
    <div
      class="w-full h-8 bg-repeat-x bg-bottom pointer-events-none select-none scale-y-[-1]"
      style="
        background-image: url('/images/decor-2.png');
        background-size: auto 100%;
      "
    ></div>
  </div>
</template>
