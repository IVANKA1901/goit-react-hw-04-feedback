import { useState } from 'react';
import { Container } from './Container/Container';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from '../components/Feedback/Feedback.module.css';

const BUTTONS = {
  Good: 'good',
  Neutral: 'neutral',
  Bad: 'bad',
};

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case BUTTONS.Good:
        setGood(good => good + 1);
        break;

      case BUTTONS.Neutral:
        setNeutral(neutral => neutral + 1);
        break;
      case BUTTONS.Bad:
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.values(BUTTONS)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </Container>
  );
}
