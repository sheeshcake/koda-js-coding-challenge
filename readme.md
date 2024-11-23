# Coding Challenge

## Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v16 or higher recommended)
- **Yarn** (Package manager)

---

## Steps to Run Locally

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

---

### 2. Setting Up the **Server**

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   Or simply:
   ```bash
   yarn
   ```

3. Start the server:
   ```bash
   node server.js
   ```

The server will now be running. Check the terminal for the port (default is often `http://localhost:3001`).

---

### 3. Setting Up the **Web App**

1. Navigate to the `web-app` folder:
   ```bash
   cd ../web-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   Or simply:
   ```bash
   yarn
   ```

3. Start the application:
   ```bash
   yarn start
   ```

The web app will be available in your browser at `http://localhost:3000` by default.

---

### Notes
- Ensure the **server** is running before starting the **web app** for proper API communication.

---
