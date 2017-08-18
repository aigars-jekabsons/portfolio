import { browser, by, element } from 'protractor';

export class AngularCMSPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('CMS-root h1')).getText();
  }
}
