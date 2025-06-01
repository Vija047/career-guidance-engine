// src/services/authService.js
// Example: stub for authentication logic (replace with Firebase or your auth provider)

export function login(email, password) {
  // TODO: Replace with real auth call
  return new Promise((resolve, reject) => {
    if (email === 'test@example.com' && password === 'password') {
      resolve({ userId: '123', email });
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
}

export function logout() {
  // Clear tokens or session storage here
  return Promise.resolve();
}
