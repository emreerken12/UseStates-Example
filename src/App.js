
import { useState } from 'react';
import './App.css';
import Course from './Course';

function selectCourse(){
  const courseArray = ["Angular", "Boostrap", "Csharp" , "KompleWeb"];
  return courseArray[Math.floor(Math.random()*courseArray.length)] ;
}

function App() {
  const [courses , setCourses] = useState([])
  const m2 = ()=>{
    setCourses([...courses, selectCourse()])
  };

const selectList =  courses.map((courses,values)=>{
  return <Course key = {values} courseName = {courses} /> ;
});


  return (
    <div className="App">
    <button className='buton' onClick={m2}>Kurs Ekle</button>
<div className='selectlist'>{selectList}</div>
    </div>
  );
}

export default App;
