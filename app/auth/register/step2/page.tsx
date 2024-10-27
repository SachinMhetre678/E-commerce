// app/auth/register/step2/page.tsx
"use client"; // This directive allows the use of client components

import React from 'react';
import Header from "../../../../components/Header";
import { useRouter } from "next/navigation";
import Login from '@/components/Login';

const RegisterStep2Page = () => {
  const router = useRouter(); // Keep or remove based on usage

  return (
    <div>
      <Header />
      <Login />
      {/* Additional step 2 registration details can be added here */}
    </div>
  );
};

export default RegisterStep2Page;
