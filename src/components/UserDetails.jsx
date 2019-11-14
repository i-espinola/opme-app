import React from 'react'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

// IMAGES
import icoRepo from '../assets/icons/repo.svg'

// Components Childs
import Table from './Table'
import Card from '../components/Card'

const webService = {
	url: 'https://opme-api.herokuapp.com/api/users/',
	details: '/details/'
}

export default class UserDetails extends React.Component
{
	constructor (props)
	{
		super(props)
		this.state = {
			api: webService,
			login: props.location.pathname.replace(/\/|user/g, ''),
			user: {}
		}
	}

	getUserDetails () {
		const request = this.state.api.url + this.state.login + this.state.api.details
		Axios.get(request).then(response =>
		{
			this.setState({
				//   user: response.data
				user: {
					name: response.data.name,
					id: response.data.id,
					avatar_url: response.data.avatar_url,
					login: response.data.login,
					html_url: response.data.html_url,
					created_at: response.data.created_at
				}
			})
		})
	}

	tableRows ()
	{
		const obj = this.state.user
		const keys = Object.keys(obj).length ? [] : [1,2,3,4]
		const values = []

		for (var prop in obj)
		{
			prop !== 'name' && prop !== 'avatar_url'
				? keys.push(prop) && values.push(obj[prop])
				: keys.push() && values.push()
		}


		return keys.map((prop, i) =>
		{
			return (
				<tr key={ i }>
					<td className='fit-col right '>
						<b>{ Object.keys(obj).length ? prop.replace(/_/g, ' ').toUpperCase() : <Skeleton />}</b>
					</td>
					<td className='left'>{ Object.keys(obj).length ? (values[i] ? values[i] : 'N/A') : <Skeleton /> }</td>
				</tr>
			)
		})
	}

	renderTable ()
	{

		const avatar = this.state.user.avatar_url ? <img src={ this.state.user.avatar_url } alt={ this.state.user.name } /> : <Skeleton circle={ true } height={ 150 } width={ 150 } />
		return (
			<table>
				<tbody>
					<tr>
						<td className='fit-col right avatar'>
							{ avatar }
						</td>
						<td className='left user-name'>
							<h1>
								{this.state.user.login ? this.state.user.name : <Skeleton />}
							</h1>
						</td>
					</tr>
					{this.tableRows()}
				</tbody>
			</table>
		)
	}

	cardHeader ()
	{
		return (
			<React.Fragment>
				<Link to='/' className='btn'>
					<i className='fa fa-chevron-left'></i>
				</Link>
				<h2>Perfil details</h2>
				<Link
					to={'/repos/' + this.state.user.login}
					className='btn btn-color'
				>
					<img src={icoRepo} alt=''></img>
				</Link>
			</React.Fragment>
		)
	}

	componentDidMount ()
	{
		this.getUserDetails()
	}

	render () 
	{
		return (
			<React.Fragment>
				<Card header={ this.cardHeader() }>
					<Table>{ this.renderTable() }</Table>
				</Card>
			</React.Fragment>
		)
	}
}

