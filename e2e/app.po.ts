import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('md-keyboard-demo-root h1')).getText();
  }
}
