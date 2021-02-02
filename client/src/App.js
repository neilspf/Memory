import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow, Grid} from '@material-ui/core';
import memories from './images/memories.jpg'
import Posts from './components/Posts/posts.js'
import {getPosts} from './actions/posts'
import Form from './components/Form/Form.js'
import {useDispatch } from 'react-redux';
import useStyles from './style'

const App = () =>{
    const classes = useStyles();
    const dispatch  = useDispatch();
    useEffect( ()=>{
        dispatch(getPosts())
    },[dispatch])
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading}variant="h2" align="center">Memories</Typography>
                <img className={classes.image}src={memories} alt="memories" height="180"/>
            </AppBar>
            <Grow in>
                <Container spacing={3} alignItems="stretch " justify="space-between">
                    <Grid Container   >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>

                    </Grid>

                </Container>
            </Grow>
        </Container>
    );
}
export default App;