/* VENDOR */
import React from 'react';

/* APPLICATION */
import { ModalBtn } from './ModalBtn';
import type { ModalFooterProps } from './types';

export const ModalFooter: React.FC<ModalFooterProps> = ({
	clearState,
	setIsActive,
	submitBtnText,
	size,
	onSubmit,
	isDisabled,
}) => {
	const handleClick = () => {
		clearState?.();
		setIsActive(false);
	};

	return (
		<div className="modal__content-footer">
			<ModalBtn
				type="primary"
				size={size || ''}
				onClick={onSubmit}
				isDisabled={isDisabled}
			>
				{submitBtnText}
			</ModalBtn>
			<ModalBtn onClick={handleClick}>Закрыть</ModalBtn>
		</div>
	);
};
