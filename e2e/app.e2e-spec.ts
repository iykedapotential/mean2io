import { Testmean2Page } from './app.po';

describe('testmean2 App', function() {
  let page: Testmean2Page;

  beforeEach(() => {
    page = new Testmean2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
