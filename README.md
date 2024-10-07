# Job List App

This is a Job List application built using [Next.js](https://nextjs.org/), [Formik](https://formik.org/), and [SQLite](https://www.sqlite.org/index.html). It allows users to view job listings and manage job-related data. The project uses TypeScript and SQLite for data storage.

## Features
- **Job Listings**: View a list of job postings.
- **Formik for Forms**: Efficient and validated forms for adding job postings.
- **SQLite**: Lightweight database to store and retrieve job information.
- **Next.js**: React framework for server-side rendering and optimized performance.
- **TypeScript**: Type safety and enhanced developer experience.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) v18.20.3
- npm or yarn (npm is used in this project)

## Getting Started

### Clone the repository

git clone https://github.com/yourusername/job-list-app.git
cd job-list-app

## Install dependencies

Make sure to install the necessary dependencies by running:

`npm install`

This will install all the required libraries for React, Next.js, and other dependencies.

## Set up the database
Run the seed script to populate the database with static data. This will create an SQLite database and seed it with initial job data.

`ts-node scripts/seed.ts`

This command will use ts-node to execute the TypeScript seed file, inserting predefined job listings into the SQLite database.

## Running the development server
After installing dependencies and seeding the database, start the development server using the following command -

`npm run dev`

This will start the application in development mode. You can now open http://localhost:3000 in your browser to view the app.

## Node.js Version
Ensure you are using Node.js v18.20.3. You can check your current Node version by running:

`node -v`

If you are not on the correct version, consider using nvm to manage Node versions.

## Technologies Used
Next.js: Framework for server-side rendering and static site generation.
Formik: For form management and validation.
SQLite: A lightweight, file-based SQL database.
TypeScript: Static typing for JavaScript.
