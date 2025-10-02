import { SCAN_DATA } from '../../constants.js'
import { QRCodeSVG } from 'qrcode.react';
import style from './history.module.css';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return(
        <div>
            {data.map((text) => {
                return (
                    <div className={style.container} key={text}>
                        <QRCodeSVG value={text} size={120}/>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
    );
}