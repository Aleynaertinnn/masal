<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const { initPaperPlanes } = useAnimation();

const heroSection = ref(null);
const leftPlaneRef = ref(null);
const rightPlaneRef = ref(null);

onMounted(() => {
  initPaperPlanes(heroSection.value, leftPlaneRef.value, rightPlaneRef.value);
});

onMounted(() => {
  Fancybox.bind('[data-fancybox="video"]', {
    Html: {
      youtube: {
        autoplay: 1,
        rel: 0,
        showinfo: 0,
      },
    },
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<template>
  <section
    ref="heroSection"
    class="hero relative overflow-hidden min-h-screen items-center flex flex-col justify-center"
  >
    <!-- Dekor Blur -->
    <div
      class="absolute top-32 left-20 w-52 h-52 bg-pink-200/30 rounded-full blur-3xl"
    ></div>

    <div
      class="absolute right-20 top-40 w-60 h-60 bg-yellow-200/30 rounded-full blur-3xl"
    ></div>

    <!-- Sol Uçak -->
    <div
      ref="leftPlaneRef"
      class="absolute left-0 top-16 w-24 sm:w-36 md:w-48 lg:w-64 pointer-events-none z-10 will-change-transform"
    >
      <NuxtImg src="/images/masal-3.png" alt="Kağıt Uçak" class="w-full" />
    </div>

    <!-- Sağ Uçak -->
    <div
      ref="rightPlaneRef"
      class="absolute right-0 top-16 w-24 sm:w-36 md:w-48 lg:w-64 pointer-events-none z-10 scale-x-[-1] will-change-transform"
    >
      <NuxtImg src="/images/masal-3.png" alt="Kağıt Uçak" class="w-full" />
    </div>

    <!-- İçerik -->
    <div
      class="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-24"
    >
      <span
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6"
      >
        🌈 Sevgi Dolu Eğitim Ortamı
      </span>

      <h1
        class="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[78px] leading-[1.1] text-neutral-900"
      >
        Lüleburgaz'ın <br />
        <span class="text-pink-500">Mutlu</span>
        Çocukları
      </h1>

      <p class="max-w-2xl text-lg text-neutral-500 mt-8 leading-relaxed">
        Sevgi dolu bir atmosferde, modern ve deneyimsel eğitimle çocuklarımızın
        geleceğine güvenle yön veriyoruz.
      </p>

      <!-- Butonlar -->
      <div class="flex flex-wrap justify-center gap-5 mt-5">
        <BaseButton
          text="Ön Kayıt Oluştur"
          as="nuxt"
          to="/on-kayit"
          variant="dark"
        />

        <a
          href="https://www.youtube.com/watch?v=ngOk-eo_sIo"
          data-fancybox="video"
          aria-label="Tanıtım Videosunu Oynat"
          class="relative group cursor-pointer flex items-center justify-center"
        >
          <!-- Arka Plandaki Canlı Dalga Efekti (Butonun arkasında sürekli büyüyen narin çember) -->
          <span
            class="absolute inset-0 rounded-full bg-neutral-900 opacity-30 group-hover:opacity-40 animate-ping-slow"
          ></span>

          <!-- Ana Oynat Butonu (Hover olunca pembeleşen premium geçiş) -->
          <div
            class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-pink z-10"
          >
            <Icon
              name="ph:play-fill"
              class="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
        </a>
      </div>
    </div>

    <!-- Alt İllüstrasyon -->
    <div
      class="w-full h-[250px] pointer-events-none select-none bg-repeat-x bg-top bg-contain relative z-10"
      style="background-image: url('/images/masal-2.png')"
    ></div>
  </section>
</template>

<style scoped>
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#f4c2d7 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.15;
}

@keyframes floatLeft {
  0% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-15px) rotate(5deg);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes floatRight {
  0% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-12px) rotate(-5deg);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
}

.float-left-plane {
  animation: floatLeft 5s ease-in-out infinite;
}

.float-right-plane {
  animation: floatRight 6s ease-in-out infinite;
}
</style>
