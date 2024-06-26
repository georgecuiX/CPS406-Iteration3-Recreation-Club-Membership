import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/index.css'
import Footer from '../components/Footer';
import Finance from '../assets/finances.png'
import Communication from '../assets/communications.png'

const AdminHomePage = () => {

    return (
        <div className="h-screen bg-stone-200 overflow-hidden">
            <Navbar />
            <div className='flex flex-col mt-8'>
                <div className="grid grid-flow-row grid-cols-3 w-full justify-items-center gap-y-16 px-40">
                    <Link to="/admin-finances" className="feature-box">
                        Financial Management & Reporting
                        <img src={Finance} alt="icon" className='feature-icon' />
                    </Link>
                    <Link to="/member-management" className="feature-box">
                        Member Management
                        <img src="https://static-00.iconduck.com/assets.00/member-icon-2048x2048-ia0jy9lz.png" alt="icon" className='feature-icon' />
                    </Link>
                    <Link to='/practiceCalendar' className="feature-box">
                        Manage Schedule
                        <img src="https://cdn-icons-png.flaticon.com/512/6117/6117275.png" alt="icon" className='feature-icon' />
                    </Link>
                    <Link to="/communication" className="feature-box">
                        Communication Center
                        <img src={Communication} alt="icon" className='feature-icon' />
                    </Link>
                    <Link to="/" className="feature-box">
                        Log Out
                        <img src="https://static-00.iconduck.com/assets.00/logout-1-icon-2048x2048-dsthju9g.png" alt="icon" className='feature-icon' />
                    </Link>
                </div>
                <div className='absolute bottom-0'>
                <Footer />
                </div>
            </div>
        </div>
    );
};


export default AdminHomePage;