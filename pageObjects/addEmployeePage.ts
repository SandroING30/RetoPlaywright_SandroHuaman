import { Page } from '@playwright/test';

class AddEmployeePage {
  private page: Page;
  private firstNameInput = 'input[name="firstName"]';
  private middleNameInput = 'input[name="middleName"]';
  private lastNameInput = 'input[name="lastName"]';
  private addDetailsButton = 'span.oxd-switch-input.oxd-switch-input--active.--label-right';

  constructor(page: Page) {
    this.page = page;
  }

  async fillEmployeeDetails(firstName: string, middleName: string, lastName: string, employeeId: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.middleNameInput, middleName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.locator('div.oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await this.page.locator('div.oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill(employeeId);
  }

  async addDetails() {
    await this.page.click(this.addDetailsButton);
  }

  async fillPersonalDetails(username: string, password: string) {

    await this.page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await this.page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill(username);

    await this.page.locator('input[type="password"]').first().click();
    await this.page.locator('input[type="password"]').first().fill(password);

    await this.page.locator('input[type="password"]').nth(1).click();
    await this.page.locator('input[type="password"]').nth(1).fill(password);
  }

  async saveEmployee() {
    await this.page.waitForSelector('button:has-text("Save")', { state: 'visible' });
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

export default AddEmployeePage;