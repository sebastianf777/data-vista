export type SearchParams = {
    filterColumn?: string;
    filterValue?: string;
    sortColumn?: string;
    sortOrder?: 'asc' | 'desc';
    page?: string;
    columns?: string | string[];
    itemsPerPage?: string;
};