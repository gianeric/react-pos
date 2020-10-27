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
    <div className="w-6/12">
        <ContactForm save={addItem} />
        {cards}
    </div>
    )
}
