import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoteIndex, setMostVoteIndex] = useState(undefined);

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const countVotes = ({ votes, selected }) => {
    let updatedVotes = [...votes];
    updatedVotes[selected]++;
    setVotes(updatedVotes);
    setMostVoteIndex(updatedVotes.indexOf(Math.max(...updatedVotes)));
  };

  const displayMostVotes = () => {
    if (mostVoteIndex !== undefined) {
      return (
        <div>
          <h1>Anedote with most votes</h1>
          <p>{anecdotes[mostVoteIndex]}</p>
          <p>has {votes[mostVoteIndex]} votes</p>
        </div>
      );
    }
    return;
  };

  return (
    <div>
      <div>
        <h1>Anedote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={() => countVotes({ votes, selected })}>vote</button>
        <button onClick={selectRandom}>next anecdote</button>
      </div>
      {displayMostVotes()}
    </div>
  );
};

export default App;
