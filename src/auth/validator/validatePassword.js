// Validate two password inputs: not empty and match
function validatePasswords(password, confirmPassword) {
  // ensure both are strings (avoid null/undefined/other types)
  if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
    return false;
  }

  // trim whitespace and check not empty
  const p = password.trim();
  const cp = confirmPassword.trim();
  if (p.length === 0 || cp.length === 0) {
    return false;
  }

  // check they match exactly
  return p === cp;
}

export default validatePasswords;