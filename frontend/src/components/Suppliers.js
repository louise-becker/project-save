// A big thank you to https://github.com/JoeyAlpha5 for the help with the Card Slider
import React from 'react';
import './Results.css';
import ReactCardSlider from './ReactCardSlider';

function Suppliers() {
  const sliderClick = (slider) => {
    //   alert('you have clicked a slide item');
  };
  // const AnswersSummary = () => {
  //   const answers = useSelector((state) => state.quiz.answers)

  const slides = [
    {
      image:
        'https://image.freepik.com/free-photo/hands-holding-cleaning-tools-solutions_53876-148192.jpg',
      title: 'Cleaning',
      description: '400 SEK/hour',
      clickEvent: sliderClick,
    },
    {
      image:
        'https://image.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1232.jpg',
      title: 'Groceries',
      description: '150 SEK',
      clickEvent: sliderClick,
    },
    {
      image:
        'https://image.freepik.com/free-photo/thoughtful-brunette-woman-dressed-casual-t-shirt-uses-mobile-phone-making-shopping-online-sells-items-clothes-internet-poses-against-white-background-people-clothing-concept_273609-56796.jpg',
      title: 'Sell Something',
      description: 'XX SEK',
      clickEvent: sliderClick,
    },
    {
      image: 'https://picsum.photos/500/400',
      title: 'Digital Detox',
      description: 'XX SEK',
      clickEvent: sliderClick,
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'Ready Meals',
      description: 'XX SEK',
      clickEvent: sliderClick,
    },
    {
      image: 'https://picsum.photos/800/700',
      title: 'Weekly Cooking',
      description: 'XX SEK',
      clickEvent: sliderClick,
    },
    {
      image: 'https://picsum.photos/300/400',
      title: 'Robot Cleaner',
      description: 'XX SEK',
      clickEvent: sliderClick,
    },
  ];
  return <ReactCardSlider slides={slides} />;
}

export default Suppliers;
