import test from '@playwright/test';
import { PracticeTestLogin } from '../OrangeHrm/pages/PracticeTestLogin';

test("Practice Test Automation Login and Navigate Home", async ({page}) => {
    
    const login = new PracticeTestLogin(page);
    
    // Step 1: Navigate to login page
    console.log("Step 1: Navigating to login page...");
    await login.navigateToLogin();
    
    // Step 2: Login with credentials
    console.log("Step 2: Logging in with username 'student' and password 'Password123'...");
    await login.login("student", "Password123");
    
    // Step 3: Navigate to home
    console.log("Step 3: Navigating to home...");
    await login.navigateToHome();
    
    console.log("Test completed successfully!");
});
