import React from 'react';
import './Button.css';

const Button = (props) => {
	const styles = {
		backgroundColor: props.color || '#ffa51fe3',
		width: props.width ? '50%' : '25%'
	}
	return(
	<button onClick={() => props.handleClick(props.name)} style={styles} className="button">{ props.name}</button>
	);
};

export default Button;