// app/auth/register/step1/page.tsx
import Register from "../../../../components/Register";

// app/auth/register/page.tsx
import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
          <Register />
    </div>
  );
}
