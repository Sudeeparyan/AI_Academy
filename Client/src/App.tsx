import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { CourseViewer } from './pages/CourseViewer';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-hub/basics" element={<CourseViewer />} />
          <Route path="/ai-hub/rag/*" element={<CourseViewer />} />
          <Route path="/ai-hub/*" element={<CourseViewer />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;