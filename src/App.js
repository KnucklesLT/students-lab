import './App.css';
import { useState } from 'react';
import { studentsList } from './services/studentsList';
import Students from './components/Students/Students';

function App() {
  const [students, setStudents] = useState(studentsList)
  return (
    <>
      <Students students={students}/>
    </>
  );
}

export default App;
