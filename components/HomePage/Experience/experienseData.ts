import Avatar1 from '../../../public/Avatar1.png';
import Avatar2 from '../../../public/Avatar2.png';
import Avatar3 from '../../../public/Avatar3.png';

export type ExperienseData = {
  name: string,
  profession: string,
  avatar: any,
  review: string,
}

const experienseData: ExperienseData[] = [
  {
    name: 'John Doe',
    profession: 'Accountant',
    avatar: Avatar1,
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
  }, 
  {
    name: 'John Smith',
    profession: 'Journalist, HWO News',
    avatar: Avatar2,
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
  },
  {
    name: 'Tamara Bellis',
    profession: 'Managing Director, JTH',
    avatar: Avatar3,
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
  }
];

export default experienseData;