import React from 'react'
//import ContactForm from 'contatos/ContactForm'

export default function ContactCard({ data }) {
    let { name, email } = {...data} 
    return (
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
            <span className="block text-2xl font-semibold">{name}</span>
            <span className="block text-base text-gray-500">{email}</span>
            {/* <td>
              <button
                onClick={() => {
                    ContactForm.changeField('email')
                }}
                className="button muted-button"
              >
                Alterar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td> */}
        </div>
    )
}
