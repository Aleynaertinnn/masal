<script setup>
import { ref, onMounted } from 'vue';

// Merkezi animasyon composable'ımızı çağırıyoruz
const { initHeroOverlay } = useAnimation();

const heroRef = ref(null);
const storyRef = ref(null);

onMounted(() => {
  // Sayfa yüklendiğinde iki elementi birbirine bağlayan sihirli ScrollTrigger'ı çalıştır
  initHeroOverlay(heroRef.value, storyRef.value);
});
</script>

<template>
  <div>
    <div ref="heroRef" class="w-full">
      <HomeHero />
    </div>

    <div
      ref="storyRef"
      class="w-full relative  "
    >
      <HomeStory />
    </div>
    <HomeStatsBanner />
    <HomeServices />
    <HomeGallery />
    <HomeBlog />
    <HomeFaq />
  </div>
</template>
