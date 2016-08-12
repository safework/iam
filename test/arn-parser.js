
import Arn from '../src/Arn'

describe('Arn parser', () => {

  it('should parse arn successfully', async () => {
    let arnString = 'arn:aws:cloudtrail:us-east-1:123456789012:trail/mytrailname'
    let arn = await Arn.parse(arnString)
    arn.should.deepEqual(new Arn({
      arn: 'arn',
      partition: 'aws',
      service: 'cloudtrail',
      region: 'us-east-1',
      tenant: '123456789012',
      resource: 'trail/mytrailname',
      resourceArr: [
        'trail',
        'mytrailname'
      ]
    }))
  })

  it('should parse arn with long resource string successfully', async () => {
    let arnString = 'arn:aws:autoscaling:us-east-1:123456789012:scalingPolicy:c7a27f55-d35e-4153-b044-8ca9155fc467:autoScalingGroupName/my-test-asg1:policyName/my-scaleout-policy'
    let arn = await Arn.parse(arnString)
    arn.should.deepEqual(new Arn({
      arn: 'arn',
      partition: 'aws',
      service: 'autoscaling',
      region: 'us-east-1',
      tenant: '123456789012',
      resource: 'scalingPolicy:c7a27f55-d35e-4153-b044-8ca9155fc467:autoScalingGroupName/my-test-asg1:policyName/my-scaleout-policy',
      resourceArr: [
        'scalingPolicy',
        'c7a27f55-d35e-4153-b044-8ca9155fc467',
        'autoScalingGroupName',
        'my-test-asg1',
        'policyName',
        'my-scaleout-policy'
      ]
    }))
  })

})
