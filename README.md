# Student Exam Scores API

At http://live-test-scores.herokuapp.com/scores you'll find a service that follows the [Server-Sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html) protocol. You can connect to the service using cURL:

        curl http://live-test-scores.herokuapp.com/scores

Periodically, you'll receive a JSON payload that represents a student's test score (a JavaScript number between 0 and 1), the exam number, and a student ID that uniquely identifies a student. For example:


        event: score
        data: {"exam": 3, "studentId": "foo", score: .991}

This represents that student foo received a score of `.991` on exam #3.

The application consumes this data, processes it, and provides a simple REST API that exposes the processed results.

## REST API documentation:

`GET`:
   * `/students` lists all users that have received at least one test score
   * `/students/{id}` lists the test results for the specified student, and provides the student's average score across all exams
   * `/exams` lists all the exams that have been recorded
   * `/exams/{number}` lists all the results for the specified exam, and provides the average score across all students
   * `/scores` lists all the scores of student exams

### Notes

Results are stored in memory instead of persisted in a database as an example.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project uses the latest ES2015+ syntax, so it requires [Node](https://nodejs.org/) V8+. You can ensure you have the latest Node via [Homebrew](https://brew.sh/):

```sh
brew install node
brew install yarn
```

### Installing

```sh
yarn install
```

### Development

For a live-reloading server on code changes in development:
```sh
yarn devstart
```

Or without live-reloading:
```sh
yarn start
```

Then, open http://localhost:3000/ or other endpoints.
