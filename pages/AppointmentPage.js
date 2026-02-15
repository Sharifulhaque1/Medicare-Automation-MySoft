export class AppointmentPage {
  constructor(page) {
    this.page = page;
  }

  async createAppointment(patientFullID) {
    await this.page.getByRole('link', { name: 'Receptions Rooms' }).click();
    await this.page.getByText('IN', { exact: true }).first().click();
    await this.page.getByRole('textbox').first().fill(patientFullID);
    await this.page.getByRole('button', { name: patientFullID, exact: false }).click();
    await this.page.locator('select[name="rooms"]').selectOption('1: Object');
    
    // This part handles the popup window that opens
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.getByRole('button', { name: 'Add to Queue' }).click()
    ]);
    return newPage; // Returns the new tab/window
  }
}