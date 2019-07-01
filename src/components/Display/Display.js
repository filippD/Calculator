import React from 'react';
import './Display.css';

const Display = (props) => {
	return(
		<div className="display">
			<p className="result">{props.calculation}</p>
		</div>
	);
};

export default Display;