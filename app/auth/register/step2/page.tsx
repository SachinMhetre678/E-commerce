// app/auth/register/step2/page.tsx
"use client"; // Add this directive at the top

import React from 'react';
import Header from "../../../../components/Header";
import { useRouter } from "next/navigation";
import Login from '@/components/Login';

const RegisterStep2Page = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <Login/>
      {/* Add step 2 registration details */}
    </div>
  );
};

export default RegisterStep2Page;
