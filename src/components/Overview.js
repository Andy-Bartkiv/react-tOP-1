import React  from "react";

function Overview(props) {
	const renderTask = (task, key) => {
		return (
			<li key={key}> { task.time + ': ' + task.text } </li>
		)
	}

	return (
		<div>
			<h4>- This is Overview -</h4>
			<ol>
				{ props.tasks.map((t, k) => renderTask(t, k))}
			</ol>
		</div>
	)
}

export default Overview;