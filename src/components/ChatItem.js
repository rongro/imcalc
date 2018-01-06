import React, {Component} from 'react';
import classnames from 'classnames';

export default class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isNew: this.props.isNew}
    }
 
    componentDidMount = () => {
        if (this.state.isNew) {
            window.setTimeout(this.unsetNewMessage, 1000);
        }
    }

    unsetNewMessage = () => {
        this.setState({isNew: false});
    }
 
    render() {
        const {user} = this.props;
        const itemClassName = classnames('chat-item', {system: user.name === 'system'}, {new: this.state.isNew});
        return (
            <li className={itemClassName}>
                <div className="user-avatar">
                    <img src={user.avatar} alt='' />
                </div>
                <div className="message">
                    <div className="text">
                        {this.props.text}
                    </div>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </li>
        );
    }
}
