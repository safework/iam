
import {components} from './constants'

export default function parseArn(arnString) {

  let arn = {},
    segmentExtract = /([\w\-\.\*]+)\:(.*)/,
    arnStringCarry = arnString

  components.forEach(segment => {
    if (segment === 'resource') {
      return arn[segment] = arnStringCarry
    }
    
    let [ _, value, carry] = segmentExtract.exec(arnStringCarry)
    arn[segment] = value
    arnStringCarry = carry
  })

  arn.resourceArr = arn.resource.split(/\/|\:/)

  return arn

}
