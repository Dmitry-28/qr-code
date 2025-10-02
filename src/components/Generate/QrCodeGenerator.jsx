import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants.js'
import style from'./qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={style.container}>
            <input 
                type="text" 
                value={value} 
                placeholder='Введіть текст...'
                onChange={onChangeHandler} 
                className={style.result}
                onKeyDown={(element) => {
                    if (element.key === 'Enter') {
                        onClickHandler();
                    }
                }}
            />
            <button className={style.qr_generator_btn} type="button" onClick={onClickHandler}>
                Згенерувати
            </button>

             {result !== '' && (
                <QRCodeSVG value={result} />
            )}
        </div>
    );
}
 