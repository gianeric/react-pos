import React, { useState } from 'react'

function getId() {
    return (5999 - Math.round(Math.random() * 392))
} 

function validateContact(data) {
    if (data.name === '') {
        alert('Preencha o campo "Nome".')
        return false
    }
    return true
}

export default function ContactForm(props) {
    const [data, setData] = useState({ name:'', email: '' })
    
    const changeField = (field) => {
        const change = (evt) => setData({ ...data, [field]: evt.target.value })
        return change
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (validateContact(data)) {
            props.save({ ...data, id: getId() })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg">Nome</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg"
                    maxLength={35} onChange={changeField('name')} />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">E-mail</label>
                <input type="text" className="p-2 rounded text-gray-600 text-lg " 
                    maxLength={50} onChange={changeField('email')} />
            </div>

            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    )
}
