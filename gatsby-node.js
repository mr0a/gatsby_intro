exports.createPages = async function({actions: {createPage}, graphql}) {
	// const employees = require('./data/employees.json');
	const employees = await graphql(`{
	  allEmployeesJson {
		edges {
		  node {
			firstName
			lastName
		  }
		}
	  }
	}`);
	
	console.log(employees);
	employees.data.allEmployeesJson.edges;
	
	createPage({
		path: '/employees/',
		component: require.resolve('./src/templates/employee-list.js'),
		context: {
			employees: employees.data.allEmployeesJson.edges.map( item => {
				return {
					firstName: item.node.firstName,
					lastName: item.node.lastName
				}
			})
		}
	});
	
	
	
	employees.data.allEmployeesJson.edges.forEach(emp => {
		createPage({
			path: `/employees/${emp.node.firstName.toLowerCase()}-${emp.node.lastName.toLowerCase()}`,
			component: require.resolve('./src/templates/employee-detail.js'),
			context: {
				firstName: emp.node.firstName,
				lastName: emp.node.lastName
			}
		})
	});
}