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
            <Card key={blog.id}>
              <Card.Header>
                <p>Title: {blog.title}</p>
              </Card.Header>
              <Card.Body>
                <p>Text: {blog.text}</p>
              </Card.Body>
            </Card>
          );
        })}
        <br />
      </div>
    );
  }
}

export default BlogPosts;