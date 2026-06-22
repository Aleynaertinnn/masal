<script setup>
defineProps({
  // Farklı görseller kullanabilmek için (Varsayılan olarak masal-6.png)
  src: {
    type: String,
    default: '/images/masal-6.png'
  },
  alt: {
    type: String,
    default: 'Kelebek Dekorasyonu'
  },
  // Üstten boşluk (Örn: 'top-[-50px]', 'top-4', 'top-[20%]')
  top: {
    type: String,
    default: 'auto'
  },
  // Alttan boşluk
  bottom: {
    type: String,
    default: 'auto'
  },
  // Soldan boşluk (Örn: 'left-[-20px]', 'left-10')
  left: {
    type: String,
    default: 'auto'
  },
  // Sağdan boşluk
  right: {
    type: String,
    default: 'auto'
  },
  // Genişlik ayarı (Örn: 'w-8 sm:w-12', 'w-16')
  width: {
    type: String,
    default: 'w-8 sm:w-12'
  },
  // Animasyon süresi (Bazı kelebekler daha hızlı, bazıları daha yavaş uçsun diye)
  duration: {
    type: String,
    default: '4s'
  }
})
</script>

<template>
  <div
    class="absolute pointer-events-none select-none z-20 animate-bounce-slow"
    :class="width"
    :style="{
      top: top !== 'auto' ? top : undefined,
      bottom: bottom !== 'auto' ? bottom : undefined,
      left: left !== 'auto' ? left : undefined,
      right: right !== 'auto' ? right : undefined,
      animationDuration: duration
    }"
  >
    <NuxtImg
      :src="src"
      :alt="alt"
      class="w-full h-auto object-contain"
      format="webp"
    />
  </div>
</template>

<style scoped>
@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(6deg); /* Süzülme etkisini biraz daha belirginleştirdim */
  }
}

.animate-bounce-slow {
  animation-name: bounceSlow;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
