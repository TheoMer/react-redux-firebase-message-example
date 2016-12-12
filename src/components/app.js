import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import MessageItem from './message_item';

function mapStateToProps(state) {
  return { messages: state.messageList };
}

const mapDispatchToProps = (dispatch) => {
  const { fetchMessagesListener, createMessage, updateMessage,
          deleteMessage } = actions;
  return {
    fetchMessagesListener: bindActionCreators(fetchMessagesListener, dispatch),
    createMessage: bindActionCreators(createMessage, dispatch),
    updateMessage: bindActionCreators(updateMessage, dispatch),
    deleteMessage: bindActionCreators(deleteMessage, dispatch)
  };
};

class App extends Component {

  state = {
    //top form post
    post: ''
  };

  componentWillMount() {
    this.props.fetchMessagesListener();
  }

  handleInputChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      post: value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { post } = this.state;
    const { createMessage } = this.props;
    if(post !== ''){
      createMessage(post);
      this.setState({
        post: ''
      });
    }
  };

  renderMessageList = () => {
    const { messages } = this.props;
    let idx = 0;
    return _.map(messages, (msg, key) => {
        const msgItem =  <MessageItem key={idx}
                                      message={msg}
                                      id={key} />;
        idx++;
        return msgItem;
    });
  };

  render() {
    let { post } = this.state;
    return (
      <div className="row">
        <div className="push-2 col-8 pull-2">

        <h4>Write a Message</h4>

        <form onSubmit={ this.handleFormSubmit }
              className="form-inline user-message">
          <div className="form-group">

              <div className="col-9">
                <input type="text"
                       className="form-control"
                       placeholder="your thoughts here"
                       value={ post}
                       onChange={ this.handleInputChange } />
              </div>

              <div className="col-3">
                <button name="submit"
                        action="submit"
                        className="btn btn-primary submit-message">
                  Send
                </button>
              </div>

            </div>
        </form>

        <ul className="message-list">
          { this.renderMessageList() }
        </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
