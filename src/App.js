import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GlobalProvider from './GlobalProvider';
import Login from './components/Login-signup/Login';
import Signup from './components/Login-signup/Signup';
import CourseInfo from './components/courseInfo/CourseInfo';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/courseinfo" element={<CourseInfo />} />
          <Route path="/course/:id" element={<PrivateRoute><CourseInfo/></PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const redirectURL = '/login';

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectURL} />;
  }
}
export default App;