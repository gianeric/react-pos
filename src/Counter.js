import React, { useState } from 'react'

function _dynClasses(num) {
    let baseClasses = "p-4 bg-gray-100 rounded text-4xl font-bold"
    if (num < 0) {
        return `${baseClasses} text-red-500`
    }
    return baseClasses + " text-gray-700"
}

export default function Counter(props) {
    let [count, setCount] = useState(parseInt(props.count))

    return (
        <div className="p-4">
            <div className={_dynClasses(count)}>{count}</div>
            <button className="px-4 py-2 rounded shadow-lg bg-blue-400 text-base"
                onClick={() => setCount(count + 1)}>Aumentar</button>
            &nbsp;&nbsp;
            <button className="px-4 py-2 rounded shadow-lg bg-blue-400 text-base"
                onClick={() => setCount(count - 1)}>Diminir</button>
        </div>
    )
}
