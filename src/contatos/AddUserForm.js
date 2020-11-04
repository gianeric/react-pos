import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', empresa: '', cargo: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Nome</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} required/>
			<label>Email</label>
			<input type="email" name="email" value={user.email} onChange={handleInputChange}required />
			<label>Empresa</label>
			<input type="text" name="empresa" value={user.empresa} onChange={handleInputChange} required/>
			<label>Cargo</label>
			<input type="text" name="cargo" value={user.cargo} onChange={handleInputChange} required/>
			<button>Adicionar</button>
		</form>
	)
}

export default AddUserForm
