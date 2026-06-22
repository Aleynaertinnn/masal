<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

// Duyurulacak Metin Listesi
const announcements = [
  '✨ 2026 - 2027 Erken Kayıt Dönemimiz Başlamıştır! Sınırlı Kontenjanlar İçin Hemen Başvurun.',
  '🌈 Kırklareli Valiliği Tarafından "Yıldızlı İşletme" Ödüllü Tek Anaokulu.',
  '🎈 Uzman Pedagog Kadromuz ve Multi-Disipliner Eğitim Modelimizle Geleceğe Güvenli Adımlar.',
];

const activeIndex = ref(0);
let rotationTimer;

const activeAnnouncement = computed(() => announcements[activeIndex.value]);

onMounted(() => {
  rotationTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % announcements.length;
  }, 4000);
});

onBeforeUnmount(() => {
  if (rotationTimer) {
    clearInterval(rotationTimer);
  }
});
</script>

<template>
  <!-- En Üst Koyu Bar (bg-brand-dark) -->
  <div
    class="w-full bg-brand-dark text-white/90 text-[11px] sm:text-xs font-medium tracking-wide py-2.5 border-b border-white/5 relative z-[60] select-none"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="relative flex min-h-[1rem] items-center justify-center overflow-hidden text-center"
      >
        <Transition name="announcement-fade" mode="out-in">
          <span
            :key="activeIndex"
            class="block max-w-[90vw] md:max-w-none whitespace-nowrap"
          >
            {{ activeAnnouncement }}
          </span>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.announcement-fade-enter-active,
.announcement-fade-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}

.announcement-fade-enter-from,
.announcement-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.announcement-fade-enter-to,
.announcement-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
