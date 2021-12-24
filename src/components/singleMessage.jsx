import React, { Component } from "react";
import { Comment, Avatar } from "antd";

class singleMessage extends Component {
  render() {
    return (
      <div>
        <Comment
          author={<a>{this.props.name}</a>}
          avatar={
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              alt={this.props.name}
            />
          }
          content={<p>{this.props.content}</p>}
        ></Comment>
      </div>
    );
  }
}
export default singleMessage;
