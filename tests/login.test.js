describe('Login page test', () => {

  beforeAll(async () => {
    await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'});
  });

  it('check title', async () => {
    const title = await page.title();
    expect(title).toBe('Login page by Kristian Korneev');
  });

  it('should got email input validation', async () => {
    await page.waitForSelector('#login-email');
    await page.type('#login-email', 'test');
    await page.waitForSelector('#error-login-email');
    const error = await page.$('#error-login-email');
    expect(error).toBeDefined();
  });

  it('should detach email error label', async () => {
    await page.waitForSelector('#login-email');
    await page.type('#login-email', '@gmail.com');
    await page.waitForSelector('#error-login-email', {hidden: true, state: 'detached', timeout: 2000});
  });

  it('should check password validation', async () => {
    await page.waitForSelector('#login-password');
    await page.type('#login-password', 'test');
    await page.waitForSelector('#error-login-password', {timeout: 2000});
    const error = await page.$('#error-login-password');
    expect(error).toBeDefined();
  });

  it('should detach password error label', async () => {
    await page.waitForSelector('#login-password');
    await page.type('#login-password', 'testtesttest');
    await page.waitForSelector('#error-login-password', {hidden: true, state: 'detached', timeout: 2000});
  });

  it('should check that button not dissabled', async () => {
    const isButtonDisabled = await page.evaluate(() => {
      const button = document.querySelector('button'); // Replace with your button selector
      return button.disabled;
    });

    expect(isButtonDisabled).toBe(false);
  });

  it('should login and wait for redirect to main page', async () => {
    await page.click('#login-submit');
    await page.waitForSelector('#main-page', {timeout: 3000});
  });

  it('should check main page elements', async () => {
    await page.waitForSelector('#mainPage-linkedin');
    await page.waitForSelector('#mainPage-logout');
    await page.waitForSelector('#mainPage-photo');
  });

  it('should check main page elements', async () => {
    await page.click('#mainPage-logout', {timeout: 3000});
    await page.waitForSelector('#login-email');
  });
});
