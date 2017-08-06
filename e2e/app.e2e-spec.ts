import { AJportfolioPage } from './app.po';

describe('ajportfolio App', () => {
  let page: AJportfolioPage;

  beforeEach(() => {
    page = new AJportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
