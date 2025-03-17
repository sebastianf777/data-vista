import { getCoins, RootObject } from '@/services/gecko.service';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Coingecko API',
};


export default async function CoinGeckoPage({ searchParams }: { searchParams: SearchParams}) {
    const params: ResolvedSearchParams = await resolveSearchParams(searchParams);
    const data: RootObject[] = await getCoins();

    const allColumns: ColumnDefinition[] = [
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Name' },
        { key: 'symbol', header: 'Symbol' },
        { key: 'current_price', header: 'Price' },
        { key: 'market_cap', header: 'Market Cap' },
        { key: 'price_change_percentage_24h', header: '24h Change (%)' },
    ];

    return (
        <PaginatedTable<RootObject>
            data={data}
            allColumns={allColumns}
            searchParams={params}
            title={'CoinGecko API'}
            baseUrl={'/coingecko'}
            TableComponent={OnlyTable}
        />
    );
}