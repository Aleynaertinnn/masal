<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

const { blogCategories, blogPosts } = useBlogData();

const activeFilter = ref('all');
const isDropdownOpen = ref(false);

const activeFilterLabel = computed(() => {
  return (
    blogCategories.find((c) => c.id === activeFilter.value)?.label || 'Filtrele'
  );
});

const selectFilter = (id) => {
  activeFilter.value = id;
  isDropdownOpen.value = false;
};

const isPostActive = (postCategory) => {
  return activeFilter.value === 'all' || postCategory === activeFilter.value;
};
</script>

<template>
  <main class="w-full min-h-screen bg-white pb-24 relative overflow-hidden">
    <BaseBreadcrumb
      title="Masal'dan"
      titleHighlight="Güncel Notlar"
      currentPage="Blog & Rehber"
      description="Uzman pedagoglarımızın kaleminden çocuk gelişimi, beslenme düzeni ve evde eğlenceli etkinlik rehberleri."
    />

    <div class="max-w-6xl mx-auto px-6 -mt-8 md:-mt-12 relative z-20">
      <div class="mb-12 relative flex justify-start md:justify-center">
        <div class="relative w-full max-w-xs md:hidden z-30">
          <button
            type="button"
            @click="isDropdownOpen = !isDropdownOpen"
            class="w-full flex items-center justify-between text-xs font-bold px-5 py-3.5 bg-white rounded-2xl shadow-md border border-neutral-100/80 text-neutral-700 active:scale-[0.98] transition-all"
          >
            <span class="flex items-center gap-2">
              <Icon icon="lucide:filter" class="w-4 h-4 text-brand-pink" />
              {{ activeFilterLabel }}
            </span>
            <Icon
              icon="lucide:chevron-down"
              class="w-4 h-4 text-neutral-400 transition-transform duration-300"
              :class="{ 'rotate-180': isDropdownOpen }"
            />
          </button>

          <div
            v-if="isDropdownOpen"
            class="absolute left-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 space-y-1 z-40 animate-fade-in-up"
          >
            <button
              v-for="cat in blogCategories"
              :key="cat.id"
              type="button"
              @click="selectFilter(cat.id)"
              class="w-full text-left text-xs font-semibold px-4 py-3 rounded-xl transition-colors"
              :class="
                activeFilter === cat.id
                  ? 'bg-brand-pink/5 text-brand-pink'
                  : 'text-neutral-600 hover:bg-neutral-50'
              "
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div
          class="hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-md p-2 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-neutral-100/50"
        >
          <button
            v-for="cat in blogCategories"
            :key="cat.id"
            type="button"
            @click="activeFilter = cat.id"
            class="text-xs font-bold px-5 py-2.5 rounded-2xl transition-all duration-300 transform active:scale-95"
            :class="
              activeFilter === cat.id
                ? 'bg-brand-pink text-white shadow-md shadow-brand-pink/20'
                : 'bg-transparent text-neutral-600 hover:bg-neutral-50'
            "
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div class="w-full">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="transition-all duration-500 ease-in-out transform origin-center"
            :class="[
              isPostActive(post.category)
                ? 'opacity-100 scale-100 pointer-events-auto visible block'
                : 'opacity-0 scale-95 pointer-events-none invisible hidden',
            ]"
          >
            <BlogCard :post="post" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
