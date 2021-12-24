import React, { Component } from "react";
import SingleMessage from "./singleMessage";
import { connect } from "react-redux";

class MessageList extends Component {
  refrechMessages = async () => {
    try {
      var resp = await fetch("http://localhost:777/ListezMesMessages");
      var data = await resp.json();
      this.props.dispatch({
        type: "setMessages",
        messages: data,
      });
      window.scrollTo(0, document.body.scrollHeight);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    setInterval(() => this.refrechMessages(), 2000);
  };

  render() {
    console.log(this.props.messages);
    return (
      <div
        style={{
          paddingBottom: 60,
        }}
      >
        {this.props.messages.map((el) => (
          <SingleMessage name={el.user_name} content={el.message} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  messages: state,
});

export default connect(mapStateToProps, null)(MessageList);
