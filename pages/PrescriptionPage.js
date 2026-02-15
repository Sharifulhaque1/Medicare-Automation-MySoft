export class PrescriptionPage {
  constructor(page) {
    this.page = page;
  }

  async openPrescriptionSection() {
    await this.page.getByRole('button', { name: 'Prescription System' }).click();
    await this.page.getByRole('button', { name: 'Prescription' }).click();
    await this.page.getByRole('link', { name: 'Prescription' }).click();
    await this.page.locator('div:nth-child(8) > .goLink').click();
  }

  async handleMedicationWarning() {
    const warningBtn = this.page.getByRole('button', { name: 'Yes' });
    if (await warningBtn.isVisible()) {
      await warningBtn.click();
    }
  }
}