import {
  InvalidStatmentError
} from './errors'

import ActionExpression from './ActionExpression'
import ArnExpression from './ArnExpression'

export default class Role {

  constructor({name, Statement}) {
    Object.assign(this, {
      name,
      Statement: this.processStatement(Statement)
    })
  }

  processStatement(Statement) {
    const statement = []
    for(const {Effect, Action, Resource} of Statement) {
      if (!['Allow', 'Deny'].includes(Effect)) {
        throw InvalidStatmentError(`Effect must be 'Allow' or 'Deny', supplied: ${Effect}`)
      }
      statement.push({
        Effect,
        Action: new ActionExpression(Action),
        Resource: ArnExpression.parse(Resource)
      })
    }
    return statement
  }

  isAuthorized(action, resource) {
    let isAuthorized = false
    for(let {Effect, Action, Resource} of this.Statement) {
      if (Action.matches(action) && Resource.matches(resource)) {
        if (Effect === 'Deny') return false
        isAuthorized = true
      }
    }
    return isAuthorized
  }

}
