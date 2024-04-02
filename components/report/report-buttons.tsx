import React, {
    useRef,
    MutableRefObject,
    forwardRef,
    useCallback,
    ChangeEvent,
} from 'react';
import {read, utils, writeFile} from 'xlsx';

const stringToHtml = (stringHtml: string) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(stringHtml, 'text/html');

    return html;
}

export const ReportButtons = forwardRef((_, ref) => {
    const currentRef = ref as MutableRefObject<HTMLTableElement>;
    const inputRef = useRef<HTMLInputElement>(null);

    const saveToFile = useCallback(() => {
        const wb = utils.table_to_book(currentRef.current);
        writeFile(wb, 'Отчёт «Список элементов справочника».xls');
    }, []);

    const handleClick = () => {
        saveToFile();
        alert('Отчёт сформирован');
    };

    const handleChange = async () => {
        const formInput = inputRef.current;
        const fileInput = formInput.files[0];
        const url = URL.createObjectURL(fileInput);
        const file = await (await fetch(url)).arrayBuffer();
        const workbook = read(file);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const table = utils.sheet_to_html(worksheet);
        const htmlTable = stringToHtml(table);
        
        console.log(utils.sheet_to_json(worksheet));
    };

    return (
        <div>
            <div>
                <form className='drid gap-3'>
                    <label htmlFor='create-report' className='btn btn-primary me-2'>Сформировать</label>
                    <input type='button' onClick={handleClick} hidden id='create-report'/>

                    <label htmlFor='import-data' className='btn btn-primary me-2'>Импортировать данные</label>
                    <input type='file' accept='.xls,.xlsx' hidden id='import-data' onChange={handleChange} ref={inputRef}/>
                </form>
            </div>
        </div>
    );
});
