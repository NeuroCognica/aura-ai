
export interface QAItem {
  id: string;
  question: string;
  answer: string; // HTML content for rich text answers
}

export interface FAQCategory {
  id: string; // Used for routing and keys
  title: string;
  shortTitle?: string; // For tighter display in sidebar if needed
  description?: string;
  items: QAItem[];
}