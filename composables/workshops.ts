export interface WorkshopItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const workshopsData: WorkshopItem[] = [
  {
    id: 1,
    title: 'Gelişim Odaklı Yaş Grupları',
    description:
      '4-72 ay arası çocuklarımızın yaş ve pedagojik ihtiyaçlarına özel sınıf düzeni ve eğitim modeli.',
    image: 'https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg',
  },
  {
    id: 2,
    title: 'Robotik Kodlama & Stem',
    description:
      'Erken yaşta analitik düşünme becerisi kazandıran eğlenceli algoritmalar ve mekanik tasarımlar.',
    image: 'https://images.pexels.com/photos/8422255/pexels-photo-8422255.jpeg',
  },
  {
    id: 3,
    title: 'Sanat & Hayal Atölyesi',
    description:
      'Renklerin dünyasını keşfettikleri, el becerilerini ve estetik algılarını geliştiren serbest boyama alanı.',
    image: 'https://images.pexels.com/photos/8422175/pexels-photo-8422175.jpeg',
  },
  {
    id: 4,
    title: 'İngilizce Dil Atölyesi',
    description:
      'Oyunlar, şarkılar ve interaktif aktivitelerle desteklenen doğal ve kalıcı yabancı dil edinim süreci.',
    image: 'https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg',
  },
  {
    id: 5,
    title: 'Müzik & Orff Eğitimi',
    description:
      'Ritim duygusu, kulak aşinalığı ve enstrümanları tanıyarak içlerindeki sanatçıyı uyandıran ritim dersleri.',
    image: 'https://images.pexels.com/photos/35573005/pexels-photo-35573005.jpeg',
  },
  {
    id: 6,
    title: 'Doğa & Bilim Keşifleri',
    description:
      'Bahçemizde ekolojik tarım denemeleri ve minik laboratuvarımızda merak uyandıran güvenli deneyler.',
    image: 'https://images.pexels.com/photos/25748879/pexels-photo-25748879.jpeg',
  },
];
