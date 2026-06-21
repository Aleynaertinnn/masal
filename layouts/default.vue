<template>
  <div class="min-h-screen bg-brand-slate-950 text-white flex flex-col">
    <!-- Sabit Header -->
    <LayoutHeader />

    <!-- Sayfa İçeriklerinin Geleceği Alan (Header yüksekliği kadar padding-top verdik) -->
    <main class="flex-grow pt-20 animate-fade-in">
      <slot />
    </main>

    <!-- Sabit Footer -->
    <LayoutFooter />
  </div>
</template>
