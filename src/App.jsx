import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import InstituteDashboard from './components/pages/InstituteDashboard'
// import StudentDashboard from './components/dashboard/StudentDashboard'
// import AlumniDashboard from './components/dashboard/AlumniDashboard'

// Import CSS for dashboards
import './components/styles/InstituteDashboard.css'
// import './styles/StudentDashboard.css'
// import './styles/AlumniDashboard.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/institute" replace />} />
        <Route path="/institute" element={<InstituteDashboard />} />
        {/* <Route path="/student" element={<StudentDashboard />} />
        <Route path="/alumni" element={<AlumniDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
