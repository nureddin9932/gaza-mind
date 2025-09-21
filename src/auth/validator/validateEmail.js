export default function validateEmail(email) {
  if (!email || typeof email !== "string") return false; 
  email = email.trim(); 
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
