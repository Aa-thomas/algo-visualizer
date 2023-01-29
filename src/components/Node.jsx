export default function Node({ isOrigin, isTarget }) {
	let nodeClassName;
	if (isTarget) nodeClassName = 'node-target';
	else if (isOrigin) nodeClassName = 'node-origin';
	else nodeClassName = '';

	return <div className={`node ${nodeClassName}`}></div>;
}
