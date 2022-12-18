import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import img20 from './../Image/image 20.png';
import img19 from './../Image/image 19.png';
import rect508 from './../Image/Rectangle 508.png';
import img23 from './../Image/image 23.png';

const Explore = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <button className='btn btn-lg bg-black'>Explore Now</button>
                </div>

                <div>
                    <p className='text-3xl font-bold w-[600px] uppercase'>the Zion 2 has more Air cushioning than its predecessor, so you'll get into the clouds easier and land softer. Make this your #1 pick for the court.</p>
                </div>
            </div>
            <h1 className='text-6xl font-extrabold uppercase my-20'>don’t miss <br /> new product release.</h1>

            <div className='flex justify-between'>
                <div className='flex'>
                    <div>
                        <img className='h-[250px] rounded-2xl my-4' src={img20} alt="" />
                        <img className='h-[250px] rounded-2xl my-4' src={img19} alt="" />
                    </div>
                    <div>
                        <img className='h-[570px]' src={rect508} alt="" />
                    </div>

                </div>
                <div className='mt-28'>
                    <p className='font-bold text-5xl uppercase'>Zion 2Men's <br /> Basketball <br /> Shoes</p>
                    <p className='font-bold mt-6'> <AiOutlineArrowRight className='inline'/> Shown: Half Blue/Deep Royal Blue/Pink Prime</p>
                    <p className='font-bold'> <AiOutlineArrowRight className='inline'/> Style: DO9161-467</p>
                    <button className='btn btn-lg rounded-full bg-black'>Explore Now</button>
                    <button className='btn btn-lg btn-outline rounded-full mx-4 mt-12'>Explore Now</button>
                </div>
            </div>
            <img src={img23} alt="" />
        </div>
    );
};

export default Explore;