import React, {Component} from 'react';
import ChatItem from './ChatItem';

export default class Chat extends Component {
    componentDidMount = () => {
        this.handleScroll();
    }

    componentDidUpdate = () => {
        this.handleScroll();
    }

    getChatList = () => {
        return this.props.chatList.map(
            (chat) => <ChatItem {...chat} key={chat.id} />
        );
    }

    handleScroll = () => {
        this.container.scrollTop = this.container.scrollHeight; 
    }
 
    render() {
        return (
            <div className="chat">
                <div className="chat-container" ref={(ref) => {this.container = ref;}}>
                    <ul>
                        {this.getChatList()}
                    </ul>
                </div>
            </div>
        );
    }
}
