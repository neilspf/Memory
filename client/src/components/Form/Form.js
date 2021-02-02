import React,{useState} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts'
import useStyles from './style'
const Form=()=>{
    //const classes = useStyles();
    const classes = useStyles();
    const [postData,setPostData]=useState({
        creator:'',title:'',message: ' ',tags:'',selectedFile:' '
    })
    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(createPost(postData))
    }
    const clear=()=>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullwidth="true" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
            <TextField name="title" variant="outlined" label="title" fullwidth="true" value={postData.title} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
            <TextField name="message" variant="outlined" label="message" fullwidth="true" value={postData.message} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
            <TextField name="tags" variant="outlined" label="tags" fullwidth="true" value={postData.tags} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
            <div >
                <FileBase type="file" multiple={false} onDone={({base64}) =>setPostData({ ...postData,selectedFile:base64})}/>
                <Button variant="contained" color="primary" size="large" type="submit" fullwidth="true">submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth="true">clear</Button>
            </div>

            </form>
        </Paper>
    )
}
export default Form;