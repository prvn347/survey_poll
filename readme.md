# Survey Poll Web App

This is a survey poll web app built with React, Prisma, PostgreSQL, Node.js, Express, Zod for validation, and Tailwind CSS.

## Features

- **Create Survey Polls:** Users can create survey polls.
- **Vote on Polls:** Users can vote on published survey polls.
- **Single Vote Limit:** Users can only vote once on each question and survey.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod
- **Styling:** Tailwind CSS

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/prvn347/survey_poll.git

    ```

2.  **Install dependencies:**
    ```bash
    cd survey_poll
    npm install
    ```
3.  **Set up the database:**
    Create a PostgreSQL database
    Update the connection URL in the Prisma schema file (schema.prisma)

    ```bash
        npx prisma migrate dev

    ```

4.  **Start the server**

    ```bash
        npm run dev
    ```
