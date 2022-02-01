// A big thank you to https://github.com/JoeyAlpha5 for the help with the Card Slider
import React from 'react';
import './Results.css';
import ReactCardSlider from './ReactCardSlider';
// import ReactCardSlider from 'react-card-slider-component';

function Results() {
  const sliderClick = (slider) => {
    alert('you have clicked a slide item');
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
  return (
    <div id="body">
      <div id="styled-result-container">
        {' '}
        <h3>Here are your results:</h3>
        <ul>
          <li>You spend: X hours cleaning</li>
          <li>You spend: X hours buying food</li>
          <li>You spend: X hours cooking food</li>
        </ul>
        <h4>Do you want to save your results to your profile?</h4>
        <button>Save</button>
        <button>No let me suffer</button>
        <h5>
          In total you could save: XX hours/week by buying this service. See
          suggestions below
        </h5>
      </div>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default Results;
