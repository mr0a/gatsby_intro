import React from "react"
import Helmet from 'react-helmet'
import Layout from '../components/layout';


export default () => 
	<Layout>
		<Helmet>
			<title>Index</title>
		</Helmet>
		<span className='text-danger'>Hello World!</span>
	</Layout>
