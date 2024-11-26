import React from 'react';
import { BkoBtn } from '../components/custom';
import { useNavigate } from 'react-router-dom';
import pageNotFound from '../assets/pageNotafound.png';

const NoData = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/home');
  };
  return (
    <main className=" place-items-center  px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="text-center">
        <img src={pageNotFound} alt="" className="h-[500px]" />

        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <BkoBtn label="Go back home" className="w-fit" onClick={goToHome} />
        </div>
      </div>
    </main>
  );
};

export default NoData;
