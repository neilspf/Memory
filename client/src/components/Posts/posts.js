import React from 'react';
import {useSelector} from 'react-redux';
import useStyles from './style';
    
const Posts=()=>{
    const classes = useStyles();
    const posts = useSelector((state)=>state.posts);
    console.log(posts)
    return(
        <post/>
    )
}
export default Posts;