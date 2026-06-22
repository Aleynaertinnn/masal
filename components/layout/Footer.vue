<script setup>
import { Icon } from '@iconify/vue';

// Footer Dikey Kurumsal Menü Linkleri
const menuLinks = [
  { label: 'Biz Kimiz?', to: '/biz-kimiz' },
  { label: 'Eğitim Modelimiz', to: '/egitim-modelimiz' },
  { label: 'Atölyelerimiz', to: '/atolyeler' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'İletişim', to: '/iletisim' },
];

// Sosyal Medya Linkleri
const socialMedia = [
  {
    icon: 'lucide:instagram',
    url: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:text-brand-pink-light',
  },
  {
    icon: 'lucide:facebook',
    url: 'https://facebook.com',
    label: 'Facebook',
    color: 'hover:text-brand-blue',
  },
  {
    icon: 'lucide:youtube',
    url: 'https://youtube.com',
    label: 'Youtube',
    color: 'hover:text-red-400',
  },
];

// Yasal / Legal Sayfalar
const legalLinks = [
  { label: 'Gizlilik Politikası', to: '/gizlilik-politikasi' },
  { label: 'KVKK Aydınlatma Metni', to: '/kvkk' },
  { label: 'Kullanım Şartları', to: '/kullanim-sartlari' },
];
</script>

<template>
  <footer
    class="w-full bg-brand-dark text-white font-sans relative overflow-hidden pt-16 pb-8 border-t border-white/5"
  >
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5"
      >
        <div class="lg:col-span-4 space-y-5 text-center sm:text-left">
          <NuxtImg
            src="/images/masal-logo.png"
            alt="Masal Anaokulu"
            width="180"
            height="70"
            class="h-12 w-auto object-contain mx-auto sm:mx-0 brightness-0 invert"
            loading="lazy"
            format="webp"
          />
          <p
            class="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm mx-auto sm:mx-0"
          >
            Kendi masallarını yazan çocukların neşeyle, sevgiyle ve güvenle
            büyüdüğü sihirli bir dünya. Çocuğunuzun geleceğine ilk adımı
            birlikte atalım.
          </p>

          <div
            class="flex items-center justify-center sm:justify-start gap-3 pt-2"
          >
            <a
              v-for="social in socialMedia"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 group"
              :class="social.color"
            >
              <Icon
                :icon="social.icon"
                class="w-4 h-4 transition-transform group-hover:scale-110"
              />
            </a>
          </div>
        </div>

        <div class="lg:col-span-3 lg:pl-8 text-center sm:text-left">
          <h4
            class="text-sm font-heading font-extrabold text-neutral-200 tracking-wider uppercase mb-5"
          >
            Kurumsal
          </h4>
          <ul class="space-y-3 text-xs font-medium">
            <li v-for="link in menuLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-neutral-400 hover:text-brand-pink-light transition-colors duration-200 block py-0.5"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-5 text-center sm:text-left space-y-5">
          <h4
            class="text-sm font-heading font-extrabold text-neutral-200 tracking-wider uppercase mb-5"
          >
            Bize Ulaşın
          </h4>

          <div
            class="grid grid-cols-1 gap-4 text-xs font-medium text-neutral-400"
          >
            <a
              href="tel:+902881234567"
              class="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 hover:bg-white/[0.04] transition-all group"
            >
              <span
                class="w-8 h-8 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue"
              >
                <Icon icon="lucide:phone" class="w-4 h-4" />
              </span>
              <div class="flex flex-col items-start text-left">
                <span
                  class="text-[10px] text-neutral-500 uppercase font-bold tracking-wider"
                  >Telefon Numarası</span
                >
                <span
                  class="text-neutral-200 group-hover:text-brand-blue transition-colors"
                  >0288 123 45 67</span
                >
              </div>
            </a>

            <a
              href="mailto:info@masalanaokulu.com"
              class="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-pink/30 hover:bg-white/[0.04] transition-all group"
            >
              <span
                class="w-8 h-8 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink-light"
              >
                <Icon icon="lucide:mail" class="w-4 h-4" />
              </span>
              <div class="flex flex-col items-start text-left">
                <span
                  class="text-[10px] text-neutral-500 uppercase font-bold tracking-wider"
                  >E-Posta Adresi</span
                >
                <span
                  class="text-neutral-200 group-hover:text-brand-pink-light transition-colors"
                  >info@masalanaokulu.com</span
                >
              </div>
            </a>

            <div
              class="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <span
                class="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple"
              >
                <Icon icon="lucide:map-pin" class="w-4 h-4" />
              </span>
              <div class="flex flex-col items-start text-left">
                <span
                  class="text-[10px] text-neutral-500 uppercase font-bold tracking-wider"
                  >Okulumuz Nerede?</span
                >
                <span class="text-neutral-300">Lüleburgaz, Kırklareli</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-neutral-500"
      >
        <div class="text-center md:text-left order-3 md:order-1">
          &copy; 2026 Masal Anaokulu. Tüm Hakları Saklıdır.
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 order-1 md:order-2 text-neutral-500"
        >
          <NuxtLink
            v-for="legal in legalLinks"
            :key="legal.label"
            :to="legal.to"
            class="hover:text-neutral-300 transition-colors"
          >
            {{ legal.label }}
          </NuxtLink>
        </div>

        <div
          class="flex items-center justify-center gap-1 group cursor-default order-2 md:order-3"
        >
          <span>Design by</span>
          <span
            class="text-neutral-400 text-xs font-semibold transition-colors group-hover:text-brand-pink-light"
            >Aleyna</span
          >
          <Icon
            icon="uis:heart"
            class="text-brand-pink text-[10px] animate-pulse"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
