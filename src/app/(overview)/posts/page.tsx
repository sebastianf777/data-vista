import { getPosts, Post } from '@/services/post.service';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';


export default async function PostsPage({ searchParams }: { searchParams: SearchParams}) {
    const params: ResolvedSearchParams = await resolveSearchParams(searchParams);

    const data: Post[] = await getPosts();

    const allColumns: ColumnDefinition[] = [
        { key: 'id', header: 'ID' },
        { key: 'title', header: 'Title' },
        { key: 'body', header: 'Body' },
        { key: 'userId', header: 'User ID' },
    ];

    return (
        <PaginatedTable<Post>
            data={data}
            allColumns={allColumns}
            searchParams={params}
            title={"Posts"}
            baseUrl={"/posts"}
            TableComponent={OnlyTable}
        />
    );
}
