import React from 'react';
//form a nice grid and a loading spinner
import { Grid, CircularProgress } from '@material-ui/core';
//fetch data from store
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    //if post length is 0 show circular progress if not show grid
    //props drilling in line 20: continuously sending props
    return (
    !posts.length ? <CircularProgress/> : (
    <Grid className={classes.container} container alignItems="stretch" spacing ={3}>
    {posts.map((post) => (
    <Grid key={post._id} item xs={12} sm={6}>

    <Post post={post} setCurrentId={setCurrentId}  />
    </Grid>
))}
</Grid>
)
);
};

export default Posts;