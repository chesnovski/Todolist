import React, { useState } from 'react' ;
import TODOForm from './TODOForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {Card, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'20px',
    }
   
  }));


function TODO ({todos, completeTodo,removeTodo, updateTodo})   {
    const classes = useStyles();
    const [edit, setEdit]= useState ({
        id:null,
        value:''
    })
    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }

    if (edit.id) {
        return < TODOForm edit={edit } onSubmit= {submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <Card className={classes.root} >
            <CardContent>
                
            <div className={ todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index}>

          <div key={todo.id} onClick ={() => completeTodo (todo.id)} >
              {todo.text}
              </div> 
         
           <div className= "icons">
               <RiCloseCircleLine
                onClick={()=> removeTodo(todo.id)}
                className='delete-icon'
                    /> 
               <TiEdit onClick={()=> setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'/> 

           </div> 
        
       </div>

            </CardContent>
        
         



        </Card>
        
    ) 
       
    
    )
}
export default TODO;
 