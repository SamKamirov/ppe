import React, {
    useRef,
    RefObject,
    FC,
    MutableRefObject,
    forwardRef,
    useCallback,
    ForwardedRef,
    ChangeEvent,
} from 'react';
import {utils, writeFile} from 'xlsx';
import {TableRef} from '../types/utils';

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

    const handleChange = (evt: ChangeEvent) => {
        const formInput = inputRef.current;
    };

    return (
        <div>
            <div>
                <form className='drid gap-3'>
                    <label
                        htmlFor='create-report'
                        className='btn btn-primary me-2'>
                        Сформировать
                    </label>
                    <input
                        type='button'
                        onClick={handleClick}
                        hidden
                        id='create-report'
                    />
                    <label
                        htmlFor='import-data'
                        className='btn btn-primary me-2'>
                        Импортировать данные
                    </label>
                    <input
                        type='file'
                        accept='.xls,.xlsx'
                        hidden
                        id='import-data'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </form>
            </div>
        </div>
    );
});
