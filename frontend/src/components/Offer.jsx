// // import React, { useState, useEffect } from 'react';

// // const Offer = () => {
// //     const calculateTimeLeft = ()=>{
// //         const difference = +new Date("2024-08-12T12:15:00") - +new
// //         Date();
// //         let timeLeft = {}
// //         if(difference > 0) {
// //             timeLeft = {
// //                 days: String(Math.floor(difference/(1000*60*60*24))).padStart(2,"0"),
// //                 hours: String(Math.floor((difference/(1000*60*60)) %24)).padStart(2,"0"),
// //                 minutes: String(Math.floor((difference/1000/60) %24)).padStart(2,"0"),
// //                 seconds: String(Math.floor((difference/1000) %60)).padStart(2,"0"),
// //             };
// //         }
// //         else{
// //             timeLeft = {
// //                 days: "00",
// //                 hours: "00",
// //                 minutes: "00",
// //                 seconds: "00",
// //             };
// //         }
// //         return timeLeft;
// //     };
// //     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// //     useEffects(()=>
// //     {
// //         const timer = setTimeout(()=>
// //         {
// //             setTimeLeft(calculateTimeLeft());
// //         }, 1000);

// //         return ()=> clearTimeout(timer);
// //     });
// //   return (
// //     <section className='max-padd-container bd-banner bg-center bg-cover h-[555px] p-8 rounded-xl my-8'>
// //         <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
// //             <h3 className='uppercase medium-20'>Sales Fever</h3>
// //             <h2 className='bold-44 uppercase'>20% off Everything</h2>
// //             <span className='italic font-ace'>Offer ends in</span>
// //             <div className = 'flex gap-x-4 xs:gap-x-7 mt-2'>
// //                 <div className='bg-white p-2 rounded-lg'>
// //                     <span className='font-bold text-4xl'>{timeLeft.days}</span>
// //                     <span className='block'>Days</span>
// //                 </div>
// //             </div>
// //             <div className = 'flex gap-x-7 mt-2'>
// //                 <div className='bg-white p-2 rounded-lg'>
// //                     <span className='font-bold text-4xl'>{timeLeft.hours}</span>
// //                     <span className='block'>Hours</span>
// //                 </div>
// //             </div>
// //             <div className = 'flex gap-x-7 mt-2'>
// //                 <div className='bg-white p-2 rounded-lg'>
// //                     <span className='font-bold text-4xl'>{timeLeft.minutes}</span>
// //                     <span className='block'>Minutes</span>
// //                 </div>
// //             </div>
// //             <div className = 'flex gap-x-7 mt-2'>
// //                 <div className='bg-white p-2 rounded-lg'>
// //                     <span className='font-bold text-4xl'>{timeLeft.seconds}</span>
// //                     <span className='block'>Seconds</span>
// //                 </div>
// //             </div>
// //         </div>
// //     </section>
// //   )
// // }

// // export default Offer
// import React, { useState, useEffect } from 'react';

// const Offer = () => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-08-12T12:15:00") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
//         hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
//         minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
//         seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
//       };
//     } else {
//       timeLeft = {
//         days: "00",
//         hours: "00",
//         minutes: "00",
//         seconds: "00",
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className='max-padd-container bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl my-8'>
//       <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
//         <h3 className='uppercase medium-20'>Sales Fever</h3>
//         <h2 className='bold-44 uppercase'>20% off Everything</h2>
//         <span className='italic font-ace'>Offer ends in</span>
//         <div className='flex gap-x-4 xs:gap-x-7 mt-4'>
//           <div className='bg-white p-2 rounded-lg text-center'>
//             <span className='font-bold text-4xl'>{timeLeft.days}</span>
//             <span className='block text-sm'>Days</span>
//           </div>
//           <div className='bg-white p-2 rounded-lg text-center'>
//             <span className='font-bold text-4xl'>{timeLeft.hours}</span>
//             <span className='block text-sm'>Hours</span>
//           </div>
//           <div className='bg-white p-2 rounded-lg text-center'>
//             <span className='font-bold text-4xl'>{timeLeft.minutes}</span>
//             <span className='block text-sm'>Minutes</span>
//           </div>
//           <div className='bg-white p-2 rounded-lg text-center'>
//             <span className='font-bold text-4xl'>{timeLeft.seconds}</span>
//             <span className='block text-sm'>Seconds</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Offer;
import React, { useState, useEffect } from 'react';

const Offer = () => {
  // Set your target end date and time here (YYYY-MM-DDTHH:MM:SS format)
  const targetDate = new Date("2025-05-15T18:30:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='max-padd-container bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl my-8'>
      <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
        <h3 className='uppercase medium-20'>Sales Fever</h3>
        <h2 className='bold-44 uppercase'>20% off Everything</h2>
        <span className='italic font-ace'>Offer ends in</span>
        <div className='flex gap-x-4 xs:gap-x-7 mt-4'>
          <div className='bg-white p-2 rounded-lg text-center'>
            <span className='font-bold text-4xl'>{timeLeft.days}</span>
            <span className='block text-sm'>Days</span>
          </div>
          <div className='bg-white p-2 rounded-lg text-center'>
            <span className='font-bold text-4xl'>{timeLeft.hours}</span>
            <span className='block text-sm'>Hours</span>
          </div>
          <div className='bg-white p-2 rounded-lg text-center'>
            <span className='font-bold text-4xl'>{timeLeft.minutes}</span>
            <span className='block text-sm'>Minutes</span>
          </div>
          <div className='bg-white p-2 rounded-lg text-center'>
            <span className='font-bold text-4xl'>{timeLeft.seconds}</span>
            <span className='block text-sm'>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;