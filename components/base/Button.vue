<script setup>
const localePath = useLocalePath();

defineProps({
  // Butonun içindeki yazı
  text: {
    type: String,
    required: true,
  },
  // Buton tipi: 'nuxt' (iç sayfa), 'external' (dış link/tel/whatsapp), 'button' (form/aksiyon)
  as: {
    type: String,
    default: 'nuxt',
    validator: (value) => ['nuxt', 'external', 'button'].includes(value),
  },
  // Yönlendirilecek sayfa yolu veya dış bağlantı (NuxtLink veya href için)
  to: {
    type: String,
    default: '/',
  },
  // Butonun HTML tipi (as='button' ise geçerlidir: 'submit', 'button')
  type: {
    type: String,
    default: 'button',
  },
  // Renk varyasyonu: 'dark' (Görseldeki siyah), 'pink' (Canlı pembe), 'white' (Beyaz zemin için)
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'pink', 'white'].includes(value),
  },
});
</script>

<template>
  <!-- 1. Seçenek: Proje İçi Sayfa Yönlendirmesi (NuxtLink) -->
  <NuxtLink
    v-if="as === 'nuxt'"
    :to="localePath(to)"
    class="inline-flex items-center justify-center text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm whitespace-nowrap cursor-pointer select-none"
    :class="{
      'bg-brand-dark text-white hover:bg-neutral-800 hover:shadow-[0_4px_12px_rgba(39,39,39,0.15)]':
        variant === 'dark',
      'bg-brand-pink text-white hover:bg-opacity-90 hover:shadow-[0_4px_12px_rgba(224,72,153,0.2)]':
        variant === 'pink',
      'bg-white text-brand-dark hover:bg-neutral-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]':
        variant === 'white',
    }"
  >
    {{ text }}
  </NuxtLink>

  <!-- 2. Seçenek: Telefon, WhatsApp veya Dış Bağlantı (Normal Link) -->
  <a
    v-else-if="as === 'external'"
    :href="to"
    class="inline-flex items-center justify-center text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm whitespace-nowrap"
    :class="{
      'bg-brand-dark text-white hover:bg-neutral-800 hover:shadow-[0_4px_12px_rgba(39,39,39,0.15)]':
        variant === 'dark',
      'bg-brand-pink text-white hover:bg-opacity-90 hover:shadow-[0_4px_12px_rgba(224,72,153,0.2)]':
        variant === 'pink',
      'bg-white text-brand-dark hover:bg-neutral-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]':
        variant === 'white',
    }"
  >
    {{ text }}
  </a>

  <!-- 3. Seçenek: Standart Aksiyon/Form Butonu (HTML Button) -->
  <button
    v-else
    :type="type"
    class="inline-flex items-center justify-center text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm whitespace-nowrap focus:outline-none"
    :class="{
      'bg-brand-dark text-white hover:bg-neutral-800 hover:shadow-[0_4px_12px_rgba(39,39,39,0.15)]':
        variant === 'dark',
      'bg-brand-pink text-white hover:bg-opacity-90 hover:shadow-[0_4px_12px_rgba(224,72,153,0.2)]':
        variant === 'pink',
      'bg-white text-brand-dark hover:bg-neutral-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]':
        variant === 'white',
    }"
  >
    {{ text }}
  </button>
</template>
