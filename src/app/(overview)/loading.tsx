export default function Loading() {
  const columnsCount = 4;
  const rowsCount = 5;
  const columns = Array.from({ length: columnsCount }, (_, i) => i);
  const rows = Array.from({ length: rowsCount }, (_, i) => i);

  return (
    <div className={'mt-28 px-11 lg:px-16 pb-10'}>
      <div className={'w-full max-w-7xl animate-pulse'}>
        <div className={'h-8 bg-gray-300 rounded w-1/5 mb-6'}></div>

        <div className={'h-8 bg-gray-300 rounded w-1/2 mb-6'}></div>

        <div className={'mb-6 space-y-4'}>
          <div className={'h-8 bg-gray-300 rounded w-full'}></div>
          <div className={'h-8 bg-gray-300 rounded w-full'}></div>
        </div>

        <div className={'overflow-x-auto'}>
          <table className={'min-w-full border border-gray-200'}>
            <thead className={'bg-gray-200'}>
            <tr>
              {columns.map((col) => (
                <th key={col} className={'p-2 border'}>
                  <div className={'h-4 bg-gray-400 rounded'}></div>
                </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row) => (
              <tr key={row} className={'text-center'}>
                {columns.map((col) => (
                  <td key={col} className={'p-2 border whitespace-pre-line'}>
                    <div className={'h-7 bg-gray-400 rounded'}></div>
                  </td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
}
