import React from 'react'

const Course = ({course}) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = ({course}) => {
    return(
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part, i) => 
            <Part key={part.id} part={part}/>
        )}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return(
    
      <p>{part.name} {part.exercises}</p>
    
    )
  }
  
  const Total = ({parts}) => {
    console.log(parts)
    console.log(parts[0].exercises);
    const sum = parts.reduce((s, p) => s + p.exercises , 0)
    return(
    
      <b> 
        Number of exercises {sum}
      </b>
    
    )
  }

  export default Course