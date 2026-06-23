<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  title: { type: String, required: true },
  titleHighlight: { type: String, default: '' },
  description: { type: String, default: '' },
  currentPage: { type: String, required: true },
  decorImage: { type: String, default: '/images/decor-8.png' },
});
</script>

<template>
  <section
    class="w-full bg-gradient-to-b from-brand-pink/20 via-brand-pink/10 to-transparent pt-36 pb-20 md:pb-28 px-6 relative rounded-b-[40px] md:rounded-b-[60px]"
  >
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10"
    >
      <div class="space-y-3 text-left">
        <nav
          class="flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-dark/50 select-none"
        >
          <NuxtLink
            to="/"
            class="hover:text-brand-pink transition-colors flex items-center gap-1"
          >
            <Icon icon="lucide:home" class="w-3.5 h-3.5" />
            Anasayfa
          </NuxtLink>
          <Icon
            icon="lucide:chevron-right"
            class="w-3 h-3 text-brand-dark/30"
          />
          <span class="text-brand-pink font-bold">{{ currentPage }}</span>
        </nav>

        <!-- Başlık Mimarisi -->
        <div class="relative">
          <h1
            class="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-tight"
          >
            {{ title }} <br v-if="titleHighlight" class="hidden sm:inline" />
            <span
              v-if="titleHighlight"
              class="text-brand-dark bg-brand-pink px-3 py-0.5 rounded-2xl inline-block mt-1 transform -rotate-1"
            >
              {{ titleHighlight }}
            </span>
          </h1>
          
        </div>
      </div>

      <!-- Sağ Katman: Spot Bilgi Metni -->
      <div
        v-if="description"
        class="max-w-xs text-left md:text-right md:self-end"
      >
        <p
          class="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
