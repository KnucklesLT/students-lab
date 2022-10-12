const Scores = ({scores}) => {
  return (  
    <>
      {scores.map(score => 
        <div key={score.date}>
          <h3 >{score.date}</h3>
          <h2>{score.score}</h2>
        </div>
      )}
    </>
  );
}

export default Scores;