import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react'
import {cleanup} from "@testing-library/react";


export const Mining = () => {
    const [btc, setBtc] = useState(0)

    const mining = (coin: number) => coin + 1

    useEffect(() => {
        setInterval(() => {
            setBtc(mining(btc))
            console.log(btc)
            cleanup()
        }, 1000)
    }, [btc])

    return (
        <h1>
            🪙 BTC: {btc}
        </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Mining/>);

// 📜 Описание:
// Помогите разработчику намайнить биткоинов.
// Что-то не майнятся 😥.
// Что необходимо написать вместо XXX чтобы биткоины майнились ?
//
// 🖥 Пример ответа: const mining = (coin: number) => coin + 100
