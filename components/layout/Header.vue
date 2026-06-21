<script setup>
const { locale, locales, setLocale } = useI18n();
</script>

<template>
  <header
    class="w-full bg-brand-slate-950/80 backdrop-blur-md border-b border-brand-slate-900 fixed top-0 left-0 z-50 px-6 py-4"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2 font-bold text-lg text-white"
      >
        <Icon name="logos:nuxt-icon" class="text-2xl" />
        <span>Workspace</span>
      </NuxtLink>

      <!-- Sağ Taraf: Menü ve Dil Seçici -->
      <div class="flex items-center gap-6">
        <nav class="flex items-center gap-6 text-sm text-brand-slate-100/70">
          <NuxtLink to="/" class="hover:text-white transition-colors"
            >Ana Sayfa</NuxtLink
          >
        </nav>

        <!-- Dil Değiştirme Butonları -->
        <div
          class="flex gap-2 bg-brand-slate-900 p-1 rounded-lg border border-brand-slate-800 text-xs"
        >
          <button
            v-for="lang in locales"
            :key="lang.code"
            @click="setLocale(lang.code)"
            :class="[
              'px-2 py-1 rounded-md transition-all font-medium uppercase',
              locale === lang.code
                ? 'bg-brand-emerald-500 text-brand-slate-950'
                : 'text-brand-slate-100/60 hover:text-white',
            ]"
          >
            {{ lang.code }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
