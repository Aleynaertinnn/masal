<!-- components/home/HomeTeam.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import type { TeamMember } from '~/composables/useTeamData';

const { teamMembers } = useTeamData();

// Modal State Kontrolleri
const isModalOpen = ref(false);
const selectedMember = ref<TeamMember | null>(null);

const openMemberModal = (member: TeamMember) => {
  selectedMember.value = member;
  isModalOpen.value = true;
  // Arka plan kaymasını engelle
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<template>
  <section class="w-full py-24 px-6 bg-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto space-y-12">
      <BaseSectionHeader
        badge="Uzman Kadromuz"
        title="Geleceği Şekillendiren Rehberler"
        desc="Minik kahramanlarımıza sevgiyle rehberlik eden, alanında uzman eğitmen ve pedagog kadromuz."
      />

      <!-- 8 Kişilik 4'lü Grid Alanı -->
      <div class="w-full">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        >
          <TeamCard
            v-for="member in teamMembers"
            :key="member.id"
            :member="member"
            @open-modal="openMemberModal(member)"
          />
        </div>
      </div>
    </div>

    <!-- SIFIR CSS, %100 TAILWIND MOTORLU PREMIUM MODAL -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalOpen && selectedMember"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/40 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <!-- Modal Kart İçeriği -->
        <transition
          enter-active-class="transition duration-300 ease-out transform"
          enter-from-class="opacity-0 scale-95 translateY(10px)"
          enter-to-class="opacity-100 scale-100 translateY(0)"
          leave-active-class="transition duration-200 ease-in transform"
          leave-from-class="opacity-100 scale-100 translateY(0)"
          leave-to-class="opacity-0 scale-95 translateY(10px)"
        >
          <div
            class="bg-white w-full max-w-2xl rounded-[32px] border border-neutral-100 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative"
          >
            <!-- Kapatma Butonu (Minimal Çizgisel) -->
            <button
              @click="closeModal"
              class="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center transition-colors z-20"
            >
              <span
                class="border-l-2 border-b-2 border-neutral-500 w-2 h-2 transform rotate-135 -mb-0.5 ml-0.5"
              ></span>
            </button>

            <!-- Sol Kolon: Fotoğraf (md: 5 Kolon) -->
            <div class="md:col-span-5 h-64 md:h-full bg-neutral-100 relative">
              <img
                :src="selectedMember.image"
                :alt="selectedMember.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Sağ Kolon: Detaylı Bilgi (md: 7 Kolon) -->
            <div
              class="md:col-span-7 p-6 md:p-8 flex flex-col justify-center space-y-4"
            >
              <div class="space-y-1">
                <span
                  class="text-[10px] font-semibold tracking-wider text-brand-pink uppercase bg-brand-pink/5 px-2.5 py-0.5 rounded"
                >
                  Eğitmen Profili
                </span>
                <h3
                  class="text-xl font-semibold text-brand-dark tracking-tight"
                >
                  {{ selectedMember.name }}
                </h3>
                <p class="text-xs text-neutral-400 font-medium">
                  {{ selectedMember.role }}
                </p>
              </div>

              <div class="space-y-3 pt-3 border-t border-neutral-100">
                <div class="space-y-0.5">
                  <span
                    class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block"
                    >Eğitim & Uzmanlık</span
                  >
                  <p
                    class="text-xs font-medium text-brand-dark leading-relaxed"
                  >
                    {{ selectedMember.education }}
                  </p>
                </div>

                <div class="space-y-0.5">
                  <span
                    class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block"
                    >Hakkında</span
                  >
                  <p
                    class="text-xs font-medium text-neutral-600 leading-relaxed"
                  >
                    {{ selectedMember.bio }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>
