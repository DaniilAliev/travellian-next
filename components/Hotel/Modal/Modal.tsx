import Link from 'next/link';
import styles from './Modal.module.scss';
import { FC } from 'react';

type ModalProps = {
  setModalState: (state: 'opened' | 'closed') => void;
  modalState: 'opened' | 'closed';
};

const Modal: FC<ModalProps> = ({ setModalState, modalState }) => {
  return (
    <div className={`${styles.modal} ${modalState === 'opened' ? styles.active : ''}`}>
      <p>Looks like you are not logged in.</p>
      <p>Please, <Link href={'/login'}>log in</Link> into your account</p>
      <p>If you dont have one, please, <Link href={'/signup'}>sign up</Link></p>
      <button onClick={() => setModalState('closed')}>Close</button>
    </div>
  )
};

export { Modal };