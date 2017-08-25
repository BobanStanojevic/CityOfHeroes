import { CityOfHerosPage } from './app.po';

describe('city-of-heros App', () => {
  let page: CityOfHerosPage;

  beforeEach(() => {
    page = new CityOfHerosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
