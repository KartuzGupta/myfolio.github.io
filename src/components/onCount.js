import { CountUp } from 'use-count-up'

const onComplete = () => {
  // do your stuff here
  return { shouldRepeat: false , delay: 2 }
}

const MyComponent = () => (
  <CountUp isCounting end={4378.2} onComplete={onComplete} />
)