export type ColumnDefinition = {
    key: string;
    header: string;
    isImage?: boolean;
};

export type FilterAndPaginateParams<T> = {
    data: T[];
    allColumns: ColumnDefinition[];
    searchParams: {
        filterColumn?: string;
        filterValue?: string;
        sortColumn?: string;
        sortOrder?: 'asc' | 'desc';
        page?: string;
        columns?: string | string[];
        itemsPerPage?: string;
    };
    getValueByKey?: (obj: T, keyPath: string) => unknown;
};

export type FilterAndPaginateResult<T> = {
    columnsToDisplay: ColumnDefinition[];
    currentItems: T[];
    currentPage: number;
    totalPages: number;
    buildBaseUrl: () => string;
    filterColumn: string;
    filterValue: string;
    selectedColumns: string[];
    itemsPerPage: number;
    sortColumn: string;
    sortOrder: 'asc' | 'desc';
};

export function filterAndPaginate<T>({
                                         data,
                                         allColumns,
                                         searchParams,
                                         getValueByKey = defaultGetValueByKey,
                                     }: FilterAndPaginateParams<T>): FilterAndPaginateResult<T> {
    const filterColumn = searchParams.filterColumn || 'all';
    const filterValue = (searchParams.filterValue || '').toLowerCase();
    const sortColumn = searchParams.sortColumn || 'none';
    const sortOrder: 'asc' | 'desc' = searchParams.sortOrder === 'desc' ? 'desc' : 'asc';
    const currentPage = searchParams.page ? Number(searchParams.page) : 1;
    const parsedItemsPerPage = searchParams.itemsPerPage ? Number(searchParams.itemsPerPage) : 5;
    const itemsPerPage = isNaN(parsedItemsPerPage) || parsedItemsPerPage <= 0 ? 5 : parsedItemsPerPage;

    let selectedColumns: string[] = [];
    if (searchParams.columns) {
        if (Array.isArray(searchParams.columns)) {
            selectedColumns = searchParams.columns.filter(Boolean);
        } else {
            selectedColumns = searchParams.columns.split(',').filter(Boolean);
        }
    }

    const columnsToDisplay =
        selectedColumns.length > 0
            ? allColumns.filter((col) => selectedColumns.includes(col.key))
            : allColumns;

    let filteredData = data;
    if (filterValue) {
        if (filterColumn !== 'all') {
            filteredData = filteredData.filter((item) => {
                const value = getValueByKey(item, filterColumn);
                return String(value).toLowerCase().includes(filterValue);
            });
        } else {
            filteredData = filteredData.filter((item) =>
                columnsToDisplay.some((col) => {
                    const value = getValueByKey(item, col.key);
                    return String(value).toLowerCase().includes(filterValue);
                })
            );
        }
    }

    if (sortColumn !== 'none') {
        filteredData.sort((a, b) => {
            const aVal = getValueByKey(a, sortColumn);
            const bVal = getValueByKey(b, sortColumn);
            const aStr = String(aVal).toLowerCase();
            const bStr = String(bVal).toLowerCase();
            if (aStr < bStr) return sortOrder === 'asc' ? -1 : 1;
            if (aStr > bStr) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

    function buildBaseUrl(): string {
        const params = new URLSearchParams();
        if (filterColumn) params.set('filterColumn', filterColumn);
        if (filterValue) params.set('filterValue', filterValue);
        if (sortColumn && sortColumn !== 'none') {
            params.set('sortColumn', sortColumn);
            params.set('sortOrder', sortOrder);
        }
        if (selectedColumns.length > 0) params.set('columns', selectedColumns.join(','));
        params.set('itemsPerPage', String(itemsPerPage));
        return `?${params.toString()}`;
    }

    return {
        columnsToDisplay,
        currentItems,
        currentPage,
        totalPages,
        buildBaseUrl,
        filterColumn,
        filterValue,
        selectedColumns,
        itemsPerPage,
        sortColumn,
        sortOrder,
    };
}

function defaultGetValueByKey<T>(obj: T, keyPath: string): unknown {
    if (!keyPath.includes('.')) {
        return (obj as Record<string, unknown>)[keyPath];
    }
    const parts = keyPath.split('.');
    let value: unknown = obj;
    for (const part of parts) {
        if (typeof value === 'object' && value !== null) {
            value = (value as Record<string, unknown>)[part];
        } else {
            return undefined;
        }
    }
    return value;
}
