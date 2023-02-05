import { useState } from 'react';

export default function (props) {
	const [visitedClass, setVisitedClass] = useState('');
	let nodeClassName;
	if (props.isTargetNode) nodeClassName = 'node-target';
	else if (props.isSourceNode) nodeClassName = 'node-origin';
	else nodeClassName = '';

	return (
		<div
			id={`node-${props.row}-${props.col}`}
			className={`node ${nodeClassName} ${visitedClass}`}
			onClick={() => setVisitedClass('change')}></div>
	);
}
