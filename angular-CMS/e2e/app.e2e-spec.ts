import { AngularCMSPage } from './app.po';

describe('angular-cms App', () => {
  let page: AngularCMSPage;

  beforeEach(() => {
    page = new AngularCMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to CMS!');
  });
});
