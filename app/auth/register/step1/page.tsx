// app/auth/register/step1/page.tsx
"use client"; // Add this directive if you haven't already

import Register from "../../../../components/Register";

const RegisterStep1Page = () => {
  return (
    <div>
      <Register /> {/* Make sure to use the Register component */}
    </div>
  );
};

export default RegisterStep1Page;
