export type TableData = {
    name: any,
    className: string
};

export type TableProps = {
    tableClassName: string,
    tableHeadClassName: string,
    tableBodyClassName: string,
    tableHeadData: TableData[],
    tableRowData: TableData[],
};

export const TableComponent = ({
    tableClassName,
    tableHeadClassName = "",
    tableBodyClassName = "",
    tableHeadData,
    tableRowData }: TableProps) => {
    return (
        <table className={tableClassName}>
            <thead className={tableHeadClassName}>
                <tr>
                    {
                        tableHeadData.map((data: TableData, i: number) => {
                            return (<th key={i} className={data.className}>{data.name}</th>)
                        })
                    }
                </tr>
            </thead>
            <tbody className={tableBodyClassName}>
                <tr>
                    {
                        tableRowData.map((data: TableData, i: number) => {
                            return (<td key={i} className={data.className}>{data.name}</td>)
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
};