import React  from "react";

function Overview(props) {

	function renderTask(task, key) {
		const editMode = (props.editIndex === key);
		const eTaskText = (!editMode)
			? <span className='task-text'>{ task.text + ' '}</span>
			: <input 
					className='edit-task' 
					value={ props.editText }
					onChange={ (event) => props.updateTaskText(event)}
				></input>
		const eEditBtn = (!editMode)
			? <button 
					className='btn-edit'
					onClick = { () => props.openEditMode(key) }
				>Edit</button>
			: <button 
					className='btn-edit edit-task'
					onClick = { () => props.closeEditMode(key) }
				>Done</button>
		return (
			<li key={key}> 
				<button onClick={ () => props.deleteTask(key) } >X</button>
				<span>{ ' ' + task.time +  ': '}</span>
				{eTaskText}
				{eEditBtn}
			</li>
		)
	}

	return (
		<div>
			<h5>- This is Overview -</h5>
			<ol>
				{ props.tasks.map((t, k) => renderTask(t, k))}
			</ol>
		</div>
	)
}

export default Overview;