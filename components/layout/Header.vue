<script setup>
const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const navigationLinks = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'Albüm', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'İletişim', path: '/contact' },
];
</script>

<template>
  <header
    class="w-full bg-white/80 backdrop-blur-md py-4 sticky top-0 z-50 animate-slide-up"
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
