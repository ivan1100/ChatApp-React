import { Component } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Input extends Component {
  state = {
    newMessageText: "",
    errorMessage: "",
  };

  editMessageText(e) {
    this.setState({ newMessageText: e.target.value });
  }

  submitMessage(e) {
    e.preventDefault();
    if (this.state.newMessageText.trim() === "") {
      this.setState({ errorMessage: "Poruka ne može biti prazna." });
    } else {
      this.setState({ newMessageText: "", errorMessage: "" });
      this.props.onSendMessage(this.state.newMessageText);
    }
  }

  render() {
    return (
      <div className="Input">
        {this.state.errorMessage && (
          <p className="error-message">{this.state.errorMessage}</p>
        )}
        <form onSubmit={(e) => this.submitMessage(e)}>
          <input
            onChange={(e) => this.editMessageText(e)}
            value={this.state.newMessageText}
            type="text"
            placeholder="Napišite svoju poruku"
            autoFocus={true}
          />

          <button>
            Pošalji <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
