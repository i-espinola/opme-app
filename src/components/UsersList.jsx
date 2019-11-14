import React from 'react'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

// Components Childs
import Table from './Table'
import Card from '../components/Card'

const webService = {
	url: 'https://opme-api.herokuapp.com/api/users'
}

export default class UsersList extends React.Component
{
	constructor (props)
	{
		super(props)
		this.state = {
			api: webService,
			usersList: [],
			nextPage: 0
		}
	}

	async getUsersList  ()
	{
		// const page = window.location.pathname.replace(/[^\d]+/g, '')
		const since = { params: { since: 46 } }
		// const since = { params: { since: changeList || 0 } }
		await Axios.get(this.state.api.url, since).then(
			response =>
			{
				response.data.users.map(data =>
				{
					const user = {
						id: data.id,
						login: data.login
					}
					return this.setState(prevState => ({
						usersList: [...prevState.usersList, user]
					}))
				})
				this.setState({
					// page: props.location.pathname.replace(/[^\d]+/g, ''),
					nextPage: response.data.nextpage.replace(/[^\d]+/g, '')
				})
			}
		)
	}

	navigation (since)
	{ 
		this.getUsersList(since)
		return ('/users=' + since)
	}

	cardHeader ()
	{
		return (
			<React.Fragment>
				<button className='btn'>
					<i className='fa fa-chevron-left'></i>
				</button>
				<h2>Users list</h2>
				<Link to={ this.navigation(this.state.nextPage) } className='btn'>
					<i className='fa fa-chevron-right'></i>
				</Link>
			</React.Fragment>
		)
	}

	tableRows ()
	{
		const list = Object.keys(this.state.usersList).length ? this.state.usersList : [1, 2, 3, 4, 5]
		return list.map((user, index) =>
		{
			return (
				<tr key={ index }>
					<td className='fit-col'>{ user.id || <Skeleton /> }</td>
					<td className='left'>{ user.login || <Skeleton /> }</td>
					<td className='fit-col'>
						<Link to={ '/user/' + user.login }>
							<button className='btn btn-details'>
								<i className='fas fa-user-tag'></i>
							</button>
						</Link>
					</td>
				</tr>
			)
		})
	}

	renderTable ()
	{
		return (
			<table>
				<thead>
					<tr>
						<th className='fit-col'>ID</th>
						<th className='left'>Login</th>
						<th className='fit-col'>Perfil</th>
					</tr>
				</thead>
				<tbody>{ this.tableRows() }</tbody>
			</table>
		)
	}

	componentDidMount ()
	{
		this.getUsersList()
	}

	render ()
	{
		return (
			<Card header={ this.cardHeader() }>
				<Table>
					{ this.renderTable() }
				</Table>
			</Card>
		)
	}
}
