import { get as _get } from 'lodash';
import Image from 'next/image';
import type { ReactNode } from 'react';
import TruncatedText from '@/components/truncated-text/truncated-text';

export type ColumnDefinition = {
    key: string;
    header: string;
    isImage?: boolean;
};

export type OnlyTableProps<T> = {
    data: T[];
    columns: ColumnDefinition[];
};

export default function OnlyTable<T>({ data, columns }: OnlyTableProps<T>) {
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
                                let cellContent: ReactNode;

                                if (col.isImage && typeof value === 'string') {
                                    cellContent = (
                                      <Image
                                        src={value}
                                        alt="flag"
                                        width={30}
                                        height={30}
                                      />

                                    );
                                } else {
                                    cellContent = value !== undefined ? String(value) : '-';
                                }

                                return (
                                  <td key={col.key} className={'p-2 border whitespace-pre-line'}>
                                      {typeof cellContent === 'string' ? (
                                        <TruncatedText text={cellContent} maxLength={30} />
                                      ) : (
                                        cellContent
                                      )}
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