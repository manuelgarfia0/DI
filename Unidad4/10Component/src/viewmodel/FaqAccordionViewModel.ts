import { FaqItem } from "@/model/entities/FaqItem";

type Listener = () => void;

export class FaqAccordionViewModel {
  private expandedItemId: string | null = null;
  private readonly listeners = new Set<Listener>();

  constructor(public readonly items: FaqItem[]) {}

  get expandedId(): string | null {
    return this.expandedItemId;
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItemId === itemId;
  }

  toggle(itemId: string): string | null {
    this.expandedItemId = this.isExpanded(itemId) ? null : itemId;
    return this.expandedItemId;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}