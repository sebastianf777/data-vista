import { getCountries, Country } from '@/services/countries.service';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from "@/components/only-table/only-table";



export default async function CountriesPage({ searchParams }: { searchParams: SearchParams }) {
    const params: ResolvedSearchParams = await resolveSearchParams(searchParams);
    const data: Country[] = await getCountries();

    const allColumns: ColumnDefinition[] = [
        { key: 'name.common', header: 'Common Name' },
        { key: 'name.official', header: 'Official Name' },
        { key: 'nativeNamesSummary', header: 'Native Names' },
        { key: 'translationsNamesSummary', header: 'Translations Names' },
        { key: 'capitalSummary', header: 'Capital' },
        { key: 'region', header: 'Region' },
        { key: 'population', header: 'Population' },
        { key: 'languagesSummary', header: 'Languages' },
        { key: 'flags.svg', header: 'Flag', isImage: true },
    ];

    return (
        <PaginatedTable<Country>
            data={data}
            allColumns={allColumns}
            searchParams={params}
            title={"Countries API"}
            baseUrl={"/countries"}
            TableComponent={OnlyTable}
        />
    );
}
