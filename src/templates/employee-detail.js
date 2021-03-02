import React from "react"
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
export const query = graphql`
	query($firstName: String, $lastName: String){
		employeesJson(firstName: {eq: $firstName}, lastName: {eq: $lastName}){
			title
		}
	}
`;


export default ({pageContext, data}) => {
	const emp = pageContext;
	return (
		<Layout>
			<Helmet>
				<title>{emp.firstName} {emp.lastName}</title>
			</Helmet>
			<h2>{emp.firstName} {emp.lastName}</h2>
			<h4>{data.employeesJson.title}</h4>
		</Layout>
	)};
	