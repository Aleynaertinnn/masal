import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
  // SSR (Sunucu tarafı) güvenliği kontrolü
  if (import.meta.server) return;

  // Lenis'i başlatıyoruz
  const lenis = new Lenis({
    duration: 1.2, // Animasyonun saniye cinsinden süresi
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Pürüzsüz yavaşlama (smooth ease)
    orientation: 'vertical', // Dikey kaydırma
    gestureOrientation: 'vertical',
    smoothWheel: true, // Fare tekerleği için pürüzsüzleştirme aktif
    wheelMultiplier: 1, // Kaydırma hızı çarpanı
  });

  // Kritik Adım: Lenis'in kaydırma mekanizmasını GSAP ScrollTrigger'a senkronize ediyoruz
  lenis.on('scroll', ScrollTrigger.update);

  ScrollTrigger.addEventListener('refresh', () => lenis.resize());

  // Lenis'i GSAP ticker'a bağlamak, ayrı RAF döngüsünden daha stabil bir entegrasyon sağlar.
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.refresh();

  // Proje genelinde ihtiyaç duyulursa injection olarak dışarı açıyoruz (isteğe bağlı)
  return {
    provide: {
      lenis,
    },
  };
});
