import { Page } from '@playwright/test';

class EmployeeListPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchEmployee(employeeName: string) {
    await this.page.getByRole('link', { name: 'Employee List' }).click(); 

    await this.page.getByPlaceholder('Type for hints...').first().click();
    await this.page.getByPlaceholder('Type for hints...').first().fill(employeeName); 

    await this.page.getByRole('button', { name: 'Search' }).click();

    await this.page.waitForLoadState('networkidle'); 

    await this.page.locator('button[data-v-f5c763eb][data-v-c423d1fa].oxd-icon-button.oxd-table-cell-action-space >> i.oxd-icon.bi-pencil-fill').click();

  }

  
}

export default EmployeeListPage;