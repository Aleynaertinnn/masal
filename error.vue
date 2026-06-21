<script setup lang="ts">
// Nuxt'ın hata objesini tip güvenli olarak alıyoruz
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

// Kullanıcıyı ana sayfaya gönderirken hata durumunu temizleyen resmi fonksiyon
const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-brand-slate-950 text-white flex flex-col items-center justify-center font-sans overflow-hidden relative px-4">
    
    <!-- Arka Plan Kırmızı/Turuncu Işık Sızıntısı (Hata Hissiyatı İçin Yumuşak Glow) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none"></div>

    <!-- İçerik Kartı -->
    <div class="text-center z-10 space-y-6 max-w-md animate-slide-up">
      
      <!-- Hata İkonu veya Kodu -->
      <div class="inline-flex items-center justify-center p-4 bg-brand-slate-900 border border-brand-slate-800/60 rounded-full shadow-2xl mb-2 text-rose-400">
        <!-- Eğer 404 ise büyüteç, diğer hatalarda uyarı ikonu gösteriyoruz -->
        <Icon 
          :name="error.statusCode === 404 ? 'uil:search-minus' : 'uil:exclamation-triangle'" 
          class="text-4xl animate-pulse" 
        />
      </div>

      <!-- Büyük Durum Kodu (Örn: 404 veya 500) -->
      <h1 class="text-7xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-brand-slate-100 to-brand-slate-500/30 select-none">
        {{ error.statusCode || 'Hata' }}
      </h1>
      
      <!-- Hata Mesajı Başlığı -->
      <h2 class="text-xl font-semibold text-brand-slate-100">
        {{ error.statusCode === 404 ? 'Aradığınız sayfa bulunamadı' : 'Bir şeyler ters gitti' }}
      </h2>

      <!-- Detaylı Hata Mesajı -->
      <p class="text-sm text-brand-slate-100/50 leading-relaxed max-w-sm mx-auto">
        {{ error.message || 'İstediğiniz sayfaya şu anda erişilemiyor. Lütfen adresi kontrol edin veya ana sayfaya dönün.' }}
      </p>

      <!-- Aksiyon Butonu -->
      <div class="pt-2">
        <button 
          @click="handleClearError"
          class="inline-flex items-center gap-2 px-6 py-3 bg-brand-slate-900 text-brand-slate-100 font-medium rounded-xl text-sm border border-brand-slate-800 hover:border-brand-slate-700 active:scale-[0.98] transition-all duration-200 shadow-xl"
        >
          <Icon name="uil:home" class="text-base" />
          Ana Sayfaya Dön
        </button>
      </div>

    </div>
  </div>
</template>
