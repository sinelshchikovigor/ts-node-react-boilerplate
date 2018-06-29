Feature('Login');

Scenario('Login as admin', (I) => {
    I.amOnPage('http://localhost:4000/login');
    I.waitForElement('#login', 15);
    I.fillField('#login', 'admin');
    I.fillField('#password', 'admin');
    I.click('#login-button');
});
