import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rerousel } from 'rerousel';
import { Item } from './Item';

export const Carousel = ({
  data,
  showControls = true,
  showIndicators = true,
  effect = 'slide',
}) => {
    const ref = useRef(null);

//   const handlePrev = useCallback(() => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   }, [data.length]);

//   const handleNext = useCallback(() => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [data.length]);

//   const handleKeyDown = (event) => {
//     if (event.key === 'ArrowRight') {
//       handleNext();
//     } else if (event.key === 'ArrowLeft') {
//       handlePrev();
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [handleNext]);

  return (
  
    <Rerousel itemRef={ref}>
        {data.map((item) => {
            return <Item key={item.id} img={item.image} text={item.text} customer={item.customer} />
        })}
    </Rerousel>
    
    
    // <div
    //   className={`carousel-wrapper mt-40 ${effect}`}
    //   onKeyDown={handleKeyDown}
    //   tabIndex='0'
    //   aria-live='polite'
    //   aria-roledescription='carousel'
    // >
    //   <div className='carousel-items shadow rounded w-full md:w-4/6 mx-auto'>
    //   {data.map((item, index) => (
    //     <div
    //     key={index}
    //     className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
    //     style={
    //         effect === 'slide'
    //         ? { transform: `translateX(-${activeIndex * 100}%)` }
    //         : {}
    //     }>
    //         <div className="flex flex-col md:flex-row md:items-center">
    //             <Image
    //             src={item.image}
    //             height={300}
    //             width={300}
    //             alt=""
    //             />
    //             <div className="px-20">
    //             <span className="text-red-600 text-3xl">
    //             <i className="bi bi-quote"></i>  
    //             </span>
    //             <p className="text-2xl text-gray-900 tracking-wide mb-10">{item.text}</p>
                
    //             <span className="font-semibold text-xl text-gray-900 capitalize">{item.customer}</span>
    //             </div>
    //         </div>
    //     </div>
    //   ))}
    //   </div>

    //   {showControls && (
    //     <>
    //         <button 
    //         className="carousel-control prev text-3xl md:text-5xl text-red-600"
    //         onClick={handlePrev}
    //         aria-label='Previous slide'>
    //             <span className="bi bi-arrow-left-circle-fill"></span>
    //         </button>
    //         <button 
    //         className="carousel-control next text-3xl md:text-5xl text-red-600"
    //         onClick={handleNext}
    //         aria-label='Previous slide'>
    //             <span className="bi bi-arrow-right-circle-fill"></span>
    //         </button>
    //     </>
    //   )}

    //   {/* {showIndicators && (
    //     <div className='carousel-pagination'>
    //       {images.map((_, index) => (
    //         <button
    //           key={index}
    //           className={`pagination-indicator ${
    //             index === activeIndex ? 'active' : ''
    //           }`}
    //           onClick={() => setActiveIndex(index)}
    //           aria-label={`Go to slide ${index + 1}`}
    //           aria-selected={index === activeIndex}
    //         ></button>
    //       ))}
    //     </div>
    //   )} */}
    // </div>
  );
};

