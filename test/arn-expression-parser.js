
import ArnExpression from '../src/ArnExpression'

describe('Arn expression parser', () => {

  it('should parse arn successfully', async () => {
    let arnExpressionString = 'arn:aws:cloudtrail:us-east-1:123456789012:*/*'
    let arnExpression = await ArnExpression.parse(arnExpressionString)
    arnExpression.should.deepEqual(new ArnExpression({
      arn: 'arn',
      partition: 'aws',
      service: 'cloudtrail',
      region: 'us-east-1',
      tenant: '123456789012',
      resource: '*/*',
      resourceArr: [
        '*',
        '*'
      ]
    }))
  })

  it('should parse arn with long resource string successfully', async () => {
    let arnExpressionString = 'arn:aws:autoscaling:us-east-1:123456789012:scalingPolicy:*:autoScalingGroupName/my-test-asg1:*/*'
    let arnExpression = await ArnExpression.parse(arnExpressionString)
    arnExpression.should.deepEqual(new ArnExpression({
      arn: 'arn',
      partition: 'aws',
      service: 'autoscaling',
      region: 'us-east-1',
      tenant: '123456789012',
      resource: 'scalingPolicy:*:autoScalingGroupName/my-test-asg1:*/*',
      resourceArr: [
        'scalingPolicy',
        '*',
        'autoScalingGroupName',
        'my-test-asg1',
        '*',
        '*'
      ]
    }))
  })

})
