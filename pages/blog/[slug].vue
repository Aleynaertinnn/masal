<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// Okuma ilerleme yüzdesi (Scroll Progress)
const scrollPercentage = ref(0)
const updateScrollProgress = () => {
  const pixelsScrolled = window.scrollY
  const viewportHeight = window.innerHeight
  const totalHeight = document.documentElement.scrollHeight
  const scrollableDistance = totalHeight - viewportHeight
  
  if (scrollableDistance > 0) {
    scrollPercentage.value = (pixelsScrolled / scrollableDistance) * 100
  }
}

onMounted(() => window.addEventListener('scroll', updateScrollProgress))
onUnmounted(() => window.removeEventListener('scroll', updateScrollProgress))

// Örnek Zengin Blog Verisi (Gerçek projede slug'a göre useBlogData'dan çekilecek)
const post = {
  title: 'Çocuklarda Okula Uyum Süreci ve Oryantasyon Rehberi',
  category: 'Pedagoji & Çocuk Psikolojisi',
  date: '24 Haziran 2026',
  readTime: '5 dk okuma',
  mainImage: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  author: {
    name: 'Pedagog Merve Yalçın',
    role: 'Çocuk Gelişimi Uzmanı',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    bio: 'Masal Çocuk Akademisi’nde aile danışmanlığı ve çocukların oryantasyon süreçlerini yönetmektedir. Erken çocukluk dönemi kaygıları üzerine çalışmaları bulunmaktadır.'
  },
  tags: ['Okula Uyum', 'Pedagoji', 'Ebeveynlik', 'Montessori'],
  
  // Profesyonel Bir Blog İçeriğinde Olması Gereken Tüm Element Akışı:
  contentBlocks: [
    {
      type: 'paragraph',
      text: 'Okul öncesi eğitim kurumlarına adım atmak, hem çocuklar hem de ebeveynler için hayatın en heyecanlı dönüm noktalarından biridir. Bu süreç, çocuğun güvenli aile ortamından çıkıp sosyal bir dünyaya ilk adımıdır.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Oryantasyon Döneminde Ayrılık Kaygısı Normal Midir?'
    },
    {
      type: 'paragraph',
      text: 'İlk günlerde çocuğun ağlaması, ebeveynin eteğini bırakmak istememesi son derece doğaldır. Bilinmezlik her canlıda kaygı uyandırır. Önemli olan bu kaygıyı doğru yönetebilmektir.'
    },
    {
      type: 'quote',
      text: 'Çocuğunuzun okul kapısında ağlaması size duyduğu güvensizliği değil, size olan bağlılığının büyüklüğünü gösterir. Sabırlı ve kararlı olun.',
      author: 'Uzman Pedagog Merve Yalçın'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Ebeveynler İçin Altın Kurallar'
    },
    {
      type: 'list',
      items: [
        'Asla okuldan gizlice kaçmayın, mutlaka pürüzsüz ve kısa bir vedalaşma rutini oluşturun.',
        'Okul hakkında verdiğiniz sözleri tutun (Örn: "Sen ikindi kahvaltını yapınca kapıda olacağım").',
        'Kendi kaygılarınızı çocuğunuza yansıtmamaya özen gösterin; çocuklar hislerinizi aynalar.'
      ]
    },
    {
      type: 'highlightBox',
      variant: 'pink',
      title: '💡 Küçük Bir Tavsiye: Evden Bir Parça',
      text: 'Çocuğunuzun uyku saatinde ya da gün içinde kendini yalnız hissettiğinde sarılabileceği küçük bir peluş oyuncağı veya sizin kokunuzun sindiği küçük bir mendili çantasına koymasına izin verin.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Okul Öncesi Eğitimin Sosyal Gelişime Katkısı'
    },
    {
      type: 'paragraph',
      text: 'Akran iletişiminin başlamasıyla birlikte paylaşma, sıra bekleme ve problem çözme becerileri hızla gelişir. Montessori tabanlı sınıflarımızda çocuklar kendi kararlarını almayı öğrenirler.'
    },
    {
      type: 'expertTip',
      expertName: 'Masal Akademi Eğitmen Notu',
      text: 'Oryantasyon haftasında çocukları evde aşırı yapılandırılmış kurallarla sıkmamak, okul sonrasında onlara kaliteli zaman ayırmak adaptasyonu %40 oranında hızlandırmaktadır.'
    }
  ]
}
</script>

