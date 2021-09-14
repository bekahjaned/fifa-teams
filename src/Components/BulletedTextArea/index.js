import React from 'react';

import { InputLabel } from "../../Elements/InputLabel";
import { TextAreaWrap } from "../../Elements/TextAreaWrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

class BulletedTextArea extends React.Component {
    constructor() {
        super();
        this.state = {
            text: `• `
        }
    }

    _onKeyDown(e) {
        if(e.keyCode === 13) {
            this.refs.text.value = `${this.refs.text.value}\n${this.state.text}`;
            e.preventDefault();
            e.stopPropagation();
        }
    }

    render() {

        return(
            <TextAreaWrap>
                <InputLabel>
                    <FontAwesomeIcon className={this.props.errorShow} icon={faExclamationTriangle} />
                    <h2 className={this.props.errorText}>
                        {this.props.title}
                        <span>*</span>
                    </h2>
                </InputLabel>

                <div className="extra">
                    <p className={this.props.errorText}>{this.props.extra}</p>
                    <span className="errorMsg">{this.props.error}</span>
                </div>

                <textarea 
                    ref="text" 
                    onKeyDown={this._onKeyDown.bind(this)}
                    name={this.props.name}
                    value={this.props.value}
                    id={this.props.id}
                    onChange={this.props.handleChange}
                    className={this.props.className}
                />
            </TextAreaWrap>
        )
    }
}

export default BulletedTextArea;