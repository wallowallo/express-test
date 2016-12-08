import { ExpressTestPage } from './app.po';

describe('express-test App', function() {
  let page: ExpressTestPage;

  beforeEach(() => {
    page = new ExpressTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
