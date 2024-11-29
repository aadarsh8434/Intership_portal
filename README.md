# Internship Portal

This **Internship Portal** is a web application that allows students to sign up, log in, view available internship opportunities, and apply to various companies. The portal displays a list of companies with the available roles, and allows users to apply for internships. The system also shows how many students have applied for each company’s role.
## Features

- **User Signup**: New users can sign up to create an account.
- **User Login**: Existing users can log in using their username and password.
- **Company Listing**: Displays a list of companies offering internships along with their roles.
- **Apply for Internship**: Allows users to apply for available internship positions.
- **Application Count**: Shows how many users have applied to a specific internship role.

## Technologies Used

### Frontend:
- HTML
- CSS
- JavaScript
- React (for dynamic user interfaces)

### Backend:
- Node.js
- Express.js
- MongoDB (for storing user and application data)
## Installation

### Prerequisites:
1. Node.js (v14 or above) installed
2. MongoDB installed or a MongoDB cloud account for a remote database
3. Git installed for version control

### Steps to Set Up:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/internship-portal.git
    ```

2. Navigate to the project directory:
    ```bash
    cd internship-portal
    ```

3. **Install Backend Dependencies**:
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install required packages:
      ```bash
      npm install
      ```

4. **Set Up Frontend**:
    - Navigate to the `frontend` directory:
      ```bash
      cd ../frontend
      ```
    - Install required packages:
      ```bash
      npm install
      ```

5. **Environment Variables**:
    - Create a `.env` file in the `backend` directory and add your MongoDB URI:
      ```bash
      MONGO_URI=your-mongodb-uri
      ```

6. **Start the Application**:
    - Start the backend server:
      ```bash
      cd ../backend
      npm start
      ```
    - Start the frontend development server:
      ```bash
      cd ../frontend
      npm start
      ```

7. Visit `http://localhost:3000` in your browser to view the application.
## Usage

### Signup and Login:

- **Signup**: Navigate to the **Sign Up** page to create an account. Enter your details such as username, email, and password.
- **Login**: After signing up, navigate to the **Login** page and enter your username and password to access the portal.

### Browse Available Internships:

- Once logged in, you will see a list of companies and their available internship roles.
- You can view the role descriptions and the number of applications already received.

### Apply for an Internship:

- Click on the **Apply** button next to the role you wish to apply for.
- The number of applications for that role will increase.

