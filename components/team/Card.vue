<!-- components/team/TeamCard.vue -->
<script setup lang="ts">
import type { TeamMember } from '~/composables/useTeamData';

defineProps<{
  member: TeamMember;
}>();

// Kartın tıklandığını yukarıya haber veriyoruz
defineEmits(['open-modal']);
</script>

<template>
  <div
    @click="$emit('open-modal')"
    class="w-full bg-[#FAF7F2]/40 border border-brand-pink-light/10 p-4 rounded-[32px] space-y-4 group transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-brand-pink/5 flex flex-col h-full cursor-pointer select-none"
  >
    <div class="w-full aspect-[3/3] rounded-t-[24px] rounded-b-[16px] overflow-hidden bg-neutral-100 relative shadow-inner">
      <NuxtImg
        :src="member.image"
        :alt="member.name"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        format="webp"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <div class="space-y-1.5 px-1 flex flex-col justify-between flex-grow">
      <div>
        <h3 class="text-base font-semibold text-brand-dark tracking-tight transition-colors duration-300 group-hover:text-brand-pink">
          {{ member.name }}
        </h3>
        <p class="text-xs text-neutral-400 font-medium tracking-wide mt-0.5">
          {{ member.role }}
        </p>
      </div>

      <div class="pt-3 mt-2 border-t border-brand-pink-light/10">
        <span class="text-[10px] font-semibold tracking-wider text-brand-dark/40 group-hover:text-brand-pink transition-colors duration-300">
          Profili İncele
        </span>
      </div>
    </div>
  </div>
</template>