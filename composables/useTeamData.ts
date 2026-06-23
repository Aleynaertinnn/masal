// composables/useTeamData.ts
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  education: string;
  bio: string;
}

export const useTeamData = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Merve Yalçın',
      role: 'Uzman Pedagog & Kurucu',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      education: 'Boğaziçi Üniversitesi - Okul Öncesi Öğretmenliği & Psikoloji',
      bio: 'Masal Çocuk Akademisi’nin kurucusu olan Merve hanım, erken çocukluk döneminde oyun terapisi ve oryantasyon süreçleri üzerine 10 yılı aşkın deneyime sahiptir.'
    },
    {
      id: 2,
      name: 'Zeynep Demir',
      role: 'Okul Öncesi Eğitmeni',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      education: 'Marmara Üniversitesi - Okul Öncesi Öğretmenliği',
      bio: 'Çocukların sanatsal yönlerini keşfetmelerini sağlayan Zeynep öğretmen, akademimizde yaratıcı drama ve el becerileri atölyelerini yönetmektedir.'
    },
    {
      id: 3,
      name: 'Ahmet Yılmaz',
      role: 'Çocuk Psikoloğu',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      education: 'Hacettepe Üniversitesi - Psikoloji (Yüksek Lisans)',
      bio: 'Çocuklarda davranışsal gelişim, akran iletişimi ve kaygı yönetimi konularında uzman olan Ahmet bey, akademide düzenli gözlem ve aile danışmanlığı yapmaktadır.'
    },
    {
      id: 4,
      name: 'Selin Kaya',
      role: 'Montessori Eğitmeni',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg',
      education: 'Uluslararası Montessori Derneği (AMI) Diplomalı',
      bio: 'Çocukların bağımsız bireyler olarak yetişmesini hedefleyen Selin öğretmen, Montessori felsefesine uygun sınıf düzeni ve materyal eğitimlerini üstlenmektedir.'
    },
    {
      id: 5,
      name: 'Elif Şahin',
      role: 'Çocuk Beslenmesi Uzmanı',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      education: 'Ankara Üniversitesi - Beslenme ve Diyetetik',
      bio: 'Okulumuzun günlük ve aylık organik menülerini hazırlayan Elif hanım, çocuklara sağlıklı beslenme alışkanlıklarını eğlenceli sunumlarla kazandırmaktadır.'
    },
    {
      id: 6,
      name: 'Caner Öztürk',
      role: 'Müzik ve Ritim Eğitmeni',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      education: 'Mimar Sinan Güzel Sanatlar Üniversitesi - Konservatuvar',
      bio: 'Orff Schulwerk yaklaşımıyla çocuklara ritim, kulak eğitimi ve temel enstrüman sevgisi aşılayan Caner öğretmen, çocukların motor becerilerini müzikle destekler.'
    },
    {
      id: 7,
      name: 'Derya Arslan',
      role: 'İngilizce Koordinatörü',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      education: 'ODTÜ - İngilizce Öğretmenliği',
      bio: 'Yabancı dil eğitimini hayatın doğal akışına entegre eden Derya öğretmen, oyun ve masallarla zenginleştirilmiş doğal edinim teknikleri uygulamaktadır.'
    },
    {
      id: 8,
      name: 'Murat Yıldız',
      role: 'Doğa ve Tarım Eğitmeni',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      education: 'Ege Üniversitesi - Bahçe Bitkileri / Ekoloji Uzmanı',
      bio: 'Masal Bahçesi’ndeki ekolojik tarım, kompost yapımı ve bitki bakım süreçlerini miniklerle birlikte yöneten Murat öğretmen, doğa bilincini aşılamaktadır.'
    }
  ];

  return {
    teamMembers,
  };
};