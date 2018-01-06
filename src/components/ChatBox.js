import React, {Component} from 'react';
import classnames from 'classnames';

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        this.input.focus();
    }

    onChangeHandler = (event) => this.setState({value: event.target.value});

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (!this.state.value) {
            return;
        }
        this.props.onSubmitHandler(this.state.value);
        this.setState({value: ''});
        this.input.focus();        
    }

    render() {
        const sendButtonClassName = classnames('send-btn', {disabled: !this.state.value});        
        return (
            <div className="chat-box">
                <form onSubmit={this.onSubmitHandler}>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        ref={ref => this.input = ref} 
                        onChange={this.onChangeHandler} />
                    <button className={sendButtonClassName} />
                </form>
            </div>
        );
    }
}
