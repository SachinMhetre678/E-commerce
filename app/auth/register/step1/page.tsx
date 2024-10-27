// app/auth/register/step1/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Register from "../../../../components/Register";

const RegisterStep1Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate a registration step
    setTimeout(() => {
      // Here you can call your API to create the user
      router.push('/auth/register/step2'); // Navigate to step 2
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight text-center">Create Account</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="block w-full border rounded-md p-2"
            />
            {/* Email Input */}
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="block w-full border rounded-md p-2"
            />
            {/* Password Input */}
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="block w-full border rounded-md p-2"
            />
            {/* Confirm Password Input */}
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="block w-full border rounded-md p-2"
            />
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              {isLoading ? "Loading..." : "Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep1Page;
