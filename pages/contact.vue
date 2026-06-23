<!-- pages/contact.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  ageGroup: '',
  message: ''
})

const ageGroups = [
  { id: '2-3', label: '2-3 Yaş' },
  { id: '4-5', label: '4-5 Yaş' },
  { id: '6+', label: '6 Yaş +' }
]

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
  }, 1200)
}
</script>

<template>
  <main class="w-full min-h-screen bg-white pb-24 relative overflow-hidden">
    
    <BaseBreadcrumb
      title="Bizimle"
      titleHighlight="İletişime Geçin"
      currentPage="İletişim"
      description="Merak ettiğiniz her şeyi sormak veya minik masal kahramanımız için ön kayıt oluşturmak için bize ulaşın."
    />

    <div class="max-w-6xl mx-auto px-6 -mt-8 md:-mt-12 relative z-20">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        <!-- SOL ALAN: Çerçeveli ve Minimalist İletişim Bilgileri -->
        <div class="lg:col-span-5 space-y-5 bg-white border border-neutral-100/70 shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-6 md:p-10 rounded-[32px]">
          
          <div class="space-y-3">
            <span class="text-[10px] font-semibold tracking-widest text-brand-pink uppercase bg-brand-pink/5 px-3 py-1 rounded-md">
              Masal Akademi
            </span>
            <h2 class="font-heading text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight leading-tight">
              Kapımız <br />Size Her Zaman Açık
            </h2>
          </div>

          <div class="space-y-8">
            
            <a href="tel:+902881234567" class="space-y-1 block group">
              <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">Bizi Arayın</span>
              <p class="text-sm font-semibold text-brand-dark group-hover:text-brand-pink transition-colors">
                +90 (288) 123 45 67
              </p>
            </a>

            <div class="space-y-1">
              <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">Konumumuz</span>
              <p class="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
                İstiklal Mah. Şair Şinasi Sok. No:12 <br />Lüleburgaz / Kırklareli
              </p>
            </div>

            <a href="mailto:info@masalakademi.com" class="space-y-1 block group">
              <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">E-Posta</span>
              <p class="text-sm font-semibold text-brand-dark group-hover:text-brand-pink transition-colors">
                info@masalakademi.com
              </p>
            </a>

          </div>

          <div class="pt-6 border-t border-neutral-100 text-xs text-neutral-400 font-medium">
            <span>Pazartesi - Cuma / 08:30 - 18:00</span>
          </div>

        </div>

        <!-- SAĞ ALAN: İletişim Formu -->
        <div class="lg:col-span-7 space-y-6 bg-white border border-neutral-100/70 shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-6 md:p-10 rounded-[32px]">
          
          <div 
            v-if="isSuccess" 
            class="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl text-brand-blue text-sm font-semibold"
          >
            Talebiniz masal dünyamıza ulaştı! En kısa sürede geri dönüş sağlayacağız.
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            
            <div class="space-y-1.5">
              <label class="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-wide px-0.5">
                Minik Kahramanın Yaş Grubu
              </label>
              <div class="relative w-full">
                <select
                  v-model="form.ageGroup"
                  required
                  class="w-full text-xs md:text-sm px-5 py-3.5 bg-[#FAF8F5] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand-pink transition-all duration-300 font-medium text-brand-dark appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Yaş grubu seçiniz</option>
                  <option 
                    v-for="group in ageGroups" 
                    :key="group.id" 
                    :value="group.id"
                  >
                    {{ group.label }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-neutral-400">
                  <span class="border-l-2 border-b-2 border-neutral-400 w-1.5 h-1.5 transform -rotate-45 -mt-0.5"></span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label class="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-wide px-0.5">Adınız Soyadınız</label>
                <input 
                  v-model="form.name"
                  type="text" required placeholder="Örn: Elif Yılmaz"
                  class="w-full text-xs md:text-sm px-5 py-3.5 bg-[#FAF8F5] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand-pink transition-all duration-300 font-medium text-brand-dark"
                />
              </div>
              <div class="space-y-1.5">
                <label class="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-wide px-0.5">E-Posta Adresiniz</label>
                <input 
                  v-model="form.email"
                  type="email" required placeholder="elif@example.com"
                  class="w-full text-xs md:text-sm px-5 py-3.5 bg-[#FAF8F5] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand-pink transition-all duration-300 font-medium text-brand-dark"
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-wide px-0.5">Telefon Numaranız</label>
              <input 
                v-model="form.phone"
                type="tel" placeholder="0 (555) 000 00 00"
                class="w-full text-xs md:text-sm px-5 py-3.5 bg-[#FAF8F5] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand-pink transition-all duration-300 font-medium text-brand-dark"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] font-semibold text-brand-dark/50 uppercase tracking-wide px-0.5">Mesajınız</label>
              <textarea 
                v-model="form.message"
                rows="4" required placeholder="Sorularınızı buraya not edebilirsiniz..."
                class="w-full text-xs md:text-sm px-5 py-3.5 bg-[#FAF8F5] border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand-pink transition-all duration-300 font-medium text-brand-dark resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full sm:w-auto px-8 py-3.5 bg-brand-dark text-white rounded-xl text-xs font-semibold hover:bg-brand-pink transition-all duration-300 disabled:opacity-50"
            >
              {{ isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder' }}
            </button>

          </form>
        </div>

      </div>

      <!-- Harita Bölümü -->
      <div class="mt-16 w-full h-[350px] rounded-[28px] overflow-hidden border border-neutral-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] relative z-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47661.16616016147!2d27.320701199999998!3d41.40071375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a010ec08f236ef%3A0x6332da7b738db29d!2sL%C3%BCleburgaz%2C%20K%C4%B1rklareli!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" 
          class="w-full h-full border-0 grayscale opacity-80" 
          allowfullscreen="true" loading="lazy"
        ></iframe>
      </div>

    </div>
  </main>
</template>