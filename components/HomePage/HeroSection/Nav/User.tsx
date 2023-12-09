import { IconContext } from 'react-icons';
import { RiAccountCircleLine } from 'react-icons/ri'

const User = () => {
  return (
    <IconContext.Provider value={{color: 'white', size: '40'}}>
      <div style={{cursor : 'pointer'}}>
        <RiAccountCircleLine />
      </div>
    </IconContext.Provider>
  )
};

export default User;