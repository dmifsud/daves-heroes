import { Pagination } from './pagination';

export interface ApiResponse<T> {
    info: Pagination;
    results: T[]
}