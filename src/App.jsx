import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosStar } from "react-icons/io";
import { FaRedhat } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

const App = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Adjust this breakpoint as per your requirement
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      };


    return (
        <div className=''>

            {/* //background first heaing   */}

            <div className='py-[30px] items-center justify-center flex gap-10 bg-[#FFF7E2] '>

                <div className='md:hidden text-3xl'>
                <RxHamburgerMenu />
                </div>

                <div className='md:hidden text-center font-semibold text-2xl '>
                    AMRUTAM
                </div>
            </div>
          <div className="    h-auto  w-full  bg-[url('../public/images/ding.png')] bg-cover  text-white md:bg-[url('../public/images/headerbg.png')] md:bg-auto    md:bg-right ">


<div className=" h-full relative bg-[#00000080] md:bg-[url('../public/images/ovarlay2.png')] bg-no-repeat bg-left md:bg-auto z-[100] md:px-[100px] px-[30px]  w-full py-[100px]">

<div className='text-xl md:text-2xl '>
    Namaste, Welcome to Amrutam
</div>
<div className=' md:text-5xl tracking-wide  py-5 text-4xl font-bold   pe-[30px]  '>
    Step into Holistic Healing with <span className='underline'>Ayurveda </span> <div className='md:pt-5'>
    Book Consulation With Certified Experts.
    </div> 
</div>

<div className='captilize text-gray-300 text-xl tracking-wider mt-5'>

Dive into the world of ayurveda and Experience Personalized Health Solutions and <br />Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.

</div>

<div className='pt-10'>
    <button className='bg-green-800 rounded-xl  text-white px-10 py-5 font-semibold shadow-lg '>BOOK AN APPOINTMENT</button>
</div>
</div>
          </div>


          <div className='lg:grid grid-cols-4  bg-[#FFF7E2] text-center  py-5 px-10 '>
<div className='flex text-center gap-4 px-5 items-center border border-s-green-300 justify-center py-5 '>
    <div className=' h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center border border-green-800  '>
<img src="/images/img1.png" className='scale-' alt="" />
    </div>
    <div className='font-semibold text-green-800'>
    Convenient online & 
In-clinic consultations

    </div>
</div>

<div  className='flex px-5 gap-4  items-center border justify-center border-s-green-300 py-5'>
    <div className=' h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center border border-green-800  '>
    <img src="/images/img2.png" className='scale' alt="" />
    </div>
    <div className='font-semibold text-green-800'>
    Safe and Effective Treatment

    </div>
</div>



<div  className='flex gap-4 px-5 items-center border justify-center border-s-green-300 py-5'>
    <div className=' h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center border border-green-800  '>
    <img src="/images/img3.png" className='scale-' alt="" />
    </div>
    <div className='font-semibold text-green-800'>
   Experienced Ayurvedic Practitioners

    </div>
</div>

<div  className='flex gap-4 px-5 items-center border justify-center border-s-green-300 py-5 '>
    <div className=' h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center border border-green-800  '>
    <img src="/images/img4.png" className='' alt="" />
    </div>
    <div className='font-semibold text-green-800'>
   Personalized Treatment Plans & Guidance

    </div>
</div>


          </div>


          <div className='text-center py-[50px] '>
            <div className='text-green-800 text-3xl  md:text-5xl font-bold  '>
                Discover Ayurveda's Magic With Us
            </div>

            <div className='mx-auto pt-10 text-center text-gray-500'>
          

Ayurvedic treatment aims to balance your body and mind, bringing harmony <br /> and vitality. It's like a journey to better health using ancient wisdom, <br /> 
a totally effective approach for a better life. 

            </div>

<div className='lg:hidden py-10' >
    
<div className=' gril flex justify-center   '>
<img src="/images/gril.png" className='' alt="" />
            </div>
            

            <div className='grid grid-cols-2 gap-10   mx-5  '>
<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/heartbeat (1) 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
    Personalized Wellness
</div>
<div className='text-gray-600 text-lg  py-5'>
    treatments made just fir you based on your individual doshas,[body type]
</div>

</div>





<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/ribbon 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
    Focus on prevention
</div>
<div className='text-gray-600 text-lg  py-5'>
Stop problems even before they start.
</div>

</div>





<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/lotus-position 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
   Mind-Body Connection
</div>
<div className='text-gray-600 text-lg  py-5'>
Keep your mind and body in sync for a happy life.
</div>

</div>






<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/protection 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
Holistic Healing
</div>
<div className='text-gray-600 text-lg  py-5'>
Fix the root problem for long-lasting health.
</div>

</div>







<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/ayurveda 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
    Natural Remedies
</div>
<div className='text-gray-600 text-lg  py-5'>
Using herbs and natural therapies for healing.
</div>

</div>





<div className='py-5 border border-black rounded-xl px-5'>
<div className='h-[100px] w-[100px] rounded-full flex mx-auto justify-center items-center bg-[#EDF5FA]'>
   <img src="/images/strong 1.png" className='scale-150' alt="" />
</div>
<div className='font-bold pt-4 text-2xl '>
    Boosting immunity
</div>
<div className='text-gray-600 text-lg  py-5'>
Stay strong and healthy for life, not just for today.
</div>

</div>

            </div>
</div>


{/* imp  */}
<div className='hidden py-[100px] lg:block '>
  

  <div className='grid grid-cols-3'>
<div className='ps-[20px]'>


<div className='flex  xl:ps-[100px] ps-[50px]  pe-[30px] gap-4 items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold pt-4 text-xl'>
Personalized Wellness
</div>
<div>
<div className='text-gray-600   py-2'>
    treatments made just fir you based on your individual doshas, <br />[body type]
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/heartbeat (1) 1.png" className='scale-75' alt="" />
</div>
</div>






<div className='flex xl:ps-10 gap-4   ps-[10px]  pe-[40px] xl:my-5 items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold pt-4 text-xl'>
Focus on prevention
</div>
<div>
<div className='text-gray-600   py-2'>
Stop problems even before they start.
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/ribbon 1.png" className='scale-75' alt="" />
</div>
</div>








<div className='flex gap-4 xl:ps-[100px] ps-[50px] py-[10px]  pe-[30px]  items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold  pt-4 text-xl'>
Mind-Body Connection
</div>
<div>
<div className='text-gray-600   py-2'>
Keep your mind and body in sync for a happy life.
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/lotus-position 1.png" className='scale-75' alt="" />
</div>
</div>





</div>




<div className=' gril  flex justify-center     '>
<img src="/images/gril.png" className=' scale-150' alt="" />
            </div>









            <div>


<div className='flex xl:pe-[200px] ps-[50px] pe-[100px] gap-4 items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold pt-4 text-xl'>
Holistic Healing
</div>
<div>
<div className='text-gray-600   py-2'>
Fix the root problem for long-lasting health.
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/protection 1.png" className='scale-75' alt="" />
</div>
</div>






<div className='flex gap-4 xl:my-5 xl:pe-[140px] ps-[50px] pe-[90px] items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold pt-4 text-xl'>
Natural Remedies
</div>
<div>
<div className='text-gray-600   py-2'>
Using herbs and natural therapies for healing.
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/ayurveda 1.png" className='scale-75' alt="" />
</div>
</div>








<div className='flex gap-4 xl:pe-[200px] ps-[50px] pe-[100px] items-center' >
<div className='text-end w-[300px]'>
<div className='font-semibold pt-4 text-xl'>
Boosting immunity
</div>
<div>
<div className='text-gray-600   py-2'>
Stay strong and healthy for life, not just for today.
</div>
</div>
</div>
<div className='flex justify-center h-[80px] w-[80px] rounded-full bg-[#F5F3FC] '>
<img src="/images/strong 1.png" className='scale-75' alt="" />
</div>
</div>





</div>






  </div>
</div>




          </div>

          <div className='text-center bg-[#FFF7E2] py-10'>
          <div className='text-green-800 text-3xl py-10  md:text-5xl font-bold  '>
                What sets Ayurvedic consultations apart?
            </div>

         

         <div className='lg:grid md:grid-cols-12 mx-[50px] lg:mx-[100px] '>
            <div className='md:col-span-5 my-5  px-[70px] border-t-[6px] rounded-3xl py-10 text-center pt-[40px] border-green-600 bg-white '   >
                <div className='font-bold text-green-800 text-4xl'>
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
                </div>

                <div className='pt-10 text-xl text-green-700 '>
                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                </div>
            </div>


            <div className='col-span-4  my-5 h-auto'>
                <img src="/images/b1 (1).png" alt="" className='h-full w-full ' />
            </div>

            <div className='md:col-span-3 my-5 px-10 border-t-[6px] rounded-3xl text-center py-10 pt-[40px] border-green-600  bg-white'   >
                <div className='font-bold text-green-800 text-4xl'>
                Precise Diagnosis
                </div>

                <div className='pt-10 text-xl text-green-700 py-5'>
                Ayurveda's core rinciples revolev around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                </div>
            </div>


         </div>

         <div className='lg:grid mx-[50px] md:mx-[100px] grid-cols-4'>


<div className=' my-5 px-10 py-10 border-t-[6px] rounded-3xl text-center pt-[40px] border-green-600  bg-white'>
<div className='font-bold text-green-800 text-4xl'>
Zero side-efforts
</div>

<div className='pt-10 text-xl text-green-700 '>
    Ayurvedic treatments are devoid of chemicals,a nd are based completely on natural herbs.
</div>
</div>



<div className='my-5'>
<img src="/images/b1 (2).png" alt="" className='h-full w-full ' />
</div>

<div className='my-5 px-10 py-10 border-t-[6px] rounded-3xl text-center pt-[40px] border-green-600  bg-white'>
<div className='font-bold text-green-800 text-4xl'>
Individual Treatment
</div>

<div className='pt-10 text-xl text-green-700 '>
    All Treatments are personalized based on a person's unique contitution and health concerns.
</div>
</div>


<div className='py-5'>
<img src="/images/b1 (3).png" alt="" className='h-full w-full ' />
</div>
         </div>



          </div>

{/* background 2 */}
          <div className=' header2bg h-auto'>
<div className=' ovarlay2 w-full h-full py-[150px] px-[50px]  '>

<div className='md:text-5xl  text-3xl font-semibold text-white text-center '>
Ready to restore harmony in <br className='hidden lg:block' /> your mind, body and spirit?
</div>

<div className='mx-auto  max-w-[300px] py-[50px] rounded h-auto  overflow-hidden '>
    <button className='px-5 py-3 bg-green-600 shadow-xl rounded-xl text-xl  text-white mx-auto w-full '>Book a consultation</button>
</div>
</div>

          </div>



          <div className='mx-[50px] py-10'>
          <div className='text-green-800 text-3xl py-10  md:text-5xl font-bold text-center  '>
                Our Ayurvedic Approach?

            </div>

            <div className='text-gray-600 text-center pb-5'>
      At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
            </div>

            <div className='hidden  mx-[50px] md:mx-[100px] lg:mx-0  grow shrink-0 py-5 lg:grid grid-cols-4 gap-5  lg:gap-10'>


<div className=' grow shrink-0 px-5 border-t-[6px] h-auto w-full rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     1
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
    Make Appointment
</div>

<div className='text-gray-500 '>
You must make an appointment in advance, to choose the service and date.
</div>
</div>





<div className=' grow shrink-0 px-5 border-t-[6px] rounded-3xl w-full  text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     2
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
    Consultations
</div>

<div className='text-gray-500 '>
The next stage involves a thorough consultation with an Ayurveda practitioner.
</div>
</div>





<div className=' grow shrink-0 px-5 border-t-[6px] w-full rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     3
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
   Treatment Planning
</div>

<div className='text-gray-500 '>
The Ayurvedic practitioner creates a personalized treatment plan for you
</div>
</div>






<div className=' grow shrink-0 px-5 w-full border-t-[6px] rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     4
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
  Maintenance
</div>

<div className='text-gray-500 '>
These visits allow for assessment of progress, adjustments to the treatment.
</div>
</div>
            </div>




<div className='lg:hidden my-10'>
    


<Slider className='lg:hidden' {...settings}>
            <div className=' grow shrink-0 px-5 border-t-[6px] h-auto w-full rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     1
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
    Make Appointment
</div>

<div className='text-gray-500 '>
You must make an appointment in advance, to choose the service and date.
</div>
</div>





<div className=' grow shrink-0 px-5 border-t-[6px] rounded-3xl w-full  text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     2
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
    Consultations
</div>

<div className='text-gray-500 '>
The next stage involves a thorough consultation with an Ayurveda practitioner.
</div>
</div>





<div className=' grow shrink-0 px-5 border-t-[6px] w-full rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     3
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
   Treatment Planning
</div>

<div className='text-gray-500 '>
The Ayurvedic practitioner creates a personalized treatment plan for you
</div>
</div>






<div className=' grow shrink-0 px-5 w-full border-t-[6px] rounded-3xl text-center pb-10 bg-[#FFF7E2] shadow-xl  border-green-600 '>


<div className= ' border border-black  h-[70px] mx-auto my-8 font-bold text-4xl flex items-center justify-center text-white  w-[70px] bg-[#7BA27F] rounded-full '>
     4
</div>

<div className='text-green-800 pb-2 text-2xl font-bold '>
  Maintenance
</div>

<div className='text-gray-500 '>
These visits allow for assessment of progress, adjustments to the treatment.
</div>
</div>
            </Slider>

</div>

           

          </div>

          <div className=' px-[50px] pt-10 pb-[100px] bg-[#FFF7E2]  '>
          <div className='text-green-800 text-3xl py-[50px]  md:text-5xl font-bold text-center'>
                Stories from our valued coustomers!

            </div>

            <div className='hidden mx-[50px] md:mx-[100px] lg:mx-0 grow shrink-0 lg:grid md:grid-cols-3 gap-[50px]  '>


<div className='  w-full h-auto   rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-10 w-full py-2   bg-[#ECE7FF]'>
Consulted for Skin
    </div>


<div className='px-10 py-10 bg-white '>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>






<div className='  w-full h-auto  rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-5 w-full py-2   bg-[#ECFEE7]'>
Consulted for Hair
    </div>


<div className='px-10 py-10 bg-white'>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>







<div className='  w-full h-auto  rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-5 w-full py-2   bg-[#ECFEE7]'>
Consulted for hair
    </div>


<div className='px-10 py-10 bg-white'>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>
            </div>








            <div className='lg:hidden my-10'>
    


<Slider className='lg:hidden' {...settings}>
<div className='  w-full h-auto   rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-10 w-full py-2   bg-[#ECE7FF]'>
Consulted for Skin
    </div>


<div className='px-10 py-10 bg-white '>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>






<div className='  w-full h-auto  rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-5 w-full py-2   bg-[#ECFEE7]'>
Consulted for Hair
    </div>


<div className='px-10 py-10 bg-white'>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>







<div className='  w-full h-auto  rounded-2xl overflow-hidden shadow-2xl grow shrink-0'>
    <div className='h-auto text-lg font-semibold px-5 w-full py-2   bg-[#ECFEE7]'>
Consulted for hair
    </div>


<div className='px-10 py-10 bg-white'>
    
<div className=' flex justify-between '>
<div className='flex gap-3'>
<div className='h-[50px] w-[50px] bg-[#515151] rounded-full'>
</div>

<div >
   
      <span className='text-lg font-semibold'>Sophie Moore</span> <br /> <span className='text-gray-500 font-normal'>Chennai</span>
    
</div>

</div>

<div className='text-gray-500'>
    17/02/24
</div>
    </div>

    <div className='flex gap-2 text-2xl py-3'>
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />
        <IoIosStar  className='text-[#FFD700]' />



    </div>

    <div className='font-semibold text-2xl py-1 '>
        " One kind of a service "
    </div>

    <div  className='text-gray-600 text-lg'>
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </div>
    


</div>
</div>
            </Slider>

</div>



          </div>


<div className='text-center mx-[50px] my-[50px] lg:my-0'>

    <div className='text-green-800 py-10 text-3xl lg:text-5xl decoration-4 underline decoration-gray-400 text-center font-bold '>
Meet Our Ayurvedic Experts
    </div>
  
    <div className='hidden mx-[50px] md:mx-[100px] lg:mx-0  lg:grid grid-cols-3 gap-10'>


<div className='grow shrink-0 w-full rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded relative  '>
    <img src="/images/face.png" alt="" className='xl:scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>




    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex gap-4 mx-auto px-[120px] py-2   '>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full  my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>













<div className='grow shrink-0 w-full rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded  mx-auto   relative  '>
    <img src="/images/face.png" alt="" className='xl:scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>




    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex gap-4 mx-auto px-[120px] py-2   '>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full  my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>













<div className='grow shrink-0 w-full rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded  mx-auto   relative  '>
    <img src="/images/face.png" alt="" className='xl:scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>




    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex gap-4 mx-auto px-[120px] py-2   '>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full  my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>







    </div>



    <div className='lg:hidden'>
<Slider {...settings}>
<div className='grow shrink-0 w-full rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded  relative  '>
    <img src="/images/face.png" alt="" className='scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>
    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex justify-center gap-3 py-2'>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full  my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>













<div className='w-full  grow shrink-0 rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded   relative  '>
    <img src="/images/face.png" alt="" className='scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>
    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex justify-center gap-3 py-2  '>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>













<div className='w-full grow shrink-0 rounded-3xl pt-10 h-auto text-center overflow-hidden  bg-[#FFF7E2]   '>
    <div className='rounded  relative  '>
    <img src="/images/face.png" alt="" className='scale-90 mx-auto' />
    <div className='absolute inset-x-0 bottom-1 flex items-end justify-center'>
  <div className='px-1 flex items-center justify-evenly gap-3 bg-black text-white w-[60px] font-bold py-0.5 rounded-full'>
    4.5 <IoIosStar className='text-[#FFD700]' />
  </div>
</div>
    </div>

    <div>
<div className='font-semibold pt-5 text-xl '>
    Dr. Vaishali Sharma
</div>
<div className='text-gray-500 '>
    Ayurveda Practitioner (BAMS, MD)
</div>
<div className='flex justify-center gap-3 py-2   '>
<FaRedhat className='text-xl' /> 25 years of experience
</div>

<div className='rounded-full my-3 text-center flex items-center justify-center py-2 font-semibold  text-green-700 gap-2 px-2 w-1/2 mx-auto bg-[#DEE8DF]'>
<IoIosLink/> Skin Specialist
</div>

    </div>

    <div className=' mt-5   text-xl text-white py-4 font-semibold w-full bg-green-600  '>
<button>Book a session</button>
    </div>
</div>

</Slider>
    </div>



    <div className='border text-lg hidden lg:flex my-10  items-center justify-center border-[green]  gap-5 text-green-800  font-semibold mx-auto py-3 max-w-[250px] rounded-2xl   '>
Find more experts <FaAngleRight />
    </div>


</div>



<div className=' lg:grid lg:grid-cols-2 h-auto pt-[50px] pb-[80px] px-[50px] md:px-[100px] lg:px-[150px] bg-[#FFF7E2]'>
 

 <div className='ps-5'>
    <div className='font-bold text-green-800 text-4xl py-5 '>
        Amrutam Home App
    </div>

    <div className='text-md text-gray-500 '>
    The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features. 
    </div>


    <div className='hidden lg:block py-5'>
    <div className=' text-xl font-semibold text-gray-600'>
    Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
    </div>

    <div className='font-bold text-2xl pt-10 pb-4 '>
        Get The App Now 
    </div>

    <div className='md:flex gap-5'>
    <img src="/images/apple.png" alt="" />
<img src="/images/google.png" alt="" />
    </div>
    </div>
 </div>




 <div className='lg:relative'>
<img src="/images/e1.png" alt="" className='xl:scale-100 lg:scale-50  absolute hidden lg:block left-[150px]' />
<img src="/images/iPhone.png" alt="" className='lg:z-[100] mt-5 lg:mt-0 lg:absolute' />
<img src="/images/e2.png" alt="" className='xl:scale-100 lg:scale-50 absolute hidden lg:block top-[220px] right-[100px]' />
 </div>


 <div className='lg:hidden'> 
 <div className='text-xl font-semibold text-center px-10 py-5 text-gray-700'>
 Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
    </div>

    <div className='font-bold my-3 text-center text-3xl'>
        Get The App Now 
    </div>

    <div className='md:flex mt-8  mx-[100px] '>
<img src="/images/apple.png" alt="" className='w-full ' />
<img src="/images/google.png" alt="" className='mt-3 w-full'  />

    </div>

 </div>


</div>






{/* footer   */}


<div className='md:grid grid-cols-3 my-10 '>


    <div className=''>
<div className='md:hidden text-start mx-10'>
<div className='text-green-800 font-bold text-xl'>
    Get in Touch
</div>
<div>
support@amrutam.co.in 
</div>

<div>
Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001 <br /><br /> +91 9713171999
</div>

<div className='flex gap-3 pt-5 '>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<FiFacebook/>
</div>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<FaInstagram/>
</div>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<RiYoutubeLine/>
</div>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<CiTwitter/>
</div>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<FiLinkedin/>
</div>
<div className='h-[50px] w-[50px] rounded-full flex items-center text-2xl justify-center text-white bg-green-800 '>
<FaPinterestP/>
</div>
</div>

</div>


    </div>

    

<div className='py-10 text-start  mx-10 lg:mx-0  '>


<div className='mx-auto '>
<div className='font-bold text-xl py-3 lg:ps-[150px] text-green-800'>
    Information
</div>
 

 <div className='font-slim lg:ps-[150px] text-gray-600'>
 About Us <br /> Terms and Conditions <br />Privacy Policy <br />Privacy Policy for Mobile Apps <br /> Shipping and Returns Policy <br /> International Delivery <br /> For Businesses, Hotels and Resorts
 </div>
</div>
</div>






<div>



<div  className='md:hidden mx-10'>
<div className='text-green-800 text-xl text-start py-5 font-bold  '>
Subscribe to our Newsletter and join Amruram Family today!
</div>

<div className='flex rounded-xl justify-between overflow-hidden border border-black   '>
    <div className=''>
    <input type="email" placeholder='Your Email Address' className=' w-full  text-lg py-1 px-5  rounded-xl'/>
    </div>
    <div className='font-semibold text-white bg-black px-5 py-1  text-lg'>
        <button >Subscribe</button>
    </div>
</div>
</div>
</div>

</div>


        </div>
    );
}

export default App;
