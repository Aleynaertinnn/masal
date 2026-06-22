<template>
  <div class="w-full text-brand-dark font-sans relative overflow-hidden">
    <section class="max-w-6xl mx-auto px-6 pt-16 pb-12 relative z-10">
      <div
        class="bg-brand-dark p-6 md:p-10 rounded-[32px] shadow-2xl shadow-brand-dark/20 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group/main"
      >
      <NuxtImg
          src="/images/decor-8.png"
          alt="Masal Okul Öncesi Eğitim"
          class="absolute top-0 right-0  pointer-events-none select-none "
          format="webp"
        />
        <div
          class="space-y-6 max-w-2xl relative z-10 w-full text-center md:text-left"
        >
          <div class="space-y-2">
            <h3
              class="font-heading text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-white to-brand-pink-light bg-clip-text text-transparent leading-tight"
            >
              Masalımıza Ortak Olmak İster misiniz?
            </h3>
            <p
              class="text-xs md:text-sm text-white/70 font-medium max-w-xl leading-relaxed"
            >
              Çocuğunuzun geleceğine ilk sihirli adımı birlikte atalım.
              Kontenjanlarımız ve eğitim modelimiz hakkında merak ettiğiniz her
              şey için bize ulaşın.
            </p>
          </div>

          <div
            class="flex flex-col md:flex-row items-center gap-6 text-xs font-medium pt-2 justify-center md:justify-start text-white/90"
          >
            <a
              href="tel:+902120000000"
              class="flex items-center gap-2.5 group hover:text-brand-blue transition-colors duration-300"
            >
              <Icon
                name="ic:baseline-phone"
                class="text-base text-brand-blue/90 drop-shadow-[0_0_6px_rgba(14,165,233,0.4)]"
              />
              <span class="transition-colors">0212 000 00 00</span>
            </a>
            <a
              href="mailto:info@masalanaokulu.com"
              class="flex items-center gap-2.5 group hover:text-brand-pink transition-colors duration-300"
            >
              <Icon
                name="ic:baseline-email"
                class="text-base text-brand-pink-light drop-shadow-[0_0_6px_rgba(224,72,153,0.4)]"
              />
              <span class="transition-colors">info@masalanaokulu.com</span>
            </a>
            <div class="flex items-center gap-2.5 text-white/80 cursor-default">
              <Icon
                name="ic:baseline-location-on"
                class="text-base text-brand-purple/90 drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]"
              />
              <span class="text-center md:text-left">Başakşehir, İstanbul</span>
            </div>
          </div>
        </div>

        <BaseButton
          text="Whatsapp'tan Hemen Yaz"
          as="nuxt"
          to="/blog"
          variant="white"
        />
      </div>
    </section>
    <footer class="max-w-6xl mx-auto px-6 pb-8 pt-6 relative z-10">
      <div
        class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-brand-pink-light/20 pt-10"
      >
        <!-- Sol Taraf: Logo ve Kısa Cümle  -->
        <div class="md:col-span-5 space-y-4 text-center md:text-left">
          <NuxtImg
            src="/images/masal-logo.png"
            alt="Masal Anaokulu"
            width="180"
            height="70"
            class="h-12 w-auto object-contain mx-auto md:mx-0"
            loading="eager"
            format="webp"
          />
          <p
            class="text-xs text-brand-dark/50 font-medium max-w-xs leading-relaxed mx-auto md:mx-0"
          >
            Kendi masallarını yazan çocukların neşeyle büyüdüğü sihirli dünya.
          </p>
        </div>

        <!-- Orta Taraf: Yatay Menü Linkleri-->
        <div
          class="md:col-span-7 flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 text-xs font-medium"
        >
          <NuxtLink
            v-for="link in [
              'Biz Kimiz?',
              'Eğitim Modelimiz',
              'Sınıflarımız',
              'Galeri',
              'İletişim',
            ]"
            :key="link"
            to="#"
            class="text-brand-dark/70 hover:text-brand-pink transition-colors duration-300"
          >
            {{ link }}
          </NuxtLink>
        </div>
      </div>

      <!-- Alt Telif & İmza Şeridi -->
      <div
        class="pt-8 mt-8 border-t border-brand-pink-light/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-brand-dark/40"
      >
        <div>&copy; 2026 Masal Anaokulu. Tüm Hakları Saklıdır.</div>

        <div class="flex items-center gap-1 group cursor-default">
          <span>Design by</span>
          <span class="text-brand-dark/80 text-xs"> Aleyna </span>
          <Icon
            name="uis:heart"
            class="text-brand-pink text-[10px] animate-pulse"
          />
        </div>
      </div>
    </footer>
  </div>
</template>
