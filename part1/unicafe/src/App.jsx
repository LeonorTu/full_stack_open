import { useState } from "react";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{text === "positive" ? `${value}%` : value}</td>
      </tr>
    );
  };

  const Statistics = ({ good, neutral, bad }) => {
    if (good == 0 && neutral == 0 && bad == 0)
      return <div>No feedback given</div>;
    const all = good + neutral + bad;
    const average = (good - bad) / all || 0;
    const positive = (good / all) * 100 || 0;
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average.toFixed(1)} />
            <StatisticLine text="positive" value={positive.toFixed(1)} />
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={increaseGood}>good</button>
        <button onClick={increaseNeutral}>neutral</button>
        <button onClick={increaseBad}>bad</button>
        <h1>statistics</h1>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
