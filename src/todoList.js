import React, {	Component} from 'react';
import TodoItems from './todoItems'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {

		if (this._inputElement.value !== "") {
			
			var newItem = {
				text: this._inputElement.value, // getting new item's value
				key: Date.now(), // creating unique values
			};
			
			// adding new value to state array
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			// flush current value
			this._inputElement.value = "";

		}

		// avoid page refreshing
		e.preventDefault();

	}

	render() {
		return (
			<main className="main">
				<div className="formWrap">
					<header className="header">
						<form className="form" onSubmit={this.addItem}>
							<input className="input" type="text" required placeholder="New task" ref={(a) => this._inputElement = a} />
							<button className="submit" type="submit">⏎</button>
						</form>
					</header>
				</div>
				<div className="listWrap">
					<TodoItems entries={this.state.items} />
				</div>
			</main>
		)
	}
}

export default TodoList;
