import { NgTestWithSubModulesPage } from './app.po';

describe('ng-test-with-sub-modules App', () => {
  let page: NgTestWithSubModulesPage;

  beforeEach(() => {
    page = new NgTestWithSubModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
