interface Pagination<T> {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: T[];
}

export type {Pagination}