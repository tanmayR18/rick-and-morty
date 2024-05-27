import React, { useState } from 'react'

const Todo = () => {
    const [ todos, setTodos ] = useState([])
    const [todo , setTodo ] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos((prevState) => [...prevState, todo])
        console.log("Here is the todo")
    }

  return (
    <div className=' py-[78px] flex justify-center items-center h-[calc(100vh-78px)]'>

        <div className=' flex items-center flex-col gap-5'>
            <form onSubmit={submitHandler}  className=' text-black border p-2 rounded-xl'>
                <input 
                className=' appearance-none border-none focus:border-none outline-none focus:outline-none'
                value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Add a todo' />

                <button type="submit" className=' p-2 bg-blue-500 rounded-xl text-white'>
                    Submit
                </button>
            </form>

            <div>
                {
                    todos.length <= 0 ? <div>No  todos</div> : 
                    <div>
                        {
                            todos.map( (item, index) => (
                                <p key={index}>
                                    {item}
                                </p>
                            ))
                        }
                    </div>

                }
            </div>
        </div>
    </div>
  )
}

export default Todo