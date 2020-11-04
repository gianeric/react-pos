import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'
import { getContacts } from './data'

export default function ContactList() {
    let [list, setList] = useState(getContacts())

    let cards = list.map(contact => (
        <ContactCard key={contact.id} data={contact} />
    ))

    const addItem = (item) => setList([...list, item])

    return (
        <div class="inline-flex bg-gray-700">
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"> 
                <ContactForm save={addItem} />
            </div>
            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">{cards}</div>
        </div>
        
        // <div className="w-6/12">
        //     <ContactForm save={addItem} />
        //     {cards}
        // </div>
    )
}
