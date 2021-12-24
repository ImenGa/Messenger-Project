import React, { Component } from "react";
import "antd/dist/antd.css";
import MessageInput from "./components/messageInput";
import MessageList from "./components/messageList";
import store from "./redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ width: "600px", margin: "auto" }}>
          <MessageList />
          <MessageInput />
        </div>
      </Provider>
    );
  }
}

export default App;
