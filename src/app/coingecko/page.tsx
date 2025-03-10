import { getCoins, RootObject } from '@/services/gecko.service';
import { SearchParams } from '@/types/search-params';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';

export default async function CoinGeckoPage({ searchParams }: { searchParams: SearchParams }) {
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
            searchParams={searchParams}
            title={'CoinGecko API'}
            baseUrl={'/coingecko'}
            TableComponent={OnlyTable}
        />
    );
}