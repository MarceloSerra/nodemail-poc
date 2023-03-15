### A SIMPLE NODEMAIL POC

## Dependencies

- Nodemailer
- Express
- Body Parser
- Dotenv
- Nodemon

## Setup

- Configure your `.env` file using `.env.example` as reference
- Run `npm install` to install the dependencies
- Run `npm start` to start the app
- Run `curl localhost:<port>/v1/healthcheck` or any prefered client to test the app

## Sending Emails

- The endpoint accepts the following field args for now: _to, subject, text, html_
- Run `curl -X POST localhost:3000/v1/email/send -H 'Content-Type: application/json' -d '{"to": "<your@mail.com>","subject": "<message>"}'` or any prefered client to test
