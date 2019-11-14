import React from 'react'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

// Components Childs
import Table from './Table'
import Card from '../components/Card'

const webService = {
	url: 'https://opme-api.herokuapp.com/api/users/',
	repos: '/repos/'
}

export default class UserRepos extends React.Component
{
	constructor (props)
	{
		super(props)
		this.state = {
			api: webService,
			login: props.location.pathname.replace(/\/|repos/g, ''),
			repos: [],
		}
	}

	getUserRepos ()
	{
		const request = this.state.api.url + this.state.login + this.state.api.repos
		Axios.get(request).then(response =>
		{
			response.data.map((data) =>
			{
				const login = data.full_name.split('/')
				this.setState(prevState => ({
					repos: [...prevState.repos, {
						id: data.id,
						name: data.name,
						html_url: data.html_url
					}],
					login: login[0],
				}))
				return true
			})
		})
	}

	tableRows ()
	{
		const repos = this.state.repos.length ? this.state.repos : [1, 2, 3, 4]
		console.log(this.state.repos)
	}

	renderTable ()
	{
		return (
			<table>
				<tbody>
					{ this.tableRows() }
				</tbody>
			</table>
		)
	}

	cardHeader ()
	{
		return (
			<React.Fragment>
				<Link to={ '/user/' + this.state.login } className='btn'>
					<i className='fa fa-chevron-left'></i>
				</Link>
				<h2>Publics repos by <b>{ this.state.login }</b></h2>
				<Link to='/' className='btn btn-color'>
					<i className='fa fa-list-ol'></i>
				</Link>
			</React.Fragment>
		)
	}

	componentDidMount () 
	{
		this.getUserRepos()
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
