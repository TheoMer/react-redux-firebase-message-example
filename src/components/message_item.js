import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as actions from '../redux/actions';

const initialState = {
  editable: false,
  content: ''
};

class MessageItem extends Component {

  state = initialState;

  handleEdit = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      content: value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget;
    const { editable,content } = this.state;
    const { id, message, updateMessage, deleteMessage } = this.props;

    if( name === 'delete'){
      deleteMessage(id);
    }
    else if( name === 'edit') {
      if(!editable) {
        this.setState({
          editable:true,
          content: message.text
        });
      }
      else {
        updateMessage(id, content);
        this.setState(initialState);
      }
    }
  }

  render() {
    const { editable, content } = this.state;
    const { message } = this.props;
    const editBtnLabel = (editable === false) ? 'Edit' : 'Save';
    const deleteBtnLabel = 'Delete';
    var msgClasses = classNames({
      'list-group-item': true,
      'edit-mode': editable === true
    });
    var editIconClasses = classNames({
      'icon edit-icon': true,
      'save-icon': editable === true
    });
    return (
      <li className={ msgClasses }>

        { !editable && (
            <span>
              <span className="helper-text">
                {message.user} said:
              </span>
              { message.text}
            </span>
        )}

        { editable && (
          <div>
            <span className="helper-text">
              <span className="edit-icon"></span>
              Editing...
            </span>
            <input type="text"
                   className="form-control"
                   value={ content}
                   onChange={ this.handleEdit } />
          </div>
        )}

        <button
          name="edit"
          onClick={ this.handleClick }
          className="btn edit right">
          <span className={ editIconClasses }></span>
          { editBtnLabel }
        </button>

        <button
          name="delete"
          onClick={ this.handleClick }
          className="btn delete right">
            <span className="icon delete-icon"></span>
           { deleteBtnLabel }
        </button>

      </li>
    );
  }
}

export default connect(
  null,
  actions
)(MessageItem);
