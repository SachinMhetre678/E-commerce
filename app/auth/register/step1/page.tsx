// app/auth/register/step1/page.tsx
"use client"; // Ensure this directive is at the top

import { useRouter } from "next/navigation";
import Register from "../../../../components/Register";

const RegisterStep1Page = () => {
  const router = useRouter();

  // You can use router here if needed, e.g., for navigation
  const handleNavigation = () => {
    router.push('/auth/register/step2'); // Example usage
  };

  return (
    <div>
      <Register />
      <button onClick={handleNavigation}>Next Step</button> {/* Example button */}
    </div>
  );
};

export default RegisterStep1Page;
