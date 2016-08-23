import ExtendableError from 'es6-error'

export class InvalidArnError extends ExtendableError {
  constructor(msg = 'Invalid Arn.') {
    super(msg)
  }
}

export class InvalidArnExpressionError extends ExtendableError {
  constructor(msg = 'Invalid Arn Expression.') {
    super(msg)
  }
}

export class InvalidStatmentError extends ExtendableError {
  constructor(msg = 'Invalid Statement.') {
    super(msg)
  }
}

export class InvalidActionExpressionError extends ExtendableError {
  constructor(msg = 'Invalid Action Expression.') {
    super(msg)
  }
}
