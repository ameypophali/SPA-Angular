import { LambsAreUsFrontEndAngularPage } from './app.po';

describe('lambs-are-us-front-end-angular App', () => {
  let page: LambsAreUsFrontEndAngularPage;

  beforeEach(() => {
    page = new LambsAreUsFrontEndAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
