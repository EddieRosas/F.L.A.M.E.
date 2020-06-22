import React from 'react';
import { Button } from 'react-bootstrap';
import './ask_post.css'

class AskPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      postType: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    this.props.createPost(this.state);
     //.then(() => this.props.changeModalStatusForAsk(false));
  }

  render() {
    return (
      <div className="ask-post-form">
        <p className="ask-post-title">Create New Post</p>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            className="new-post-title"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <br />
          <label>Body</label>
          <input
            type="text"
            className="new-post-description"
            value={this.state.description}
            onChange={this.update("description")}
          />
          <br />
          <select 
            onChange={this.update("postType")}
            className="ask-post-select"
          >
            <option
              value=""
              disabled
              selected={this.state.postType === "" ? "selected" : ""}
            >
              Choose Post Type
            </option>
            <option value="0">Question</option>
            <option value="1">Story</option>
          </select>
          <Button
            variant="outline-dark"
            className="new-post-btn"
            type="submit"
          >
            Submit your post!
          </Button>
        </form>
      </div>
    );
  }

}

export default AskPost;