<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    id: 1,
    question: 'Kayıt Dönemi Ne Zaman Başlıyor Ve Kontenjan Sınırı Var Mı?',
    answer:
      'Kayıtlarımız her yıl belirli dönemlerde başlar ve sınıflarımızın verimliliğini korumak adına kontenjanlarımız kesinlikle sınırlıdır.',
  },
  {
    id: 2,
    question: 'Okulunuzda Güvenlik Ve Temizlik Önlemleri Nasıl Sağlanıyor?',
    answer:
      'Okulumuz 7/24 kamera sistemiyle izlenmekte olup, çocukların sağlığı için tamamen anti-alerjik ve organik temizlik ürünleri kullanılmaktadır.',
  },
  {
    id: 3,
    question: 'Yemek Listeleri Nasıl Hazırlanıyor Ve Organik Mi?',
    answer:
      'Yemek listelerimiz uzman çocuk diyetisyenleri gözetiminde, tamamen mevsimsel ve taze ürünler seçilerek günlük olarak mutfağımızda pişirilmektedir.',
  },
  {
    id: 4,
    question: 'Lüleburgaz İçi Servis Hizmetiniz Bulunuyor Mu?',
    answer:
      'Evet, Lüleburgaz’ın tüm merkezi noktalarına tecrübeli şoförlerimiz ve yardımcı rehber personellerimiz eşliğinde güvenli servis hizmetimiz mevcuttur.',
  },
]);

// O an açık olan kartın ID'sini tutan state (İlk kart görseldeki gibi açık başlıyor)
const activeId = ref(1);

const toggleFaq = (id) => {
  // Eğer tıklanan kart zaten açıksa kapat, değilse yenisini aç
  activeId.value = activeId.value === id ? null : id;
};
</script>

<template>
  <section class="w-full py-24 px-6 relative overflow-hidden font-sans">
    <NuxtImg
      src="/images/decor-7.png"
      alt="Masal Okul Öncesi Eğitim"
      class="absolute top-0 left-0  object-contain pointer-events-none select-none z-0"
      format="webp"
    />
    <div class="max-w-4xl mx-auto space-y-12 relative z-10">
      <BaseSectionHeader
        badge="SSS"
        title="Aklınıza Takılanlar"
        desc="Okulumuz, kayıt süreçlerimiz ve eğitim düzenimiz hakkında en çok merak edilen soruların yanıtları."
      />

      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          :class="[
            'border border-brand-pink-light/10 rounded-[24px] transition-all duration-500 overflow-hidden',
            activeId === faq.id
              ? 'bg-brand-pink-50/60 shadow-lg shadow-brand-pink/5'
              : 'bg-white border border-gray-100 hover:border-brand-pink-light/20 shadow-sm shadow-gray-50',
          ]"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-6 select-none"
          >
            <span
              class="text-xs md:text-sm font-heading font-black text-brand-dark tracking-tight leading-snug"
            >
              {{ faq.question }}
            </span>

            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-sans transition-all duration-500 text-sm font-medium',
                activeId === faq.id
                  ? 'bg-brand-dark rotate-180 '
                  : 'bg-transparent !text-brand-dark border border-brand-dark',
              ]"
            >
              <span>{{ activeId === faq.id ? '−' : '+' }}</span>
            </div>
          </button>

          <div
            class="transition-all duration-500 ease-in-out"
            :style="{
              maxHeight: activeId === faq.id ? '200px' : '0px',
              opacity: activeId === faq.id ? '1' : '0',
            }"
          >
            <div
              class="px-6 pb-6 pt-0 text-xs md:text-sm font-medium text-brand-dark/50 leading-relaxed max-w-3xl"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
