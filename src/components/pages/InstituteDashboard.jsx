import React from 'react';
import Nav from '../navbar.jsx';
import Slide from '../slidebar.jsx';
import { UserPlus, CalendarPlus, TrendingUp } from 'lucide-react';
import degree from '../../assets/degree.png';
import help from '../../assets/help.png';
import graph from '../../assets/graph.png';
import '../styles/InstituteDashboard.css';

function InstituteDashboard() {
  return (
    <>
      <Nav />
      <div className="dashboard-wrapper">
        <Slide />

        {/* The Main Content Area (Scrollable content) */}

        <div className="main-content-area">

          {/* Main Section - Status Bar */}
          <div className="main-status">
            <h3 className="main-title">Dashboard</h3>

            <div className="main-boxes-container">
              {/* Box 1: Alumni Verified (Green tone) */}
              <div className="main-boxes box-verified">
                <div className="main-box-top">
                  <img src={degree} alt="Icon" />
                  <h3> Student Verified</h3>
                  <img src={help} alt="Info" />
                </div>
                <div className="main-box-bottom">
                  <h3>280</h3>
                  <button className="status-btn">+45 this month</button>
                </div>
              </div>

              {/* Box 2: Students Verified (Green tone) */}
              <div className="main-boxes box-verified">
                <div className="main-box-top">
                  <img src={degree} alt="Icon" />
                  <h3>Alumni Verified</h3>
                  <img src={help} alt="Info" />
                </div>
                <div className="main-box-bottom">
                  <h3>280</h3>
                  <button className="status-btn">+116 this month</button>
                </div>
              </div>

              {/* Box 3: Active Users */}
              <div className="main-boxes box-active-users">
                <div className="main-box-top">
                  <img src={graph} alt="Icon" />
                  <h3>Active Users</h3>
                  <img src={help} alt="Info" />
                </div>
                <div className="main-box-bottom">
                  <h3>280</h3>
                  <button className="status-btn active-users-btn">+250 this month</button>
                </div>
              </div>
            </div>
          </div>


          {/* FUNDS RAISED + EVENTS THROWN */}
          <div className="content-row">

            {/* --- FUNDS RAISED COLUMN --- */}
            <div className="funds-raised-column">
              <h2 className="section-title">Funds Raised</h2>

              {/* Container for all Fund Cards */}
              <div className="fund-cards-container">

                {/* Fund Card 1 */}
                <div className="fund-card">
                  <div className="fund-content">
                    <h4 className="fund-title">Scholarship Fund</h4>
                    <p className="fund-detail">Total Scholarship Fund Balance - ₹12,50,000</p>
                    <p className="fund-detail sub-detail">This Month's Donations - ₹2,35,000</p>
                  </div>
                  <div className="donor-count-badge badge-pink">
                    <span className="badge-label">Total Donors</span>
                    <span className="badge-number">43</span>
                  </div>
                </div>

                {/* Fund Card 2 */}
                <div className="fund-card">
                  <div className="fund-content">
                    <h4 className="fund-title">Infrastructure & Development</h4>
                    <p className="fund-detail">Total Scholarship Fund Balance - ₹12,50,000</p>
                    <p className="fund-detail sub-detail">This Month's Donations - ₹2,35,000</p>
                  </div>
                  <div className="donor-count-badge badge-pink">
                    <span className="badge-label">Total Donors</span>
                    <span className="badge-number">43</span>
                  </div>
                </div>

                {/* Fund Card 3 */}
                <div className="fund-card">
                  <div className="fund-content">
                    <h4 className="fund-title">Research & Innovation</h4>
                    <p className="fund-detail">Total Scholarship Fund Balance - ₹12,50,000</p>
                    <p className="fund-detail sub-detail">This Month's Donations - ₹2,35,000</p>
                  </div>
                  <div className="donor-count-badge badge-pink">
                    <span className="badge-label">Total Donors</span>
                    <span className="badge-number">43</span>
                  </div>
                </div>

              </div>
            </div>

            {/* EVENTS THROWN COLUMN*/}
            <div className="events-thrown-column">
              <h2 className="section-title">Events Thrown</h2>

              {/* Container for all Event Cards */}
              <div className="event-cards-container">

                {/* Event Card 1 */}
                <div className="event-card">
                  <div className="event-content">
                    <h4 className="event-title">Industry Panel Discussion</h4>
                    <div className="event-detail-group">
                      <p className="event-detail-line">Venue - Somewhere</p>
                      <p className="event-detail-line">Time - 11 AM</p>
                    </div>
                    <p className="event-date">Date - 29th Aug 2025</p>
                  </div>
                  <div className="donor-count-badge badge-green">
                    <span className="badge-label">Alumni Registered</span>
                    <span className="badge-number">56</span>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="event-card">
                  <div className="event-content">
                    <h4 className="event-title">Industry Panel Discussion</h4>
                    <div className="event-detail-group">
                      <p className="event-detail-line">Venue - Somewhere</p>
                      <p className="event-detail-line">Time - 11 AM</p>
                    </div>
                    <p className="event-date">Date - 29th Aug 2025</p>
                  </div>
                  <div className="donor-count-badge badge-green">
                    <span className="badge-label">Alumni Registered</span>
                    <span className="badge-number">56</span>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="event-card">
                  <div className="event-content">
                    <h4 className="event-title">Industry Panel Discussion</h4>
                    <div className="event-detail-group">
                      <p className="event-detail-line">Venue - Somewhere</p>
                      <p className="event-detail-line">Time - 11 AM</p>
                    </div>
                    <p className="event-date">Date - 29th Aug 2025</p>
                  </div>
                  <div className="donor-count-badge badge-green">
                    <span className="badge-label">Alumni Registered</span>
                    <span className="badge-number">56</span>
                  </div>
                </div>

              </div>
            </div>
          </div> {/* end content-row */}

        </div> {/* end main-content-area */}
      </div>


      <div className="quick-actions-container">
        <section className="section-dash">
          <h2 className="section-title">Quick Actions</h2>
          <div className="card-grid">


            {/* Card 1: Alumni Registration */}
            <div className="action-card card-alumni">
              <div className="card-icon">
                <UserPlus size={28} />
              </div>
              <p className="card-desc">Register new alumni to the database</p>
              <button className="card-btn btn-primary">Add Now</button>
            </div>
            {/* Card 2: Event Creation */}
            <div className="action-card card-event">
              <div className="card-icon">
                <CalendarPlus size={28} />
              </div>
              <p className="card-desc">Organize networking or reunion events</p>
              <button className="card-btn btn-secondary">Create Event</button>
            </div>

            {/* Card 3: Fundraising */}
            <div className="action-card card-fund">
              <div className="card-icon">
                <TrendingUp size={28} />
              </div>
              <p className="card-desc">Quickly raise some fund campaigns</p>
              <button className="card-btn btn-accent">Raise Campaign</button>
            </div>


          </div>
        </section>
      </div>

    </>
  );
}

export default InstituteDashboard;
