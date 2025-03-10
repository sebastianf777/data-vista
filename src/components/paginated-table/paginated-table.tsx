import React from 'react';
import FilterForm from '@/app/components/filter-form/filter-form'
import Pagination from '@/app/components/pagination/pagination';
import { filterAndPaginate, ColumnDefinition } from '@/app/utils/filter-and-paginate';
import { SearchParams } from '@/app/types/search-params';

// TODO | Estudiar que es la T porque si esta te lo van a preguntar
type PaginatedTableProps<T> = {
    data: T[];
    allColumns: ColumnDefinition[];
    searchParams: SearchParams;
    title: string;
    baseUrl: string;
    TableComponent: React.ComponentType<{ data: T[]; columns: ColumnDefinition[] }>;
}

export function PaginatedTable<T>({
                                      data,
                                      allColumns,
                                      searchParams,
                                      title,
                                      baseUrl,
                                      TableComponent,
                                  }: PaginatedTableProps<T>) {
    const {
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
    } = filterAndPaginate({
        data,
        allColumns,
        searchParams,
    });

    return (
        <div className={"container mx-auto mt-20 p-4"}>
            <h1 className={"text-2xl font-bold mb-4"}>{title}</h1>

            <FilterForm
                allColumns={allColumns}
                filterColumn={filterColumn}
                filterValue={filterValue}
                selectedColumns={selectedColumns}
                itemsPerPage={itemsPerPage}
                sortColumn={sortColumn}
                sortOrder={sortOrder}
            />

            <TableComponent data={currentItems} columns={columnsToDisplay} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={`${baseUrl}${buildBaseUrl()}`}
            />
        </div>
    );
}