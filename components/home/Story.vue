<template>
  <section class="relative z-10 w-full overflow-hidden mt-[-160px]">
    <div class="w-full pointer-events-none select-none z-10">
      <NuxtImg
        src="/images/decor.png"
        alt="Dekoratif Dalga"
        class="w-full h-auto object-contain"
        format="webp"
      />
    </div>
    <div class="bg-brand-pink-light pb-16">
      <div
        class="max-w-6xl mx-auto px-6 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center  z-20"
      >
        <div class="lg:col-span-6 flex flex-col items-start text-left relative">
          
          <BaseDecorButterfly top="-50px" left="-20px" />
          <span class="text-xs font-medium text-brand-dark uppercase mb-3">
            MASAL'IN HİKAYESİ
          </span>

          <h2
            class="font-heading font-extrabold text-3xl lg:text-5xl text-brand-dark leading-[1.2] mb-6"
          >
            Mutlu Çocuk, Umut Dolu Gelecek
          </h2>

          <p
            class="text-[15px] text-brand-dark/80 font-normal leading-relaxed mb-8 max-w-xl"
          >
            2018 yılında Lüleburgaz'da kurulan Özel Masal Anaokulu, MEB
            standartlarında 36-72 ay arası çocuklarımıza kapılarını açmaktadır.
            Kırklareli Valiliği tarafından "Yıldızlı İşletme" ödülüne layık
            görülen kurumumuz; ses, matematik, bilim ve sanat eğitimini kapsayan
            multi-disipliner bir program uygular.
          </p>

          <BaseButton
            text="Sizi Arayalım"
            as="external"
            to="tel:+902881234567"
            variant="dark"
          />
        </div>

        <div
          class="lg:col-span-6 relative flex justify-center lg:justify-end items-center pt-8 lg:pt-0"
        >
          <div class="relative z-10 w-full">
            <NuxtImg
              src="/images/masal-5.png"
              alt="Masal Anaokulu Eğitim Alanı"
              class="w-full h-auto object-cover rounded-sm"
              format="webp"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



