import React  from "react";

function Overview(props) {
	const renderTask = (task, key) => {
		const editMode = false;
		const editBtnLabel = (!editMode) ? 'Edit' : 'Done';
		const editTask = (!editMode) ? '' : ' edit-task';
		return (
			<li key={key} id={`task-${key}`}> 
				<button onClick={() => props.deleteTask(key) } >X</button>
				<span>{ ' ' + task.time +  ': '}</span>
				<span className={ 'task-text' + editTask} >
					{ task.text + ' '}</span>		
				<button 
					className={ 'btn-edit' + editTask }
					onClick = { () => props.openEditMode(key) }
				>
					{ editBtnLabel }</button>
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