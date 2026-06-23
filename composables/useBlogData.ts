// composables/useBlogData.ts
export interface BlogPost {
  id: number;
  slug: string; // <-- SEO dostu URL için eklendi
  category: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
}

export const useBlogData = () => {
  const blogCategories = [
    { id: 'all', label: 'Tüm Yazılar' },
    { id: 'pedagogy', label: 'Pedagoji & Çocuk Psikolojisi' },
    { id: 'activities', label: 'Evde Etkinlik Önerileri' },
    { id: 'nutrition', label: 'Çocuk Beslenmesi' },
    { id: 'montessori', label: 'Montessori Eğitimi' },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'cocuklarda-okula-uyum-sureci-ve-oryantasyon',
      category: 'pedagogy',
      tag: 'Sosyal Yaşam',
      title: 'Çocuklarda Okula Uyum Süreci ve Oryantasyon',
      excerpt:
        'Okul öncesi dönemde çocukların yeni bir çevreye alışırken yaşadığı kaygıları azaltmanın ve bu süreci masalsı bir geçişe dönüştürmenin yolları...',
      date: '12 Haziran 2026',
      image:
        'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      author: 'Admin',
      readTime: '4 dk okuma',
    },
    {
      id: 2,
      slug: 'hafta-sonu-icin-5-duyusal-oyun-onerisi',
      category: 'activities',
      tag: 'Sosyal Yaşam',
      title: 'Hafta Sonu İçin 5 Duyusal Oyun Önerisi',
      excerpt:
        'Evdeki malzemelerle çocuğunuzun hem ince motor becerilerini geliştirebileceği hem de hayal gücünü besleyebileceği harika duyusal oyun rehberi.',
      date: '08 Haziran 2026',
      image:
        'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      author: 'Admin',
      readTime: '3 dk okuma',
    },
    {
      id: 3,
      slug: 'okul-oncesi-cocuklarda-istahsizlik-ve-cozumleri',
      category: 'nutrition',
      tag: 'Sosyal Yaşam',
      title: 'Okul Öncesi Çocuklarda İştahsızlık ve Çözümleri',
      excerpt:
        'Çocukların yemek saatlerini bir inatlaşma haline getirmeden, onlara beslenmeyi sevdirecek diyetisyen onaylı ipuçları ve eğlenceli sunum teknikleri.',
      date: '28 Mayıs 2026',
      image:
        'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      author: 'Admin',
      readTime: '5 dk okuma',
    },
    {
      id: 4,
      slug: 'evde-montessori-duzeni-nasil-kurulur',
      category: 'montessori',
      tag: 'Eğitim Modeli',
      title: 'Evde Montessori Düzeni Nasıl Kurulur?',
      excerpt:
        'Çocuğunuzun kendi işini kendi yapabilmesi, özgüven kazanması ve odasını bağımsızca keşfedebilmesi için basit ama etkili dekorasyon adımları.',
      date: '15 Mayıs 2026',
      image:
        'https://images.pexels.com/photos/8612933/pexels-photo-8612933.jpeg',
      author: 'Pedagog Merve',
      readTime: '4 dk okuma',
    },
  ];

  return {
    blogCategories,
    blogPosts,
  };
};
