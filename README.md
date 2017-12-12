# iam

## purpose

This is a library that handles checking permissions and roles of users. It is inspired by the AWS ARN's and role management. It allows for fine grained control of permissions, such as targeting a single property in an object.

## structure

There are a few classes to understand:

#### Arn

An Arn is a string that identifies a resource or sub-resource. The allowable format can be viewed in [the validator](src/arn-validator.js).

#### ArnExpression

An ArnExpression is a [micromatch](https://www.npmjs.com/package/micromatch) expression used to target or matach a Arn or group of Arns. The allowable format can be viewed in [the validator](src/arn-validator.js).

#### ActionExpression

An ActionExpression is a [micromatch](https://www.npmjs.com/package/micromatch) expression used to target or matach an Action or group of Actions. It is a thin wrapper over the `micromatch` library with no validation.

#### Role

A Role brings all of the above classes together. A Role is made up of a number of Statements. A statement is made up of three elements:

- Effect, either `Allow` or `Deny` for the `Action` on `Resource`.
- Action, an ActionExpression that identifies the `Action` on `Resource`.
- Resource, an ArnExpression that identifies the `Resource`.

Once a role is constructed you can call `isAuthorized` providing the action (arbitrary string) and resource (Arn).

## development

This is a library that exposes a number of classes, so there are no specifics to development.

## how to publish

This library can be published via standard npm publishing mechanism (bump version and run `npm publish`). You will need access to the `@lrg` org on npm in your console as this package is namespace there.

There is currently no integration to any sort of CI.
