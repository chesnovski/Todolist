import React, { useState } from 'react'
import {Grid, Paper} from '@material-ui/core'


const TODOForm = (props) => {
    const [input, setInput] = useState('')
    const handleChange =e => {
        setInput(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() *10000),
            text: input
        })

     setInput ('');
    }

    return (
        <Grid container direction="column" 
        styles={{marginTop: '10rem'}}  >
            <Paper>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" value={input}
                name="text" className='todo-input' onChange={handleChange}  />
            <button className='todo-button'>Add todo</button>
        </form>
            </Paper>
        
         



        </Grid>
        
    
    )
}
export default TODOForm;
 