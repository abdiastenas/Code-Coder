export class Node<T> {
    public next: Node<T> | null = null;
    private data: T;
  
    get value(): T {
      return this.data;
    }
  
    constructor(data: T) {
      this.data = data;
    }
  }