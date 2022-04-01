
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";




const PostPage = ({ dispatch ,loading, posts, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    //show loading error or success state
const renderPosts = () => {
    
    if(loading) return <p> Loading posts.....</p>
    if(hasErrors) return <p>Unable to display posts.....</p>
    return posts.map((post) => <Post  key={post.id} post={post} />)

}


    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}
// we must bring in connect
// that connects the higher order functions
// that connects the redux store to the
// React component

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

//with this function, data is passed down to 'PostPage'
export default connect(mapStateToProps) (PostPage);