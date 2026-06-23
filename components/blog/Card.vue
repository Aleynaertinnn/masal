<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useBlogData, type BlogPost } from '~/composables/useBlogData';

const props = defineProps<{
  post: BlogPost;
}>();

const { blogCategories } = useBlogData();

const categoryLabel = computed(() => {
  const found = blogCategories.find((c) => c.id === props.post.category);
  return found ? found.label : 'Genel';
});
</script>

<template>
 
  <NuxtLink
    :to="`/blog/${post.slug || post.id}`"
    class="w-full bg-[#FAF7F2]/40 border border-brand-pink-light/10 p-4 rounded-[28px] space-y-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-pink/5 group flex flex-col h-full block"
  >
    <div
      class="w-full aspect-[4/3] rounded-[20px] overflow-hidden relative shadow-inner bg-neutral-100"
    >
      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        format="webp"
        loading="lazy"
      />

      <span
        class="absolute top-4 right-4 z-10 px-3.5 py-1.5 bg-brand-pink/10 backdrop-blur-md text-brand-pink rounded-full text-[10px] font-bold tracking-wide shadow-sm font-sans"
      >
        {{ categoryLabel }}
      </span>
    </div>

    <div
      class="flex items-center gap-5 text-[11px] font-semibold text-brand-dark/50 font-sans px-1"
    >
      <div class="flex items-center gap-1.5">
        <Icon icon="lucide:user" class="text-brand-pink/70 text-xs" />
        <span class="text-brand-dark/80">{{ post.author }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <Icon icon="lucide:calendar" class="text-brand-blue/70 text-xs" />
        <span class="text-brand-dark/80">{{ post.date }}</span>
      </div>
      <div
        v-if="post.readTime"
        class="flex items-center gap-1.5 ml-auto text-neutral-400"
      >
        <Icon icon="lucide:clock" class="text-xs" />
        <span>{{ post.readTime }}</span>
      </div>
    </div>

    <!-- Metin İçerik Alanı -->
    <div class="space-y-2 px-1 font-sans text-brand-dark flex-grow">
      <h3
        class="text-base md:text-lg font-heading font-black leading-snug tracking-tight transition-colors duration-300 group-hover:text-brand-pink overflow-hidden text-ellipsis line-clamp-2"
        style="
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        "
      >
        {{ post.title }}
      </h3>
      <p
        class="text-xs text-brand-dark/60 font-medium leading-relaxed line-clamp-3"
      >
        {{ post.excerpt }}
      </p>
    </div>

    <div class="pt-3 pb-1 px-1 border-t border-brand-pink-light/10 mt-auto">
      <div
        class="inline-flex items-center gap-1 text-xs font-bold text-brand-dark border-b border-brand-dark group-hover:text-brand-pink group-hover:border-brand-pink transition-colors duration-300 pb-0.5"
      >
        <span>Devamını Oku</span>
        <Icon
          icon="lucide:arrow-right"
          class="w-3 h-3 transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </div>
  </NuxtLink>
</template>