import React from 'react'
import { Table } from 'reactstrap'

class List extends React.Component {
	constructor(props){
    super(props)
    this.state = {
			buyItems: ['milk', 'bread', 'fish'],
			message: ''
    }
	}

	addItem(event){
		event.preventDefault()
		const {buyItems} = this.state
		const newItem = this.newItem.value

		const isOnTheList = buyItems.includes(newItem)

		if(isOnTheList){
			this.setState({
				message: 'This item is already on the list!'
			})
		}else{
			newItem !== '' && this.setState({
				buyItems: [...this.state.buyItems, newItem],
				message: ''
			})
		}
		this.myFormRef.reset()
	}

	removeItem(item){
		const newBuyItems = this.state.buyItems.filter(buyItem => buyItem !== item)

		this.setState({
			buyItems: [...newBuyItems]
		})

		if(newBuyItems.length === 0){
			this.setState({
				message: 'There are no items on your list!'
			})
		}
	}

	clearList(buyItems){
		this.setState({
			buyItems: [],
			message: 'There are no items on your list!'
		})
	}
	
	render(){
		const {buyItems, message} = this.state
		const styles = {
			display: 'flex',
			justifyContent: 'center',
			marginBottom: '2.25rem'
		}
		
		return (
			<div className="container col-xs-12 col-md-4">
				<header>
					<form ref={input => this.myFormRef = input}className="form-inline" style={styles} onSubmit={event => this.addItem(event)}>
						<div className="form-group">
							<label className="sr-only" htmlFor="newItemInput">Add New Item</label>
							<input ref={input => this.newItem = input} type="text" placeholder="Bread" className="form-control" id="newItemInput" />
						</div>
						<button type="submit" className="btn btn-primary">Add</button>
					</form>
				</header>
				<div className="content">
					{
						(message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
					}
					{
						buyItems.length > 0 &&
						<table className="table">
						<caption className="caption-style">Shopping List : Rick Brown</caption>
							<thead>
								<tr>
									<th>#</th>
									<th>Item</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody>
								{
									buyItems.map((item) => {
										return (
											<tr key={item}>
												<th scope="row">1</th>
												<td >{item}</td>
												<td>
													<button onClick={event => this.removeItem(item)} type="button" className="btn btn-default btn-sm">Remove</button>
												</td>
											</tr>
										)
									})
								}
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="2">&nbsp;</td>
									<td className="text-right">
										<button onClick={event => this.clearList(buyItems)} className="btn btn-primary btn-sm" type="button">Clear List</button>
									</td>
								</tr>
							</tfoot>
						</table>
					}
				</div>
			</div>
		)
	}
}

export default List