import React from "react";
import Header from './Header';
import StudentManager from './StudentManager';
import Actions from './Actions';

const Home = () => {
  return (
    <>
      <Header />
      <Actions />
      <StudentManager />
    </>
  );
};

export default Home;
