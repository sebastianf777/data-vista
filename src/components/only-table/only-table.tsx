import { get as _get } from 'lodash';

export type ColumnDefinition = {
    key: string;
    header: string;
};

export type GenericTableProps<T> = {
    data: T[];
    columns: ColumnDefinition[];
};

export default function GenericTable<T>({ data, columns }: GenericTableProps<T>) {
    return (
        <div className={"overflow-x-auto"}>
            <table className={"min-w-full border border-gray-200"}>
                <thead className={"bg-secondary"}>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className={"p-2 border"}>
                            {col.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item, rowIndex) => (
                        <tr key={rowIndex} className={"text-center"}>
                            {columns.map((col) => {
                                const value = _get(item, col.key);
                                return (
                                    <td key={col.key} className={"p-2 border"}>
                                        {value !== undefined ? String(value) : '-'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="{p-2 text-center}">
                            No se encontraron datos.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}