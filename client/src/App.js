import React, { useState, useEffect } from 'react';
//import components to be used from material-ui
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//import  hook
import { useDispatch } from 'react-redux';
//import actions
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import codeCAT from './images/codeCAT.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  //specify and call dispatch
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" style={{backgroundColor:'#DBEEC4'}}>
        {/* <Typography className={classes.heading} variant="h2" align="center">codeCAT</Typography> */}
        <img src={codeCAT} alt="codeCAT" height="100" />
      </AppBar>
      <Grow in>
      <Container>
          <Grid className={classes.mainContainer} container justify="space-between"alignItems="stretch"spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
