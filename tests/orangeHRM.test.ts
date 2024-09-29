import { test, chromium, Page } from '@playwright/test';
import LoginPage from '../pageObjects/loginPage';
import PimPage from '../pageObjects/pimPage';
import AddEmployeePage from '../pageObjects/addEmployeePage';
import EmployeeListPage from '../pageObjects/employeeListPage';

let page: Page;
let browser: any; 

test.setTimeout(60000);

test.beforeAll(async () => {
    browser = await chromium.launch({ 
        headless: false, 
        slowMo: 1000 
    }); 
    const context = await browser.newContext();
    page = await context.newPage(); 
});

test.afterAll(async () => {
    await browser.close();
});

test.describe('Automatización de OrangeHRM', () => {
  let loginPage: LoginPage;
  let pimPage: PimPage;
  let addEmployeePage: AddEmployeePage;
  let employeeListPage: EmployeeListPage;

  test.beforeEach(async () => { 
    loginPage = new LoginPage(page);
    pimPage = new PimPage(page);
    addEmployeePage = new AddEmployeePage(page);
    employeeListPage = new EmployeeListPage(page);

    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
  });

  test('Registrar un nuevo empleado', async () => { 
    await pimPage.navigateToPIM();
    await pimPage.addEmployee();
    await addEmployeePage.fillEmployeeDetails('Sandro', 'Zahid', 'Huaman', '0124');
    await addEmployeePage.addDetails();
    await addEmployeePage.fillPersonalDetails('Sandro30@pe', '12345*Sa');
    await addEmployeePage.saveEmployee();
    await employeeListPage.searchEmployee('Sandro Zahid Huaman');
    await page.waitForTimeout(10000); 

  });
});