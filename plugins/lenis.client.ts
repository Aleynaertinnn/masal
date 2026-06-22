import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // SSR (Sunucu tarafı) güvenliği kontrolü
  if (import.meta.server) return

  // Lenis'i başlatıyoruz
  const lenis = new Lenis({
    duration: 1.2,           // Animasyonun saniye cinsinden süresi
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Pürüzsüz yavaşlama (smooth ease)
    orientation: 'vertical', // Dikey kaydırma
    gestureOrientation: 'vertical',
    smoothWheel: true,       // Fare tekerleği için pürüzsüzleştirme aktif
    wheelMultiplier: 1,      // Kaydırma hızı çarpanı
  })

  // Kritik Adım: Lenis'in kaydırma mekanizmasını GSAP ScrollTrigger'a senkronize ediyoruz
  lenis.on('scroll', ScrollTrigger.update)

  // GSAP'in kendi dahili kaydırma dinleyicisine Lenis'i entegre ediyoruz
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return arguments.length ? lenis.scrollTo(value!) : lenis.scroll
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
    pinType: document.body.style.transform ? "transform" : "fixed"
  })

  // Her karede (requestAnimationFrame) hem Lenis'i hem GSAP ScrollTrigger'ı güncelliyoruz
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Proje genelinde ihtiyaç duyulursa injection olarak dışarı açıyoruz (isteğe bağlı)
  return {
    provide: {
      lenis
    }
  }
})
