import React from 'react';
import Button from 'react-bootstrap/Button';
import './new_reply.css'

class NewReply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      postId: this.props.postId,
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.createReply(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  loggedIn() {
    return (
      <div className="new-replies-form">
        <p className="new-reply-title">Add New Reply</p>
        <form onSubmit={this.handleSubmit}>
          <label>Reply</label>
          <input onChange={this.update("description")} 
                 className="new-replies-textbox"
          />
          <Button type="submit" 
                  variant="outline-secondary"
          >
            Add New Reply
          </Button>
        </form>
      </div>
    );
  }


  render() {
    const { currentUser } = this.props;
    return (
      <div>
        {
          currentUser ? this.loggedIn() : ""
        }
      </div>
    )
  }
}

export default NewReply;