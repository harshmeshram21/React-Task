import React, { useState } from "react";

function Vote() {
  const [vote, setVote] = useState([0, 0, 0]);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [voteMessage, setVoteMessage] = useState("");

  const bjpVote = () => {
    setVote([vote[0] + 1, vote[1], vote[2]]);
    setVoteMessage("voted for BJP");
    setTimeout(() => setVoteMessage(""), 1000);
  };

  const incVote = () => {
    setVote([vote[0], vote[1] + 1, vote[2]]);
    setVoteMessage("voted for INC");
    setTimeout(() => setVoteMessage(""), 1000);
  };

  const aapVote = () => {
    setVote([vote[0], vote[1], vote[2] + 1]);
    setVoteMessage("voted for AAP");
    setTimeout(() => setVoteMessage(""), 1000);
  };

  const reset = () => {
    setVote([0, 0, 0]);
    setWinnerMessage("All parties have 0 votes.");
  };

  const winner = () => {
    const maxVote = Math.max(...vote);
    const maxIndex = vote.indexOf(maxVote);
    return { maxVote, maxIndex };
  };

  const declareWinner = () => {
    const { maxVote, maxIndex } = winner();

    if (vote[0] === vote[1] && vote[2] === vote[0] && vote[1] === vote[2]) {
      setWinnerMessage("All parties have same votes");
    } else {
      if (maxVote !== 0) {
        switch (maxIndex) {
          case 0:
            setWinnerMessage(`BJP wins with ${maxVote} votes`);
            break;
          case 1:
            setWinnerMessage(`INC wins with ${maxVote} votes`);
            break;
          case 2:
            setWinnerMessage(`AAP wins with ${maxVote} votes`);
            break;
          default:
            setWinnerMessage("No votes yet.");
        }
      } else {
        setWinnerMessage("All parties have 0 votes.");
      }
    }
  };

  return (
    <div className="voteContainer">
      <div className="VoteBox">
        <div className="vmessage">
          <p>
            <strong>{voteMessage}</strong>
          </p>
        </div>
        <div className="logoBtn">
          <button id="bjpBtn" className="voteBtn" onClick={bjpVote}></button>
          <button id="incBtn" className="voteBtn" onClick={incVote}></button>
          <button id="aapBtn" className="voteBtn" onClick={aapVote}></button>
        </div>
        <div className="btns">
          <button className="declarBtn" onClick={declareWinner}>
            Declare the Winner
          </button>
          <button className="resetBtn" onClick={reset}>
            Reset
          </button>
        </div>
        <div>
          <h3>{winnerMessage}</h3>
        </div>
      </div>
    </div>
  );
}

export default Vote;
