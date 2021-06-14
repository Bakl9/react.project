import React from 'react'

export default function Todoitem({ todo,i }) {
return (
    <li>
     <strong>{i}</strong>{todo.title}
     </li>

)
} 