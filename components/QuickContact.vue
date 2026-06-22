<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

defineProps({
  phone: {
    type: String,
    default: '+902881234567',
  },
  whatsapp: {
    type: String,
    default: '902881234567',
  },
  whatsappMessage: {
    type: String,
    default: 'Merhaba, Masal Anaokulu hakkında bilgi alabilir miyim?',
  },
});

// Menünün açık/kapalı durumunu tutan state
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3">
    <div
      class="flex flex-col items-center gap-3 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom"
      :class="
        isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      "
    >
      <a
        :href="`tel:${phone}`"
        aria-label="Hızlı Telefon Araması"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-800"
      >
        <Icon icon="lucide:phone" class="w-5 h-5 text-white" />
      </a>

      <a
        :href="`https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile Mesaj Gönder"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-[#20ba59]"
      >
        <Icon icon="logos:whatsapp-icon" class="w-6 h-6" />
      </a>
    </div>

    <button
      @click="toggleMenu"
      aria-label="İletişim Menüsünü Aç"
      class="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 transform active:scale-95 focus:outline-none z-20"
      :class="
        isOpen
          ? 'bg-brand-dark rotate-135'
          : 'bg-brand-pink hover:bg-opacity-95'
      "
    >
      <span
        v-if="!isOpen"
        class="absolute inset-0 rounded-full bg-brand-pink opacity-60 animate-ping-custom"
      ></span>

      <Icon
        :icon="isOpen ? 'lucide:x' : 'iconoir:chat-bubble-solid'"
        class="w-6 h-6 relative z-10 transition-transform duration-300"
        :class="isOpen ? 'rotate-90' : 'animate-wiggle'"
      />
    </button>
  </div>
</template>

<style scoped>
/* Butonun arkasındaki tatlı genişleme dalgası */
@keyframes pingCustom {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  70% {
    transform: scale(1.35);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.animate-ping-custom {
  animation: pingCustom 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

/* Dikkat çekmesi için mesaj balonunun ara sıra tatlıca titremesi */
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  12%,
  28% {
    transform: rotate(-8deg);
  }
  20%,
  36% {
    transform: rotate(8deg);
  }
  45% {
    transform: rotate(0deg);
  }
}

.animate-wiggle {
  animation: wiggle 5s ease-in-out infinite;
}
</style>
