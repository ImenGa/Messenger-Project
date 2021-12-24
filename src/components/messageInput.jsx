import React, { Component } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mon_message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ mon_message: event.target.value });
  }

  sendMessage = async (message) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "imene",
        content: message,
      }),
    };
    await fetch("http://localhost:777/EnvoyezMonMessage", options);
  };

  render() {
    return (
      <Input.Group
        compact
        style={{
          position: "fixed",
          bottom: 0,
          marginBottom: 20,
          marginTop: 20,
        }}
        size="large"
      >
        <Input
          style={{ width: "600px" }}
          value={this.state.mon_message}
          onChange={this.handleChange}
        />
        <Button
          type="primary"
          size="large"
          onClick={(e) => {
            this.sendMessage(this.state.mon_message);
            this.setState({ mon_message: "" });
          }}
        >
          <SendOutlined />
        </Button>
      </Input.Group>
    );
  }
}
export default MessageInput;
