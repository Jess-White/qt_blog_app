import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blogs: [],
      query: '',
    };
  }
  componentDidMount() {
    axios
      .get('/api/blogs')
      .then((response) => {
        this.setState({
          blogs: response.data,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  // updateBlogs = (newBlog) => {
  //   const blogs = this.state.blogs;
  //   blogs.push(newBlog);
  //   this.setState({
  //     blogs: blogs,
  //   });
  // };

  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    };

    return (
      <div className="component">
        
        {this.state.blogs.map((blog) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg font-mono" key={blog.id}>
              <div>
                <p className="text-xl">Title: {blog.title}</p>
              </div>
              <div>
                <p className="text-base">Text: {blog.text}</p>
              </div>
            </div>
          );
        })}
        <br />
      </div>
    );
  }
}

export default BlogPosts;