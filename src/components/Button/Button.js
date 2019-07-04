import React from 'react';
import './Button.css';


const Button = (props) => {
	const { name, handleClick, color, width } = props;
	const styles = {
		backgroundColor: color
	}
	const colorClass = color ? "button" : "button orange";
	const classStyles = width ? `${colorClass} wide` : `${colorClass}`
	
	return(
	<button onClick={() => handleClick(name)} style={styles} className={classStyles}>{name}</button>
	);
};

export default Button;