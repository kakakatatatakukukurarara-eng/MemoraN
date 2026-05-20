type WordCardProps = {
  word: string;
  meaning: string;
  deck: string;
  status: string;
};

function WordCard({ word, meaning, deck, status }: WordCardProps) {
  return (
    <div className="word-card">
      <div className="card-top">
        <span className="deck-badge">{deck}</span>

        <span className="status-badge-card">{status}</span>
      </div>

      <div className="card-content">
        <h2>{word}</h2>

        <p>{meaning}</p>
      </div>
    </div>
  );
}

export default WordCard;
