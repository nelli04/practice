import React, {useState} from 'react';
import './App.css';

// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

type Filter = 'all' | 'RUBLS' | 'Dollars'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [fil, setFil] = useState<Filter>('all')
    let filtered = money
    if (fil === 'RUBLS') {
        filtered = money.filter(mFilter => mFilter.banknots === 'RUBLS')
    }
    if (fil === 'Dollars') {
        filtered = money.filter(mFilter => mFilter.banknots === 'Dollars')
    }
    const handler = (nameBut: Filter) => {
        setFil(nameBut)
    }
    return (
        <>
            <ul>
                {filtered.map((m, index) => {
                    return (

                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => handler('all')}>all</button>
                <button onClick={() => handler('RUBLS')}>rubles</button>
                <button onClick={() => handler('Dollars')}>dollars</button>
            </div>
        </>
    );
}

export default App;