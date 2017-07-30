import { Ng4BootstrapPage } from './app.po';

describe('ng4-bootstrap App', () => {
  let page: Ng4BootstrapPage;

  beforeEach(() => {
    page = new Ng4BootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
