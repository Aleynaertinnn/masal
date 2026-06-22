import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useAnimation = () => {
  // Üst Üste Binme (Scroll Overlay) Animasyonu
  const initHeroOverlay = (
    heroEl: HTMLElement | null,
    storyEl: HTMLElement | null,
  ) => {
    if (!heroEl || !storyEl) return;

    gsap.set(heroEl, { zIndex: 1 });
    gsap.set(storyEl, { zIndex: 2, relative: true });

    ScrollTrigger.create({
      trigger: heroEl,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  };

  // 2. Story Giriş Animasyonu
  const initStoryEntrance = (
    triggerEl: HTMLElement | null,
    textElements: HTMLElement[],
    imageEl: HTMLElement | null,
  ) => {
    if (!triggerEl) return;
    if (textElements.length > 0) {
      gsap.fromTo(
        textElements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }
    if (imageEl) {
      gsap.fromTo(
        imageEl,
        { x: 100, opacity: 0, scale: 0.95, rotate: 3 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }
  };

  // 3: İstatistik Kartları Pop-In Animasyonu
  const initStatsEntrance = (
    triggerEl: HTMLElement | null,
    cardElements: HTMLElement[],
  ) => {
    if (!triggerEl || cardElements.length === 0) return;

    gsap.fromTo(
      cardElements,
      { scale: 0.4, opacity: 0, y: 20 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'back.out(1.7)',
        stagger: 0.12,
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  };

  // 4: Küresel Başlık Giriş Animasyonu
  const initHeaderEntrance = (containerEl: HTMLElement | null) => {
    if (!containerEl) return;

    // Kapsayıcı içindeki span, h2 ve p etiketlerini otomatik yakalar
    const children = containerEl.children;

    gsap.fromTo(
      children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12, // Elemanlar arası çok hafif ve asil bir gecikme
        scrollTrigger: {
          trigger: containerEl,
          start: 'top 85%', // Sayfa kaydırılırken başlık ekrana girer girmez başlar
          toggleActions: 'play none none reverse',
        },
      },
    );
  };

  // 5: Servis/Atölye Kartları Giriş Animasyonu
  const initServicesEntrance = (
    triggerEl: HTMLElement | null,
    serviceCards: HTMLElement[],
  ) => {
    if (!triggerEl || serviceCards.length === 0) return;

    gsap.fromTo(
      serviceCards,
      {
        y: 40, // Mesafeyi 60'tan 40'a düşürmek hesaplama yükünü azaltır
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out', // power4 yerine power3 daha az agresiftir
        stagger: 0.12,
        force3D: true, // Tarayıcıya bu elementi Donanım İvmesi (GPU) ile çizmesini emreder
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  };

  // 6: Kağıt Uçakların Scroll Eşliğinde Uçup Gitme Animasyonu
  const initPaperPlanes = (
    triggerEl: HTMLElement | null,
    leftPlane: HTMLElement | null,
    rightPlane: HTMLElement | null,
  ) => {
    if (!triggerEl) return;

    if (leftPlane) {
      gsap.to(leftPlane, {
        x: -120,
        y: 150,
        rotate: -12,
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    if (rightPlane) {
      gsap.to(rightPlane, {
        x: 120,
        y: 150,
        rotate: 180,
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
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
    initStatsEntrance,
    rotateCarousel,
    slideUp,
    initStoryEntrance,
    initHeaderEntrance,
    initServicesEntrance,
    initPaperPlanes,
  };
};
