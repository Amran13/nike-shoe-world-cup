import React from 'react';
import nikeLogo from './../Image/Vector (2).png';
import headerImg from './../Image/image 22.png';
import rectangle from './../Image/Rectangle 505.png';
import img20 from './../Image/image 20.png';
import img19 from './../Image/image 19.png';
import rectengle506 from './../Image/Rectangle 506.png';
import zion from './../Image/Zion 2.png';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <img className='w-28 h-12' src={nikeLogo} alt="" />
                        <div className='ml-16'>
                        <a className='font-bold text-lg mx-8 hover:text-red-600' href="#">Man</a>
                        <a className='font-bold text-lg mx-8 hover:text-red-600' href="#">Woman</a>
                        <a className='font-bold text-lg mx-8 hover:text-red-600' href="#">Kids</a>
                        </div>
                    </div>
                    
                    <div className="navbar-end">
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" placeholder="Search Here" className="input input-bordered rounded" />
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                       
                        <button className="btn btn-ghost btn-circle ml-6">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            <h1 className='font-extrabold text-8xl uppercase my-10'>Mens Basketball shoe</h1>
            <img className='absolute left-0' src={headerImg} alt="" />
            <img className='h-36 relative top-10' src={rectangle} alt="" />
            <img className='relative top-0 lg:left-[950px] h-44' src={img20} alt="" />
            <img className='relative top-4 lg:left-[950px] h-44' src={img19} alt="" />
            <img className='relative lg:left-[550px] top-6 h-40' src={rectengle506} alt="" />
            <img className='relative left-0 bottom-16 h-32' src={zion} alt="" />
            <p className='w-[500px] relative lg:left-[600px] bottom-[240px] font-bold'>Channel new levels of speed and power in shoes designed for Zion and built for ballers at any level. An adjustable strap up top helps lock in your foot, while a firm midsole supports high-paced play. Plus, the Zion 2 has more Air cushioning than its</p>
            <img className='relative h-12 bottom-[800px] left-10' src={nikeLogo} alt="" />
            <p className='uppercase font-bold tracking-wider relative bottom-[850px] left-48'>Product <br /> of the sales</p>
        </div>
    );
};

export default Header;