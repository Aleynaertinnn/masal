<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const navigationLinks = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'Albüm', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'İletişim', path: '/contact' },
];

// Akıllı Scroll Durum Yönetimi
const isHeaderVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // 1. Güvenlik Bariyeri: Eğer sayfa en üstteyse (0-50px arası), Header her zaman görünsün
  if (currentScrollY < 50) {
    isHeaderVisible.value = true;
    lastScrollY.value = currentScrollY;
    return;
  }

  // 2. Aşağı kaydırılıyorsa GİZLE, yukarı kaydırılıyorsa GÖSTER
  if (currentScrollY > lastScrollY.value) {
    isHeaderVisible.value = false; // Aşağı gidiyor -> Gizle
  } else {
    isHeaderVisible.value = true; // Yukarı çıkıyor -> Göster
  }

  // Mevcut scroll pozisyonunu bir sonraki kontrol için kaydet
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- 
    DINAMİK HEADER:
    - 'translate-y-0' ile ekranda durur, 'translate-y-full' (veya negatif) ile yukarı kaçar.
    - Duyuru barı ile çakışmaması için '-top-1' faza göre 'transition-transform duration-300' ekledik.
  -->
  <header
    class="w-full bg-white/60 backdrop-blur-md py-4 sticky top-0 z-50 transition-transform duration-300 ease-in-out"
    :class="isHeaderVisible ? 'translate-y-0' : '-translate-y-full shadow-none'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Sol Bölüm: Logo  -->
      <NuxtLink
        :to="localePath('/')"
        class="block transition-transform duration-300 hover:scale-105"
      >
        <NuxtImg
          src="/images/masal-logo.png"
          alt="Masal Anaokulu"
          width="180"
          height="70"
          class="h-12 w-auto object-contain"
          loading="eager"
          format="webp"
          :key="locale"
        />
      </NuxtLink>

      <!-- Orta Bölüm: Navigasyon Linkleri  -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="localePath(link.path)"
          class="relative text-[15px] font-medium text-brand-dark hover:text-brand-pink pb-2 transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-brand-pink after:rounded-full after:opacity-0 after:transition-all after:duration-200"
          active-class="!text-brand-pink after:!opacity-100 after:!bottom-1"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Sağ Bölüm: Sizi Arayalım Kapsül Buton -->
      <BaseButton
        text="Sizi Arayalım"
        as="external"
        to="tel:+902881234567"
        variant="dark"
      />
    </div>
  </header>
</template>
