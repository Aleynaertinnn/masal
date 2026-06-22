<template>
  <section
    class="hero relative overflow-hidden  min-h-screen items-center flex flex-col justify-center"
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
      class="absolute left-0 top-16 w-24 sm:w-36 md:w-48 lg:w-64 pointer-events-none float-left-plane z-10"
    >
      <NuxtImg src="/images/masal-3.png" alt="Kağıt Uçak" class="w-full" />
    </div>

    <!-- Sağ Uçak -->
    <div
      class="absolute right-0 top-16 w-24 sm:w-36 md:w-48 lg:w-64 pointer-events-none float-right-plane z-10"
    >
      <NuxtImg
        src="/images/masal-3.png"
        alt="Kağıt Uçak"
        class="w-full scale-x-[-1]"
      />
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

        <div
          class="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center"
        >
          <Icon name="ph:play-fill" class="w-5 h-5" />
        </div>
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
