import React from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <br />
          <label>Body</label>
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
          />
          <br />
          <select onChange={this.update("postType")}>
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
          <button type="submit">Submit your post!</button>
        </form>
      </div>
    );
  }

}

export default AskPost;