import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { AppointmentPage } from '../pages/AppointmentPage';
import { PrescriptionPage } from '../pages/PrescriptionPage';

test('Medicare Full Flow Test', async ({ page }) => {
  const login = new LoginPage(page);
  const registration = new RegistrationPage(page);
  const appointment = new AppointmentPage(page);

  // Step 1: Login
  await login.login('SQA1', '123456');

  // Step 2: Register Patient
  await registration.registerPatient('10788', 'Shariful');

  // Step 3: Appointment (and get the new popup page)
  const popupPage = await appointment.createAppointment('BD-10788');

  // Step 4: Prescription (Using the popupPage context)
  const prescription = new PrescriptionPage(popupPage);
  await prescription.openPrescriptionSection();
  await prescription.handleMedicationWarning();
});