import React, { useState } from 'react' ;
import TODOForm from './TODOForm'
import {Card, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'20px',
    },

    button: {
        
      },

    
   
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
            <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        
        title="Text"
        subheader="data"
      />
            <CardContent>
                
            <div className={ todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index}>

          <div key={todo.id} onClick ={() => completeTodo (todo.id)} >
              {todo.text}
              </div> 


           <CardActions>
           <IconButton  aria-label="edit" >
          <EditIcon onClick={()=> setEdit({id: todo.id, value: todo.text})}
                className={classes.button} size="small" variant="outlined" color="primary"/>
          </IconButton>
          <IconButton aria-label="remove" >
          <HighlightOffIcon  onClick={()=> removeTodo(todo.id)}
                className={classes.button} size="small" variant="outlined" color="secondary"/>
          </IconButton>
          {/* edit,remove button  */}
           {/* <Button onClick={()=> setEdit({id: todo.id, value: todo.text})}
                className={classes.button} size="small" variant="outlined" color="primary">
          Edit
        </Button>
        <Button  onClick={()=> removeTodo(todo.id)}
                className={classes.button} size="small" variant="outlined" color="secondary">
          Remove
        </Button> */} 
      </CardActions>
        
       </div>

            </CardContent>


            
        
         



        </Card>
        
    ) 
       
    
    )
}
export default TODO;
 