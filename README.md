React User Management App

Introduction

This is a simple React application that integrates with the Reqres API to perform basic user management functions like login, fetching users, editing users, and deleting users.

Features

User Login with authentication.

Display a paginated list of users.

Edit user details (first name, last name, email).

Delete users.

Responsive design for both mobile and desktop.

Error handling for API requests.

Technologies Used

React.js

Tailwind CSS for styling

Axios for API requests

React Router for navigation

Installation and Setup

Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

Navigate to the project directory:

cd your-repo-name

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and go to:

http://localhost:5173

API Endpoints Used

Login: POST https://reqres.in/api/login

Get Users: GET https://reqres.in/api/users?page=1

Update User: PUT https://reqres.in/api/users/{id}

Delete User: DELETE https://reqres.in/api/users/{id}

How to Use

Open the app and enter the following credentials to log in:

Email: eve.holt@reqres.in

Password: cityslicka

After login, you will see a list of users.

You can edit a user by clicking the Edit button.

You can delete a user by clicking the Delete button.

Use the Next and Prev buttons to navigate through pages.
