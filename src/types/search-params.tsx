export type ResolvedSearchParams = {
    filterColumn?: string;
    filterValue?: string;
    sortColumn?: string;
    sortOrder?: 'asc' | 'desc';
    page?: string;
    columns?: string | string[];
    itemsPerPage?: string;
};

export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function resolveSearchParams(
  searchParams: SearchParams
): Promise<ResolvedSearchParams> {
    const resolved = await searchParams;
    return {
        filterColumn: resolved.filterColumn as string | undefined,
        filterValue: resolved.filterValue as string | undefined,
        sortColumn: resolved.sortColumn as string | undefined,
        sortOrder: resolved.sortOrder as 'asc' | 'desc' | undefined,
        page: resolved.page as string | undefined,
        columns: resolved.columns as string | string[] | undefined,
        itemsPerPage: resolved.itemsPerPage as string | undefined,
    };
}