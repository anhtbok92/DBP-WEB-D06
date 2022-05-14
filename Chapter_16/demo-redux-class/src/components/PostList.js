import {Component} from "react";
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";

class PostList extends Component {
    componentDidMount() {
        // call API fetchPost
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;
        console.log('posts-in-component', posts);
        return (
            <>
                <h2>Hiển thị danh sách các bài post lấy từ store ở đây: </h2>
                <div>
                    {posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <h2>Title: {post.title}</h2>
                                <h2>Body: {post.body}</h2>
                                <br />
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}


// mapStateToProps -> Lấy dữ liệu từ store trả về cho components dưới dạng props của component
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);

// Flow run of Redux
// 1. Run vào index.js => khởi tạo store
// 2. Trong store gọi đến reducer
// 3. Reducer được kích hoạt bởi Actions (dispatch)
// 4. Action được kích hoạt trong component bởi mapDispatchToProps
// 5. store trong data được lấy ra trong component được kích hoạt bởi hàm mapStateToProps