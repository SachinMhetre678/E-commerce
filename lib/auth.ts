// lib/auth.ts
export const users = [
    { email: "test@example.com", password: "password123" },
  ];
  
  export const authenticateUser = (email: string, password: string) => {
    return users.find((user) => user.email === email && user.password === password);
  };
  
  export const registerUser = (email: string, password: string) => {
    const userExists = users.some((user) => user.email === email);
    if (userExists) return false;
  
    // Add new user to the array
    users.push({ email, password });
    return true;
  };
  