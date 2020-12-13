# all-the-lights-favorites
[![Latest Release](https://img.shields.io/github/v/release/Ubunfu/all-the-lights-favorites)](https://github.com/Ubunfu/all-the-lights-favorites/releases)
[![codecov](https://codecov.io/gh/Ubunfu/all-the-lights-favorites/branch/master/graph/badge.svg?token=)](https://codecov.io/gh/Ubunfu/all-the-lights-favorites)
[![CircleCI](https://img.shields.io/circleci/build/github/Ubunfu/all-the-lights-favorites?logo=circleci)](https://app.circleci.com/pipelines/github/Ubunfu/all-the-lights-favorites)
![Contrubutors](https://img.shields.io/github/contributors/Ubunfu/all-the-lights-favorites?color=blue)
![Last Commit](https://img.shields.io/github/last-commit/Ubunfu/all-the-lights-favorites)

The backend favorites API for all-the-lights

This service runs as an AWS lambda function.

## Configuration
### IAM Role
AWS's standard IAM role for Lambda micro services is plenty sufficient. The only access that is required is read/write for DynamoDB, and write to CloudWatch logs.

* AWSLambdaMicroserviceExecutionRole
* AWSLambdaBasicExecutionRole

### Environment Variables
| Parameter          | Description                                                                       | Default | Required? |
|--------------------|-----------------------------------------------------------------------------------|---------|-----------|
| LOGGER_ENABLED     | Enable app logging? (true / false)                                                | n/a     | Yes       |
