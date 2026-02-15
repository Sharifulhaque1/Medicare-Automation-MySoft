# Medicare Automation Project (MySoft)

This repository contains an end-to-end test automation suite for the **Medicare Web Client** developed using the **Playwright Framework**. The project automates critical hospital workflows including patient registration, appointment scheduling, and complex prescription handling.

---

## 🛠️ Technology Stack
- **Language:** JavaScript
- **Framework:** [Playwright]
- **Version Control:** Git & GitHub

---

## 🧪 Test Scenarios Covered

The automation covers 4 main modules, executed in a strict sequence using newly registered patient IDs.

### 1. Authentication
* **Goal:** Verify successful login to the system.
* **Steps:**
    * Navigate to the login page.
    * Enter Username & Password (Mandatory).
    * Validate successful dashboard entry.

### 2. OPD Registration
* **Goal:** Register two distinct patients (Regular & Quick Appointment).
* **Key Actions:**
    * Navigate to Patient List -> Add.
    * Fill all mandatory fields.
    * **Image Handling:** Upload a patient image and delete it to verify functionality.
    * **Calculations:** Verify Date of Retirement calculations.

### 3. OPD Appointment
* **Goal:** Schedule appointments and manage the queue.
* **Key Actions:**
    * **OPD Reception:** Select a room and click "IN".
    * **Patient Search:** Search using the newly created Patient IDs.
    * **Queue Management:** Add patients to the queue.
    * **Exception Handling:** Handle multi-appointment logic.

### 4. General Prescription (Complex Workflow)
* **Goal:** Validate cross-department medication warnings.
* **Logic:**
    * **Departments:** CVS Center, Medical (Male).
    * **Warning Logic:** If a patient is prescribed "Continuous Medication" in the CVS Center, and the same medication is re-prescribed in Medical (Male), the system must trigger a Warning Modal.
* **Key Actions:**
    * Enter Doctor's Room.
    * Fill General Prescription fields & Additional Option fields.
    * **Warning Handling:** Handle the "Medication Warning" modal (Click "Yes").
    * Complete via **Quick Rx** and **Save**.

---

## 🚀 Getting Started

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sharifulhaque1/Medicare-Automation-MySoft.git](https://github.com/Sharifulhaque1/Medicare-Automation-MySoft.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    npx playwright install
    ```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run tests with UI
npx playwright test --headed
