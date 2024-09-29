import { Page } from '@playwright/test';

class PimPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPIM() {
    await this.page.click('text=PIM');
  }

  async addEmployee() {
    await this.page.click('text=add employee');
  }
}

export default PimPage;