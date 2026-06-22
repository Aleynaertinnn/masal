import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


export const useAnimation = () => {
  // Üst Üste Binme (Scroll Overlay) Animasyonu
  const initHeroOverlay = (
    heroEl: HTMLElement | null,
    storyEl: HTMLElement | null,
  ) => {
    if (!heroEl || !storyEl) return;

    // Temiz bir katmanlama mimarisi kuruyoruz
    gsap.set(heroEl, { zIndex: 1 });
    gsap.set(storyEl, { zIndex: 2, relative: true });

    // ScrollTrigger tetikleyicisi
    ScrollTrigger.create({
      trigger: heroEl,
      start: 'top top', // Hero ekranın en üstüne sıfırlandığında başlasın
      end: 'bottom top', // Hero'nun yüksekliği kadar scroll edilince bitsin
      pin: true, // Hero'yu ekrana çivile/sabit tut
      pinSpacing: false, // Hero sabitlenirken alttaki elementin yukarı tırmanmasına izin ver
      scrub: true, // Hareketi fare tekerleğine (scroll) birebir bağla
    });
  };

  const rotateCarousel = (
    el: HTMLElement | null,
    targetAngle: number,
    duration = 0.8,
  ) => {
    if (!el) return;
    gsap.to(el, {
      rotateY: targetAngle,
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const slideUp = (el: HTMLElement | null, delay = 0) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay },
    );
  };

  return {
    initHeroOverlay,
    rotateCarousel,
    slideUp,
  };
};
