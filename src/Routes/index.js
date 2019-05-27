import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function index() {
	return (
		<React.Fragment>
			<Route path="/" exact component={Home} />   
			<Route path="/about" exact component={About} />   
			<Route path="/contact" exact component={Contact} />
		</React.Fragment>
	)
}
