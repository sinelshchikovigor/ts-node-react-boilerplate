Feature('Home');

Scenario('Navigation to login page', (I) => {
    I.wait(10);
    I.amOnPage('http://localhost:4000/');
    I.waitForElement('#login-button', 15);
    I.click('#login-button');
});
