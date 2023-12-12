import styles from './Modal.module.scss';
import NewsletterModal from './Modals/NewsletterModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalActions } from '@/slices';
import ItemModal from './Modals/ItemModal';
import { SpecialOfferData } from '../SpecialOffer/data';
import { ReactElement } from 'react';

const getModal = (type: string, info: SpecialOfferData) => {
	interface Mapping {
		[key: string]: ReactElement;
	}

	const mapping: Mapping = {
		newsletter: <NewsletterModal />,
		item: <ItemModal info={info} />
	}

	return mapping[type]
}

const Modal = () => {
	const type = useSelector((state: any) => state.modal.type);
	const info = useSelector((state: any) => state.modal.info);

	const dispatch = useDispatch()

	return (
		<div className={`${styles['modal-container']} ${type && styles.active}`}>
			<div className={styles.modal}>
				{getModal(type, info)}
				<div className={styles.buttons}>
					<button onClick={() => (dispatch(modalActions.closeModal()))}><p>Close</p></button>
				</div>
			</div>
		</div>
	)
}

export { Modal };