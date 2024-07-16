# Task Manager

## Overview

This Task Manager Web App is a robust application built using TypeScript, allowing users to efficiently manage their tasks. The app supports task creation, status management, and prioritization, ensuring users can keep track of their tasks effectively.

## Features

- **Task Creation**: Users can create new tasks with a title, description, due date, status, and priority.
- **Task Management**: Existing tasks display with a priority color border, a status toggle, and the ability to be marked as complete.
- **Database Interaction**: Utilizes TypeORM for seamless interactions with a MySQL database.
- **Responsive Design**: Styled using Material-UI to provide a responsive and visually appealing user interface.

## Technologies Used

- **Frontend**: React.js, TypeScript, Material-UI
- **Backend**: Express.js, Node.js
- **Database**: MySQL, TypeORM

## Installation

### Prerequisites

- Node.js
- npm
- MySQL

### Steps

If you haven't already, make sure you have Node.js and NVM installed.

1. **Install Node Version Manager (NVM)**
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.

2. **Open a new terminal**

3. **Install the latest version of [Node.js](https://nodejs.org/en/)**
   ```
   nvm install 20
   ```

### Set up the project

1. **Fork this repository.**
   
3. **Rename the fork to your preferred name.**
   
4. **Clone the fork to your local machine.**
   
5. **Install dependencies for both the `frontend` and `api` applications:**
   
   ```
   cd frontend
   npm install
   cd ../api
   npm install
   ```
   
6. **Install an ESLint plugin for your editor**, for example [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   
7. **Install MySQL on your machine**
   
   ```
   brew install mysql
   ```
   
8. **Start MySQL**

   ```
   brew services start mysql
   ```

### Setting up environment variables

You need to create an `.env` file in the api.

Create a file `api/.env` with the following contents:

```
PORT=3200
MYSQL_USER=root
MYSQL_PASSWORD="<your_db_password_here>"
MYSQL_DB=task_manager
```

### How to run the server and use the app

1. **Start the server application (in the `api` directory) in dev mode:**

```
; cd api
; npm run dev
```

2. **Start the front end application (in the `frontend` directory)**

In a new terminal session...

```
; cd frontend
; npm start
```


You can now navigate to `http://localhost:3000` to reach the Task Manager web app.

