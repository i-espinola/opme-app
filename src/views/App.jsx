import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

// Styles
import '../assets/scss/Setup.scss'
import 'font-awesome/css/font-awesome.min.css'

// Components Childs
import Header from '../components/Header'
import UsersList from '../components/UsersList'
import UserDetails from '../components/UserDetails'
import UserRepos from '../components/UserRepo'

const webService = {
	url: 'https://opme-api.herokuapp.com/api/users',
}

const hist = createBrowserHistory()

export default class App extends React.Component
{

	constructor (props)
	{
		super(props)
		this.state = {
			api: webService.url,
		}
	}

	cardHeader ()
	{
		return (
			<React.Fragment>
				<h2>Lista de usuários Github</h2>
			</React.Fragment>
		)
	}


	render ()
	{
		return (
			<div className='main'>
				<Header />
				<Router history={hist}>
					<Switch>
						<Route exact path='/users:since' component={UsersList} />
						<Route path='/user/' component={UserDetails} />
						<Route path='/repos/' component={UserRepos} />
						<Redirect from='*' to='/users=2' />
					</Switch>
				</Router>
			</div>
		)
	}
}


