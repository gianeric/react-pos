import React, { useState, useEffect } from 'react'

function asyncValue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(100), 2000)
    })
}

export default function Effect() {
    let [value, setValue] = useState(0)

    useEffect(() => {
        asyncValue()
            .then(value => setValue(value))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="p-2 rounded bg-indigo-100 text-indigo-700">
            <div>{value}</div>
        </div>
    )
}
