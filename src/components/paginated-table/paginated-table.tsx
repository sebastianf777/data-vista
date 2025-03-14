import React from 'react';
import FilterForm from '@/components/filter-form/filter-form'
import Pagination from '@/components/pagination/pagination';
import { filterAndPaginate, ColumnDefinition } from '@/utils/filter-and-paginate';
import { ResolvedSearchParams } from '@/types/search-params';
import OnlyTable from '@/components/only-table/only-table'

type PaginatedTableProps<T> = {
    data: T[];
    allColumns: ColumnDefinition[];
    searchParams: ResolvedSearchParams;
    title: string;
    baseUrl: string;
    TableComponent: React.ComponentType<{ data: T[]; columns: ColumnDefinition[] }>;
}

export async function PaginatedTable<T>({
                                      data,
                                      allColumns,
                                      searchParams,
                                      title,
                                      baseUrl,
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
        <div className={"mt-26 px-11 lg:px-16 pb-10"}>
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

            <OnlyTable data={currentItems} columns={columnsToDisplay} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={`${baseUrl}${buildBaseUrl()}`}
            />
        </div>
    );
}