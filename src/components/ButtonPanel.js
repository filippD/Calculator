import React from 'react';
import Button from './Button'

const ButtonPanel = () => {
	const buttonNames = [['AC', '+/-', '%', ':'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
	return(
		<div>
			{buttonNames.map((group)=> {
				return(
					<div>
						{group.map((name) => <Button name={name} />)}
					</div>
					) 
				})
			}
		</div>
	)
};

export default ButtonPanel;