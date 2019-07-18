import React, {Component} from 'react';

class TodoItems extends Component {

	createTasks(item) {
		return <li key={item.key} className="taskItem">{item.text}</li>
	}

	render() {

		// getting entries
		var todoEntries = this.props.entries;
		
		// iterating through entries
		var listItems = todoEntries.map(this.createTasks);

		return (
			 <ul className="taskList">
				{listItems}
			 </ul>
		);	
	}
}

export default TodoItems;
