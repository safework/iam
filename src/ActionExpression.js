import isMatch from 'is-match'

import {
  InvalidActionExpressionError
} from './errors'

export default class ActionExpression {

  constructor(actionExpression) {
    Object.assign(this, {
      actionExpression: this.processActionExpression(actionExpression)
    })
  }

  processActionExpression(actionExpression) {
    return isMatch(actionExpression)
  }

  matches(action) {
    return this.actionExpression(action)
  }
}
