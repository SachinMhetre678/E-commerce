// app/auth/register/step1/page.tsx
"use client"; // Ensure this directive is at the top

import { useRouter } from "next/navigation";
import Register from "../../../../components/Register";

const RegisterStep1Page = () => {
  const router = useRouter();
  return (
    <div>
      <Register /> {/* Make sure to use the Register component */}
    </div>
  );
};

export default RegisterStep1Page;
