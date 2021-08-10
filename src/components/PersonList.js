import React from 'react'

function PersonList() {
    const PersonList = [
        {
            id: 1,
            name: "Mayank Gupta",
            age: 24,
            skill: "Angular"
        },
        {
            id: 2,
            name: "Mayank Jadhav",
            age: 26,
            skill: "DevOps"
        },
        {
            id: 3,
            name: "Lalit Patware",
            age: 30,
            skill: "React"
        }
    ]
    return (
        <div>
        {
            PersonList.map((person, index) => <h4 key={index}>Hello {index}, I am {person.name}. I am {person.age} year old and I am learning {person.skill}.</h4>)
        }
        </div>
    )
}

export default PersonList
