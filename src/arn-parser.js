import {
  InvalidArnError
} from './errors'
import {components} from './constants'

export default function parseArn(arnString) {

  let arn = {},
    segmentExtract = /([\w\-\.\*]*)\:(.*)/,
    arnStringCarry = arnString

  components.forEach(segment => {
    if (segment === 'resource') {
      return arn[segment] = arnStringCarry
    }
    let res = segmentExtract.exec(arnStringCarry)
    if (!Array.isArray(res)) {
      throw new InvalidArnError('Could not extract all segments of Arn.')
    }
    arn[segment] = res[1]
    arnStringCarry = res[2]
  })

  arn.resourceArr = arn.resource.split(/\/|\:/)

  return arn

}
