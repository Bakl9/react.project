import React from 'react'

export default function Todoitem({ todo,i }) {
return (
    <li>
<strong>{i + 1}</strong>{todo.title}
     </li>

)
} 
