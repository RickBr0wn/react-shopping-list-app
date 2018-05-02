import React from 'react'
import { Table } from 'reactstrap'

const styles = {
	display: 'flex',
	justifyContent: 'center'
}

class List extends React.Component {
	constructor(props){
    super(props)
    this.state = {
      buyItems: ['milk', 'bread', 'fish']
    }
	}
	
	render(){
		const {buyItems} = this.state
		return (
			<div style={styles}>
				<Table >
					<thead>
						<tr>
							<th>#</th>
							<th>Item</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							buyItems.map((item, index) => {
								return (
									<tr>
										<th scope="row">1</th>
										<td key={index}>{item}</td>
										<td>Button</td>
									</tr>
								)
							})
						}
						
					</tbody>
				</Table>
			</div>
		)
	}
}

export default List