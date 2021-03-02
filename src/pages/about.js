import React from "react"
import Layout from '../components/layout';
import Helmet from 'react-helmet'


export default () =>
	<Layout>
		<Helmet>
			<title>About</title>
		</Helmet>
		<div>
			<span className='text-danger'>This is about page!</span>
		</div>
	</Layout>
	