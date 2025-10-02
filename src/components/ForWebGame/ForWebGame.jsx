import { useState } from 'react';
import style from "./forWebGame.module.css";

export const ForWebGame = () => {
    return (
        <div>
           <div>
                <section className={style.monster_body}>
                    <img src="/src/components/ForWebGame/monster_body.png" alt="" />
                    <section className={style.monster_eyes}>
                        <img src="/src/components/ForWebGame/monster_eye.png" alt="eye" />
                        <img src="/src/components/ForWebGame/monster_eye.png" alt="eye" />
                    </section>
                </section>
           </div>
        </div> 
    );
};