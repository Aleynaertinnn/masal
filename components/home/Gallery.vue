<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { onMounted, onUnmounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// SSS Alanı görselleri
const images = ref([
  {
    src: 'https://images.pexels.com/photos/8535598/pexels-photo-8535598.jpeg',
    alt: 'Kayıt Dönemi',
  },
  {
    src: 'https://images.pexels.com/photos/8537196/pexels-photo-8537196.jpeg',
    alt: 'Eğitim Saatleri',
  },
  {
    src: 'https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg',
    alt: 'Yemek Menüsü',
  },
  {
    src: 'https://images.pexels.com/photos/8441902/pexels-photo-8441902.jpeg',
    alt: 'Güvenlik Önlemleri',
  },
  {
    src: 'https://images.pexels.com/photos/8535620/pexels-photo-8535620.jpeg',
    alt: 'Branş Dersleri',
  },
  {
    src: 'https://images.pexels.com/photos/8535229/pexels-photo-8535229.jpeg',
    alt: 'Ulaşım ve Servis',
  },
]);

defineProps({
  images: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  // Projedeki tüm 'data-fancybox="gallery"' niteliğine sahip elemanları bağla
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Türkçe dil desteği ve lüks geçiş ayarları
    Hash: false,
    Thumbs: {
      autoStart: true, // Alt kısımda küçük resim önizlemelerini göster
    },
    Images: {
      Panzoom: {
        maxScale: 2, // Maksimum yakınlaştırma oranı
      },
    },
    // Açılış ve kapanış animasyon hızları
    showClass: 'f-fadeIn',
    hideClass: 'f-fadeOut',
  });
});

onUnmounted(() => {
  // Sayfa değiştirildiğinde hafıza sızıntısı (memory leak) olmaması için temizle
  Fancybox.destroy();
});

const currentIndex = ref(0);
const totalItems = computed(() => images.value.length);

const getDiff = (index) => {
  let diff = index - (currentIndex.value % totalItems.value);
  if (diff > totalItems.value / 2) diff -= totalItems.value;
  if (diff < -totalItems.value / 2) diff += totalItems.value;
  return diff;
};

const getItemStyle = (index) => {
  const diff = getDiff(index);

  if (Math.abs(diff) > 2) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform: 'scale(0.5) translateX(0)',
    };
  }

  const translateX = diff * 110;
  const rotateY = diff * -25;
  const scale = 1 - Math.abs(diff) * 0.15;
  const zIndex = 10 - Math.abs(diff);
  const opacity = 1 - Math.abs(diff) * 0.4;

  return {
    transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
    zIndex,
    opacity,
    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  };
};

const next = () => {
  currentIndex.value++;
};

const prev = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = totalItems.value * 100;
  }
  currentIndex.value--;
};
</script>

<template>
  <section
    class="relative w-full bg-white py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden"
  >
    <div class="relative z-20 w-full mb-12 text-center">
      <BaseDecorButterfly top="10px" left="80%" />
      <BaseSectionHeader
        badge="Okulumuzda Yaşam"
        title="Keşif Alanlarımız"
        desc="Okulumuz, kayıt süreçlerimiz ve eğitim düzenimiz hakkında en çok merak edilen soruların yanıtları."
      />
      <BaseButton
        text="Tümünü Gör"
        as="nuxt"
        to="/sanal-tur"
        variant="dark"
        class="mt-6"
      />
    </div>

    <div
      class="relative z-10 w-full max-w-5xl h-[240px] sm:h-[360px] md:h-[440px] flex items-center justify-center"
      style="perspective: 1500px"
    >
      <div
        class="relative w-[85%] sm:w-[60%] md:w-[50%] h-full flex items-center justify-center"
        style="transform-style: preserve-3d"
      >
        <div
          v-for="(img, index) in images"
          :key="index"
          class="absolute w-full h-full select-none"
          :style="getItemStyle(index)"
        >
          <a
            :href="img.src"
            data-fancybox="gallery"
            :data-caption="img.alt"
            class="block w-full h-full overflow-hidden rounded-[24px] bg-neutral-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-neutral-100 cursor-zoom-in transition-transform duration-300 active:scale-95 group"
          >
            <NuxtImg
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
              format="webp"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="relative z-20 flex gap-4 mt-12">
      <button
        @click="prev"
        aria-label="Önceki Alan"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_4px_12px_rgba(39,39,39,0.15)] active:scale-95 focus:outline-none"
      >
        <Icon icon="lucide:chevron-left" class="w-6 h-6 text-white" />
      </button>

      <button
        @click="next"
        aria-label="Sonraki Alan"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_4px_12px_rgba(39,39,39,0.15)] active:scale-95 focus:outline-none"
      >
        <Icon icon="lucide:chevron-right" class="w-6 h-6 text-white" />
      </button>
    </div>
  </section>
</template>
