import React, { Component } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Form from 'react-bootstrap/Form';

import 'react-quill/dist/quill.snow.css';

class BlogPostNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quill_text: "",
      title: "",
      text: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.quillChange = this.quillChange.bind(this);
  }

  clearForm = () => {
    this.setState({
      quill_text: "",
      title: "",
      text: ""
    });
  };

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  quillChange(value) {
    this.setState({ quill_text: value})
  }

  handleSubmit(event) {
    const {
      title, quill_text
    } = this.state;
    axios
      .post('/api/blogs', {
        title: title,
        text: quill_text
      },
      {headers: { Authorization: `Bearer ${localStorage.token}` }})
      .then((response) => {
        if (response.data) {
          this.props.updateBlogs(response.data);
          this.clearForm();
        };
      })
      .catch((error) => {
        console.log('blog creation error', error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Label>Text</Form.Label>
            <ReactQuill 
              value={this.state.quill_text}
              onChange={this.quillChange}  
            />
            <div className="text-center">
              <button type="submit">
                Add New Blog Post
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default BlogPostNew;