import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './CustomSelect.styles';

const CustomSelect = (props) => {
	const [selectedValue, setSelectedValue] = useState(props.selectedValue);
	const [showOptions, setShowOptions] = useState(false);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(props.options);
		setSelectedValue(props.selectedValue);
	}, [props]);

	useEffect(() => {
		// Add Event Listner to handle the click that happens outside
		// the Custom Select Container
		document.addEventListener("mousedown", handleClickOutside);
		return function cleanup() {
			// Remove the event listner on component unmounting
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// This method handles the click that happens outside the
	// select text and list area
	const handleClickOutside = (e) => {
		if (!e.target.classList.contains("custom-select-option") 
			&& !e.target.classList.contains("selected-text")) {
		setShowOptions(false);
		}
	};

	// This method handles the display of option list
	const handleListDisplay = () => {
		if(!props.disabled)
		setShowOptions(!showOptions);
	};

	// This method handles the setting of name in select text area
	// and list display on selection
	const handleOptionClick = (e) => {
		const value = e.target.getAttribute("data-name");
		setSelectedValue(value);
		setShowOptions(false);
		props.onChange(value);
	};

  	return (
		<div className="custom-select-container">
			<div
				className={classnames(
					"selected-text", 
					{["active"]: showOptions}, 
					{["errorTxt"]: props.hasError},
					{["disabled"]: props.disabled}
				)}
				onClick={handleListDisplay}
			>
				{selectedValue}
			</div>
			{showOptions && (
				<ul className="select-options">
					{options.map((option) => {
						return (
							<li
								className={(selectedValue == option) ? "custom-select-option selected" : "custom-select-option"}
								data-name={option}
								key={option}
								onClick={handleOptionClick}
							>
								{option}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default CustomSelect;