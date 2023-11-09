import { IconContext } from 'react-icons';
import styles from './User.module.scss';
import { RiAccountCircleLine } from 'react-icons/ri'

const User = () => {
  return (
    <IconContext.Provider value={{color: 'white', size: '40'}}>
      <div className={styles.icon}>
        <RiAccountCircleLine />
      </div>
    </IconContext.Provider>
  )
};

export default User;