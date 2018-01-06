import React, {Component} from 'react';
import Chat from './Chat';
import ChatBox from './ChatBox';
import {getChatList, updateStore, getDefaultUser, getLoggedUser, generateId} from '../utils';

export default class IMCalc extends Component {
    constructor(props) {
        super(props);
        const chatList = getChatList();
        chatList.push(this.createNewMessage('Lets get started!'));
        this.state = {chatList};
    }

    createNewMessage = (value, isLoggedUser) => {
        const user = isLoggedUser ? getLoggedUser() : getDefaultUser();
        return {
            id: generateId(),
            user,
            text: value
        };        
    }

    newMessageHandler = (value) => {
        this.updateList(this.createNewMessage(value, true));
        if (this.isValid(value)) {
            window.setTimeout(this.handleValidInput, 1000, value);
        } else {
            window.setTimeout(this.handleInvalidInput, 1000);
        }
    };

    isValid = (value) => {
        return value.match(/^[ ]*[0-9]*[ ]*[+*xX:/-][ ]*[0-9]*[ ]*$/);
    }

    handleValidInput = (value) => {
        let result = 0;
        const [num1, num2] = value.replace(/ /g,'').split(/[+*xX:/-]/).map((num) => parseInt(num, 10));
        if (value.indexOf('+') !== -1) {
            result = num1 + num2;
        } else if (value.indexOf('-') !== -1) {
            result = num1 - num2;
        } else if (value.match(/[*xX]/)) {
            result = num1 * num2;
        } else if (value.match(/[:/]/)) {
            result = num1 / num2;
        }
        this.updateList(this.createNewMessage(result));
    }

    handleInvalidInput = () => {
        this.updateList(this.createNewMessage('Please enter a valid arithmetic expression with 2 numbers (3*2)!'));        
    }

    updateList = (newMessage) => {
        updateStore(newMessage);
        this.setState((prevState) => {
            const updatedChatList = [...prevState.chatList];
            updatedChatList.push({...newMessage, isNew: true});
            return {
                chatList: updatedChatList
            };
        });
    }

    render() {
        return (
            <div className="main">
                <Chat chatList={this.state.chatList}/> 
                <ChatBox onSubmitHandler={this.newMessageHandler} /> 
            </div>
        );
    }
}
