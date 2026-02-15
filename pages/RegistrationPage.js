export class RegistrationPage {
  constructor(page) {
    this.page = page;
  }

  async registerPatient(personalNumber, firstName) {
    await this.page.getByRole('link', { name: 'OPD' }).click();
    await this.page.getByRole('button', { name: 'Hospital Services' }).click();
    await this.page.getByRole('button', { name: 'Out Patient Department' }).click();
    await this.page.getByRole('button', { name: 'OPD Services' }).click();
    await this.page.getByRole('link', { name: 'Patient List' }).click();
    await this.page.getByRole('button', { name: 'Add' }).click();

    // Filling your recorded fields
    await this.page.locator('select[name="serviceCategory"]').selectOption('1: Object');
    await this.page.locator('input[name="personalNumberViewOnly"]').fill(personalNumber);
    await this.page.locator('input[name="fname"]').fill(firstName);
    await this.page.locator('select[name="eligibilityStatus"]').selectOption('9: Object');
    await this.page.getByRole('radio', { name: 'Male', exact: true }).check();
    await this.page.locator('input[name="phoneMobile"]').fill('01712345678');
    await this.page.locator('select[name="medicalCategory"]').selectOption('1: Object');
    
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}