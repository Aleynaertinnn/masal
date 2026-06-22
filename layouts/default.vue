<template>
  <div class="min-h-screen bg-brand-slate-950 text-white flex flex-col">
    <!-- Sabit Header -->
    <LayoutHeader />

    <!-- Sayfa İçeriklerinin Geleceği Alan  -->
    <main class="flex-grow -mt-[88px] animate-fade-in">
      <slot />
    </main>

    <QuickContact phone="+902881234567" whatsapp="902881234567" />

    <!-- Sabit Footer -->
    <LayoutFooter />
  </div>
</template>
