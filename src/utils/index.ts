import Papa from 'papaparse';

const transformData = (data: any[]) => {
    let columns = [] as any[],
        dataSource = [] as any[];

    const headers = data[0] as string[];

    headers.forEach(header => {
        columns.push({
            title: header,
            dataIndex: header
        });
    });

    data.forEach((row, rowIndex) => {
        if (rowIndex !== 0) {
            let rowItem = {} as any;
            row.forEach((item: string | number, itemIndex: number) => {
                rowItem[headers[itemIndex]] = item;
            });
            dataSource.push(rowItem);
        }
    });

    return {
        columns,
        dataSource
    };
};

const fetchCsv = (url: string) => {
    return fetch(url).then((response: any) => {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');

        return reader.read().then(function (result: any) {
            return decoder.decode(result.value);
        });
    });
};

export const getCsvData = async (url: string) => {
    let csvData = await fetchCsv(url);

    return new Promise((resolve, reject) => {
        Papa.parse(csvData, {
            complete: (result: any) => {
                resolve(transformData(result.data));
            },
            error: (err: any) => {
                reject(err);
            }
        });
    });
};
