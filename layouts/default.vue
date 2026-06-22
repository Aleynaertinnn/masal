<template>
  <div class="min-h-screen bg-brand-slate-950 text-white flex flex-col">
    <HomeTopAnnouncementBar />
    <LayoutHeader />

    <main
      class="flex-grow -mt-[88px] animate-fade-in relative z-20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] "
    >
      <slot />
    </main>

    <QuickContact phone="+902881234567" whatsapp="902881234567" />

    <div class="sticky bottom-0 left-0 w-full z-10">
      <LayoutFooter />
    </div>
  </div>
</template>
