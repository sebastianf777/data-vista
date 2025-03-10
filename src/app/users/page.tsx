import { getUsers, User } from '@/services/user.service';
import { SearchParams } from '@/types/search-params';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from "@/components/only-table/only-table";

type UsersPageProps = { searchParams: SearchParams }

export default async function UsersPage({ searchParams }: UsersPageProps) {


    const data: User[] = await getUsers();

    const allColumns: ColumnDefinition[] = [
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Name' },
        { key: 'username', header: 'Username' },
        { key: 'email', header: 'Email' },
        { key: 'address.street', header: 'Street' },
        { key: 'address.suite', header: 'Suite' },
        { key: 'address.city', header: 'City' },
        { key: 'address.zipcode', header: 'Zipcode' },
        { key: 'address.coords', header: 'Coordinates' },
        { key: 'phone', header: 'Phone' },
        { key: 'website', header: 'Website' },
        { key: 'company.name', header: 'Company Name' },
        { key: 'company.catchPhrase', header: 'Company CatchPhrase' },
        { key: 'company.bs', header: 'Company BS' },
    ];

    return (
        <PaginatedTable<User>
            data={data}
            allColumns={allColumns}
            searchParams={searchParams}
            title={"Users"}
            baseUrl={"/users"}
            TableComponent={OnlyTable}
        />
    );
}
