import React, { useState, Fragment } from 'react'
import AddUserForm from './contatos/AddUserForm'
import EditUserForm from './contatos/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	const usersData = [
		{ id: 1, name: 'Gian', email: 'gianeric@outlook.com', empresa: 'Newcon', cargo: 'Analista React Native' },
		{ id: 2, name: 'Eric', email: 'eric@outlook.com', empresa: 'Microsoft', cargo: 'Cientista Python' },
		{ id: 2, name: 'Costa', email: 'gian@outlook.com', empresa: 'Google', cargo: 'UI Design' },
	]
	const initialcontatostate = { id: null, name: '', username: '', empresa: '', cargo: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialcontatostate)
	const [ editing, setEditing ] = useState(false)

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email, empresa: user.empresa, cargo: user.cargo })
	}

	return (
		<div className="container">
			<h1>Agenda</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Adicionar</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Listar</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App

