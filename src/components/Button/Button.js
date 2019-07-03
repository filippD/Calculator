import React from 'react';
import './Button.css';

const Button = (props) => {
	const styles = {
		backgroundColor: props.color || '#ffa51fe3',
		width: props.width ? '50%' : '25%'
	}
	const { name, handleClick } = props;
	return(
	<button onClick={() => props.handleClick(name)} style={styles} className="button">{name}</button>
	);
};

export default Button;