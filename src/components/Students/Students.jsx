import Scores from "../Scores/Scores";

const Students = ({students}) => {
  return (  
    <>
      {students.map(student => 
        <div key={student.name}>
          <h1>{student.name}</h1>
          <p>{student.bio}</p>
          <Scores scores={student.scores} />
        </div>
        )}
    </>
  );
}
export default Students;