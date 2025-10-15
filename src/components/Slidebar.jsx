import React from "react";
import './Slidebar.css';
import calender from '../assets/calender.png';
import diary from '../assets/diary.png';
import fund from '../assets/fund.png';
import graduatedBoy from '../assets/graduatedBoy.png';
import help from '../assets/help.png';
import menu from '../assets/menu.png';
import setting from '../assets/setting.png';


function Slide() {

    return (
        <>

            <div className='sidebar'>
                <div className='side-upper'>
                    <h3>General</h3>

                    <div className="side-item active">
                        <img className='side-pic' src={menu} alt="Menu" />
                        <h4>Dashboard</h4>
                    </div>
                    <div className="side-item">
                        <img className='side-pic' src={graduatedBoy} alt="Alumni" />
                        <h4>Alumni Directory</h4>
                    </div>
                    <div className="side-item">
                        <img className='side-pic' src={diary} alt="Students" />
                        <h4>Student Directory</h4>
                    </div>
                    <div className="side-item">
                        <img className='side-pic' src={fund} alt="Funds" />
                        <h4>Fund Campaigns</h4>
                    </div>
                    <div className="side-item">
                        <img className='side-pic' src={calender} alt="Events" />
                        <h4>Event Management</h4>
                    </div>
                </div>

                <div className="side-lower">
                    <h3>Support</h3>
                    <div className="side-item">
                        <img className="side-pic" src={setting} alt="Settings" />
                        <h4>Settings & Admin Tools</h4>
                    </div>
                    <div className="side-item">
                        <img className="side-pic" src={help} alt="Help" />
                        <h4>Help & Support</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slide;