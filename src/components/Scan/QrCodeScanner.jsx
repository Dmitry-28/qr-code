import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import style from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants.js'

export const QrCodeScanner = () => {
    const [valueScan, setValueScan] = useState(null);

    const scanHandler = (result) => {
        setValueScan(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    }

    return (
        <div className={style.container}>
            <p>{valueScan}</p>
            <Scanner 
                onScan={scanHandler} 
                components={{finder: false}} 
                sound={false} 
                styles={{
                    container: { width: 400 }
                }}
                scanDelay={2000}
            />
        </div>
    );
};