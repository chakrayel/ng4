import { AuthappFirebasePage } from './app.po';

describe('authapp-firebase App', () => {
  let page: AuthappFirebasePage;

  beforeEach(() => {
    page = new AuthappFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
