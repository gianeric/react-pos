import React from 'react'
import './App.css'
import Titulo from './Titulo'
// import Ola from './Ola'
// import Counter from './Counter'
import ContactList from './contatos/ContactList'
// import Effect from './state/Effect'

export default function App() {
    return (
      <div className="App">
        <header className="App-header">
            <Titulo />
            <ContactList />
        </header>
      </div>
    )
}
