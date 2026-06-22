<script setup>
defineProps({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
});
</script>

<template>
  <div class="w-full text-center space-y-3 max-w-2xl mx-auto font-sans">
    <span
      class="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-pink/80 font-heading"
    >
      {{ badge }}
    </span>
    <h2
      class="text-3xl md:text-5xl font-black text-brand-dark font-heading tracking-tight leading-tight"
    >
      {{ title }}
    </h2>
    <p
      v-if="desc"
      class="text-xs md:text-sm text-brand-dark/60 font-medium leading-relaxed"
    >
      {{ desc }}
    </p>
  </div>
</template>
