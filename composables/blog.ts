export interface BlogDetail {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  mainImage: string;
  readTime: string;
  // Yazı akışındaki zengin elementler
  contentBlocks: Array<
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; level: 2 | 3; text: string }
    | { type: 'quote'; text: string; author?: string }
    | { type: 'list'; items: string[] }
    | { type: 'highlightBox'; title: string; text: string; variant: 'pink' | 'blue' | 'amber' }
    | { type: 'expertTip'; expertName: string; text: string }
  >;
  tags: string[];
}