<template>
  <main class="w-full min-h-screen bg-[#FAF8F5]/50 pb-24 relative">
    
    <div 
      class="fixed top-0 left-0 h-1 bg-brand-pink z-50 transition-all duration-100 ease-out"
      :style="{ width: `${scrollPercentage}%` }"
    ></div>

    <header class="w-full pt-32 pb-16 px-6 bg-white border-b border-neutral-100">
      <div class="max-w-4xl mx-auto space-y-6">
        
        <div class="flex items-center gap-3 text-xs font-semibold tracking-wide text-brand-pink uppercase">
          <span>{{ post.category }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
          <span class="text-neutral-500 font-medium normal-case flex items-center gap-1">
            <Icon icon="lucide:clock" class="w-3.5 h-3.5" /> {{ post.readTime }}
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-dark leading-tight tracking-tight">
          {{ post.title }}
        </h1>

        <div class="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div class="flex items-center gap-3">
            <img :src="post.author.avatar" :alt="post.author.name" class="w-10 h-10 rounded-full object-cover ring-2 ring-brand-pink/10" />
            <div>
              <h4 class="text-xs font-bold text-brand-dark">{{ post.author.name }}</h4>
              <p class="text-[10px] text-neutral-400 font-medium">{{ post.author.role }}</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
            <Icon icon="lucide:calendar" class="w-4 h-4 text-brand-blue" />
            <span>{{ post.date }}</span>
          </div>
        </div>

      </div>
    </header>

    <div class="max-w-5xl mx-auto px-6 -mt-8 md:-mt-12 relative z-10">
      <div class="w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-xl shadow-brand-dark/5 bg-neutral-100">
        <NuxtImg :src="post.mainImage" :alt="post.title" class="w-full h-full object-cover" format="webp" />
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
      
      <article class="lg:col-span-8 bg-white p-6 md:p-10 rounded-[32px] border border-neutral-100/80 shadow-sm space-y-6">
        
        <template v-for="(block, index) in post.contentBlocks" :key="index">
          
          <p v-if="block.type === 'paragraph'" class="text-sm md:text-base text-neutral-600 font-medium leading-relaxed font-sans">
            {{ block.text }}
          </p>

          <h2 v-else-if="block.type === 'heading' && block.level === 2" class="text-xl md:text-2xl font-heading font-black text-brand-dark pt-4 tracking-tight border-left-accent">
            <span class="border-l-4 border-brand-pink pl-3 block">{{ block.text }}</span>
          </h2>

          <h3 v-else-if="block.type === 'heading' && block.level === 3" class="text-lg font-heading font-extrabold text-brand-dark pt-2">
            {{ block.text }}
          </h3>

          <blockquote v-else-if="block.type === 'quote'" class="bg-[#FAF7F2] border-l-4 border-brand-blue p-5 rounded-r-2xl my-4 space-y-2">
            <p class="text-sm md:text-base italic font-semibold text-brand-dark leading-relaxed">
              "{{ block.text }}"
            </p>
            <cite v-if="block.author" class="block text-xs font-bold text-neutral-400 not-italic">
              — {{ block.author }}
            </cite>
          </blockquote>

          <ul v-else-if="block.type === 'list'" class="space-y-3 pl-2 my-4">
            <li v-for="(item, i) in block.items" :key="i" class="flex items-start gap-2.5 text-sm md:text-base text-neutral-600 font-medium">
              <Icon icon="lucide:check-circle-2" class="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </li>
          </ul>

          <div v-else-if="block.type === 'highlightBox'" class="p-6 rounded-2xl bg-brand-pink/5 border border-brand-pink/10 space-y-2 my-4">
            <h4 class="text-sm font-bold text-brand-pink">{{ block.title }}</h4>
            <p class="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">{{ block.text }}</p>
          </div>

          <div v-else-if="block.type === 'expertTip'" class="p-5 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-2xl flex gap-4 items-start my-4">
            <Icon icon="lucide:award" class="w-6 h-6 text-brand-blue shrink-0" />
            <div class="space-y-1">
              <h5 class="text-xs font-bold text-brand-blue uppercase tracking-wider">{{ block.expertName }}</h5>
              <p class="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">{{ block.text }}</p>
            </div>
          </div>

        </template>

        <div class="flex flex-wrap gap-2 pt-8 border-t border-neutral-100">
          <span v-for="tag in post.tags" :key="tag" class="text-xs font-semibold px-3.5 py-1.5 bg-neutral-50 text-neutral-500 rounded-full hover:bg-brand-pink/5 hover:text-brand-pink transition-colors cursor-pointer">
            #{{ tag }}
          </span>
        </div>

      </article>

      <aside class="lg:col-span-4 space-y-8">
        
        <div class="bg-white p-6 rounded-[28px] border border-neutral-100/80 shadow-sm text-center space-y-4">
          <img :src="post.author.avatar" :alt="post.author.name" class="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-brand-pink/5" />
          <div class="space-y-1">
            <h3 class="text-base font-heading font-black text-brand-dark">{{ post.author.name }}</h3>
            <p class="text-xs text-brand-pink font-bold">{{ post.author.role }}</p>
          </div>
          <p class="text-xs text-neutral-500 font-medium leading-relaxed px-2">
            {{ post.author.bio }}
          </p>
        </div>

        <div class="bg-white p-5 rounded-[24px] border border-neutral-100/80 shadow-sm space-y-3">
          <h4 class="text-xs font-bold text-brand-dark uppercase tracking-wider text-center">Bu Yazıyı Paylaş</h4>
          <div class="grid grid-cols-3 gap-2">
            <button class="flex items-center justify-center gap-1.5 py-2.5 bg-[#1877F2]/5 hover:bg-[#1877F2]/10 text-[#1877F2] rounded-xl text-xs font-bold transition-colors">
              <Icon icon="lucide:facebook" class="w-4 h-4" /> Facebook
            </button>
            <button class="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#25D366] rounded-xl text-xs font-bold transition-colors">
              <Icon icon="lucide:message-circle" class="w-4 h-4" /> WhatsApp
            </button>
            <button class="flex items-center justify-center gap-1.5 py-2.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 rounded-xl text-xs font-bold transition-colors">
              <Icon icon="lucide:link" class="w-4 h-4" /> Kopyala
            </button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#FAF7F2] to-white p-6 rounded-[28px] border border-brand-pink-light/20 shadow-sm space-y-4 relative overflow-hidden">
          <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-pink/5 rounded-full blur-xl"></div>
          <div class="space-y-1 relative z-10">
            <h4 class="text-sm font-heading font-black text-brand-dark">Rehberleri Kaçırmayın!</h4>
            <p class="text-xs text-neutral-500 font-medium leading-relaxed">Uzman pedagoglarımızın yeni yazılarını ilk siz okuyun.</p>
          </div>
          <div class="space-y-2 relative z-10">
            <input type="email" placeholder="E-posta adresiniz" class="w-full text-xs px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-brand-pink font-medium" />
            <button class="w-full text-xs font-bold py-3 bg-brand-dark text-white rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-brand-dark/10">Abone Ol</button>
          </div>
        </div>

      </aside>

    </div>
  </main>
</template>