// This script creates mock user data in sessionStorage for testing
const mockUserInfo = {
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZmlyc3RuYW1lIjoiQWRtaW4iLCJsYXN0bmFtZSI6IlVzZXIiLCJmdWxsbmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlcyI6WyJBZG1pbiJdfQ.8tat9AtmKh5iXyVQzr9TRNUmJIxQntQA_wYgEHD5Q9M",
    expires_in: 3600,
    not_before_policy: 0,
    refresh_expires_in: 86400,
    refresh_token: "mock-refresh-token",
    scope: "profile email",
    session_state: "mock-session-state",
    token_type: "Bearer"
};

// Store the mock data in sessionStorage
sessionStorage.setItem('user_info', JSON.stringify(mockUserInfo));
sessionStorage.setItem('access_token', mockUserInfo.access_token);
sessionStorage.setItem('refresh_token', mockUserInfo.refresh_token);

console.log("Mock user data created in sessionStorage");
