import SearchBar from '@/app/components/search-bar/search-bar';
import { ColumnDefinition } from '@/app/utils/filter-and-paginate';

export type FilterFormProps = {
    allColumns: ColumnDefinition[];
    filterColumn: string;
    filterValue: string;
    selectedColumns: string[];
    itemsPerPage: number;
    sortColumn: string;
    sortOrder: 'asc' | 'desc';
};

export default function FilterForm({
                                       allColumns,
                                       filterColumn,
                                       filterValue,
                                       selectedColumns,
                                       itemsPerPage,
                                       sortColumn,
                                       sortOrder,
                                   }: FilterFormProps) {
    return (
        <form method={"get"} className={"mb-4 flex flex-col gap-4"}>
            <div className={"flex gap-4 items-end"}>
                <div>
                    <label htmlFor={"filterColumn"} className={"block font-semibold mb-1"}>
                        Filter Column:
                    </label>
                    <select
                        id={"filterColumn"}
                        name={"filterColumn"}
                        defaultValue={filterColumn}
                        className={"border border-gray-300 rounded p-2"}
                    >
                        <option value={"all"}>(All)</option>
                        {allColumns.map((col) => (
                            <option key={col.key} value={col.key}>
                                {col.header}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor={"filterValue"} className={"block font-semibold mb-1"}>
                        Filter Value:
                    </label>
                    <SearchBar
                        defaultValue={filterValue}
                        name={"filterValue"}
                        placeholder={"Enter search term..."}
                    />
                </div>
                <div>
                    <label htmlFor={"sortColumn"} className={"block font-semibold mb-1"}>
                        Sort Column:
                    </label>
                    <select
                        id={"sortColumn"}
                        name={"sortColumn"}
                        defaultValue={sortColumn}
                        className={"border border-gray-300 rounded p-2"}
                    >
                        <option value={"none"}>(None)</option>
                        {allColumns.map((col) => (
                            <option key={col.key} value={col.key}>
                                {col.header}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor={"sortOrder"} className={"block font-semibold mb-1"}>
                        Sort Order:
                    </label>
                    <select
                        id={"sortOrder"}
                        name={"sortOrder"}
                        defaultValue={sortOrder}
                        className={"border border-gray-300 rounded p-2"}
                    >
                        <option value={"asc"}>Ascending</option>
                        <option value={"desc"}>Descending</option>
                    </select>
                </div>
            </div>

            <div className={"flex gap-4 items-end"}>
                <div className={"flex flex-col gap-2"}>
                    <span className={"font-semibold"}>Display Columns:</span>
                    <div className={"flex gap-4 flex-wrap"}>
                        {allColumns.map((col) => (
                            <label key={col.key} className={"flex items-center gap-1"}>
                                <input
                                    type={"checkbox"}
                                    name={"columns"}
                                    value={col.key}
                                    defaultChecked={
                                        selectedColumns.length > 0 ? selectedColumns.includes(col.key) : true
                                    }
                                    className={"border border-gray-300 rounded"}
                                />
                                {col.header}
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor={"itemsPerPage"} className={"block font-semibold mb-1"}>
                        Items Per Page:
                    </label>
                    <select
                        id={"itemsPerPage"}
                        name={"itemsPerPage"}
                        defaultValue={String(itemsPerPage)}
                        className={"border border-gray-300 rounded p-2"}
                    >
                        <option value={"5"}>5</option>
                        <option value={"10"}>10</option>
                        <option value={"15"}>15</option>
                        <option value={"20"}>20</option>
                    </select>
                </div>

                <button type={"submit"} className={"p-2 bg-blue-500 text-white rounded"}>
                    Apply Filters
                </button>
            </div>
        </form>
    );
}
