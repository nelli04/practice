import React from 'react';

type BossType = {
    buttonInc: () => void
    buttonReset: () => void
    click: number
}

export const Button = (p: BossType) => {

    return (
        <div>
            <div className='btn'>
                <button className='inc' onClick={p.buttonInc}>inc</button>
                <button className={p.click >= 1 ? 'reset' : 'true_false'} onClick={p.buttonReset}>reset</button>
            </div>
        </div>
    );
};

