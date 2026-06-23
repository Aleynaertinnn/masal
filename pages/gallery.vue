<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const categories = [
  { id: 'all', label: 'Tüm Alanlar' },
  { id: 'play', label: 'Oyun Odaları' },
  { id: 'garden', label: 'Masal Bahçesi' },
  { id: 'dining', label: 'Yemek Salonu' },
  { id: 'activity', label: 'Sanat & Atölye' },
  { id: 'sleep', label: 'Uyku Odası' },
];

const galleryItems = [
  {
    id: 1,
    category: 'play',
    src: 'https://images.pexels.com/photos/15046722/pexels-photo-15046722.jpeg',
    alt: 'Yaratıcı Oyun Alanı',
  },
  {
    id: 2,
    category: 'garden',
    src: 'https://images.pexels.com/photos/36388461/pexels-photo-36388461.jpeg',
    alt: 'Ekolojik Tarım Bahçesi',
  },
  {
    id: 3,
    category: 'dining',
    src: 'https://images.pexels.com/photos/8923952/pexels-photo-8923952.jpeg',
    alt: 'Masal Yemek Salonu',
  },
  {
    id: 4,
    category: 'activity',
    src: 'https://images.pexels.com/photos/8537196/pexels-photo-8537196.jpeg',
    alt: 'Montessori Atölyesi',
  },
  {
    id: 5,
    category: 'sleep',
    src: 'https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg',
    alt: 'Huzurlu Uyku Odası',
  },
  {
    id: 6,
    category: 'play',
    src: 'https://images.pexels.com/photos/8422105/pexels-photo-8422105.jpeg',
    alt: 'Top Havuzu & Macera Parkuru',
  },
  {
    id: 7,
    category: 'garden',
    src: 'https://images.pexels.com/photos/8535235/pexels-photo-8535235.jpeg',
    alt: 'Açık Hava Oyun Alanı',
  },
  {
    id: 8,
    category: 'activity',
    src: '/images/gallery/activity-2.jpg',
    src: 'https://images.pexels.com/photos/3662842/pexels-photo-3662842.jpeg',
    alt: 'Robotik Kodlama Sınıfı',
  },
];

const activeFilter = ref('all');

const isItemActive = (itemCategory) => {
  return activeFilter.value === 'all' || itemCategory === activeFilter.value;
};

onMounted(() => {
  Fancybox.bind('[data-fancybox="album"]', {
    Thumbs: { autoStart: true },
    Images: { Panzoom: { maxScale: 2 } },
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<template>
  <main class="w-full min-h-screen bg-white pb-24 relative overflow-hidden">
    <BaseBreadcrumb
      title="Okulumuzun"
      titleHighlight="Sihirli Alanları"
      currentPage="Albüm"
      description="Çocuklarımızın gün boyu güvenle keşfettiği, sıcacık anılar biriktirdiği tüm odalarımız ve Masal Bahçemiz."
    />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div
        class="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
      >
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeFilter = cat.id"
          class="text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform active:scale-95"
          :class="
            activeFilter === cat.id
              ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20'
              : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
          "
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="w-full">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          <div
            v-for="item in galleryItems"
            :key="item.id"
            class="transition-all duration-500 ease-in-out transform origin-center"
            :class="[
              isItemActive(item.category)
                ? 'opacity-100 scale-100 pointer-events-auto visible block'
                : 'opacity-0 scale-95 pointer-events-none invisible hidden',
            ]"
          >
            <a
              :href="item.src"
              data-fancybox="album"
              :data-caption="`<b>${item.alt}</b>`"
              class="group relative w-full aspect-[4/3] rounded-[24px] overflow-hidden block bg-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-zoom-in"
            >
              <NuxtImg
                :src="item.src"
                :alt="item.alt"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                format="webp"
                loading="lazy"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6"
              >
                <h3
                  class="font-heading font-extrabold text-base md:text-lg text-white leading-tight transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {{ item.alt }}
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
