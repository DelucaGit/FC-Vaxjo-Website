/**
 * Nothing is published right now. Add items here when the club has news to show.
 */

export type NewsItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export const featuredStory: NewsItem | null = null;

export const newsNotes: NewsItem[] = [];

export const clubNotices: NewsItem[] = [];
