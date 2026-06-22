# RBAC Dashboard

A simple Role-Based Access Control (RBAC) dashboard built using React, TypeScript, Firebase Authentication, and Firestore.

## Features

* Firebase Email/Password Authentication
* User profile storage in Firestore
* Role-based access control (Admin and Viewer)
* Admin users can view all registered users
* Viewer users can view only their own profile
* Firestore Security Rules enforce access control on the server side
* Built entirely with Firebase (no custom backend)

## Technology Stack

* React
* TypeScript
* Firebase Authentication
* Cloud Firestore
* React Router

## Project Structure

```text
src/
├── components/
│   └── ProtectedRoute.tsx
├── pages/
│   ├── Dashboard.tsx
│   └── Login.tsx
├── firebase.ts
├── App.tsx
├── main.tsx
└── style.css

firestore.rules
README.md
SUBMISSION_NOTES.md
```

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
cd rbac-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Firebase Project

Create a new Firebase project from Firebase Console.

### 4. Enable Authentication

Go to:

Authentication → Sign-in Method → Email/Password → Enable

### 5. Create Firestore Database

Go to:

Firestore Database → Create Database

Select test mode during development.

### 6. Configure Firebase

Open:

```text
src/firebase.ts
```

Replace the placeholder values with your Firebase configuration:

```ts
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 7. Deploy Firestore Rules

Open Firebase Console:

Firestore Database → Rules

Paste the contents of:

```text
firestore.rules
```

Publish the rules.

### 8. Run Application

```bash
npm run dev
```

Application will start on:

```text
http://localhost:5173
```

## Test Accounts

Create two users:

### Admin

```text
Email: admin@example.com
Password: password123
Role: admin
```

### Viewer

```text
Email: viewer@example.com
Password: password123
Role: viewer
```

## Role Behaviour

### Admin

* Can view own profile
* Can view all users stored in Firestore

### Viewer

* Can view only their own profile
* Cannot access other user documents

## Security

Access control is enforced using Firestore Security Rules.

Frontend checks are used only for displaying UI. Actual data protection is implemented through Firestore Security Rules to prevent unauthorized access.

## Assumptions

* Role selection during signup is used only for demonstration purposes.
* No custom backend is used.
* UI styling is intentionally minimal to focus on functionality.

## Build for Production

```bash
npm run build
```

The production build will be generated inside the `dist` folder.
