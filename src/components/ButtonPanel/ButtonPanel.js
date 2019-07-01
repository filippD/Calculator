import React from 'react';
import Button from '../Button/Button'
import './ButtonPanel.css';

const ButtonPanel = (props) => {
	const buttonNames = [['AC', '+/-', '%', ':'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
	return(
		<div className="button-panel">
			{buttonNames.map((group, i)=> {
				return(
					<div key={i} className="row">
						{group.map((name, j) => {
							const width = name === "0" ? true : false;
							const button = j !== group.length-1 ?
							<Button handleClick={props.handleClick} name={name} color="#e4e4e4" width={width} key={j}/> :
							<Button handleClick={props.handleClick} name={name} width={width} key={j}/>
							return button
						}
						)}
					</div>
					) 
				})
			}
		</div>
	)
};

export default ButtonPanel;