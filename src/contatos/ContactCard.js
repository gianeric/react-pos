import React from 'react'

export default function ContactCard({ data }) {
    let { name, email } = {...data} 
    return (
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
            <span className="block text-2xl font-semibold">{name}</span>
            <span className="block text-base text-gray-500">{email}</span>
        </div>
    )
}
