"use client"; // Ensure this is present

import React from 'react';
import Header from "../../../../components/Header";
import Login from '@/components/Login';

const RegisterStep2Page = () => {
  return (
    <div>
      <Header />
      <Login />
      {/* Additional step 2 registration details can be added here */}
    </div>
  );
};

export default RegisterStep2Page;
