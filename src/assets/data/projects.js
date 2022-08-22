import { v4 as uuidv4 } from 'uuid';
import hotelImg from '../images/hotelImg.png';
import foodImg from '../images/foodImg.jpg';
import tuneUp from '../images/tuneUp.jpg';
import yashImg from '../images/yashImg.jpg';
import TechVish from '../images/TechVishImg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Hotel Marvels',
    desc:
      'A website where you can book a rooms and foods. This is my Academic Project ',
    img: hotelImg,
  },
  {
    id: uuidv4(),
    name: 'Tasty',
    desc:
      'A food website , where you can buy food for you within 30 minutes.(Frontend only)',
    img: foodImg,
  },
  {
    id: uuidv4(),
    name: 'TuneUp',
    desc:
      'An application where you can fresh your mind with music , I made UI of this application',
    img: tuneUp,
  },
  {
    id: uuidv4(),
    name: "Yash's Portfolio",
    desc:
      'A portfolio for Yash . The portfolio is made using HTML , CSS, javaScript, nodejs , expressjs.',
    img: yashImg,
  },
  {
    id: uuidv4(),
    name: 'TechVish',
    desc:
      'I started a development blog. TechVish, where I share inspiration, tutorials, and resources.',
    img: TechVish,
  },
];

export default projects;
