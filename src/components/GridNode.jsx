import { useState } from 'react';

export default function (props) {
	const [wallClass, setwallClass] = useState('');
	let nodeClassName;
	if (props.isTargetNode) nodeClassName = 'node-target';
	else if (props.isSourceNode) nodeClassName = 'node-origin';
	else nodeClassName = '';

	return (
		<div
			id={`node-${props.row}-${props.col}`}
			className={`node ${nodeClassName} ${wallClass}`}
			onClick={() => setwallClass('wall')}></div>
	);
}
