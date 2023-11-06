/* VENDOR */
import React from 'react';

/* APPLICATION */
import important from '../../assets/images/important.svg';
import type { ModalInputProps } from './types';

export const ModalInput: React.FC<ModalInputProps> = ({ name, setName, size }) => {
	return (
		<div className={size === 'large' ? 'modalinput-wrapper large' : 'modalinput-wrapper'}>
			<input
				id="modalinput"
				className="modalinput"
				placeholder="Введите имя задачи/категории"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<img src={important} alt="important" className="modalinput-icon" />
			<label className="dropdown-label" htmlFor="modalinput">
				Имя
			</label>
		</div>
	);
};
