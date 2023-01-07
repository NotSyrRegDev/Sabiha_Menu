import React from 'react';
import MainDishesSection from '../sections/MainDishesSection';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';


export const Home = () => {
  return (
    <div>
              {/* <SlideMenu /> */}

      

            <MainDishesSection  />

        <SectionTwo  />

        <SectionThree  />

        <SectionFour  />

        <SectionFive  />

        <SectionSix  />
    </div>
  )
}
