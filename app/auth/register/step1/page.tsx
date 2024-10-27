// app/auth/register/step1/page.tsx
"use client";

import { useRouter } from "next/navigation";
import Register from "../../../../components/Register";

const RegisterStep1Page = () => {
  const router = useRouter();
  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterStep1Page;
