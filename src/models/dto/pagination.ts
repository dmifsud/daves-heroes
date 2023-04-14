export interface Pagination {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
    page: number;
    pageSize: number;
}