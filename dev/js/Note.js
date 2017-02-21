import React from 'react'
import '../scss/App.scss';
import Draggable from 'react-draggable'
import Textarea from 'react-textarea-autosize'
import * as Firebase from 'firebase';

var Note = React.createClass({
            getInitialState() {
                return {editing: false}
            },
            // componentWillMount() {
            //     let config = {
            //         apiKey: "AIzaSyB1a56Oa2pSOLD7dQMJCfcZLVCJG116CIo",
            //         authDomain: "noteworthy-c9f08.firebaseapp.com",
            //         databaseURL: "https://noteworthy-c9f08.firebaseio.com",
            //         storageBucket: "noteworthy-c9f08.appspot.com",
            //         messagingSenderId: "589521000105"
            //     };
            //     const database = firebase  
            //                     .initializeApp(config)
            //                     .database()
            //                     .ref();
            // },
            componentDidUpdate() {
                if (this.state.editing) {
                    this.refs.newText.focus()
                }
            },
            shouldComponentUpdate(nextProps, nextState) {
                return this.props.children !== nextProps.children || this.state !== nextState
            },
            edit() {
                this.setState({editing: true})
            },
            save() {
                this.props.onChange(this.refs.newText.value, this.props.id)
                this.setState({editing: false})
            },
            remove() {
                this.props.onRemove(this.props.id)
            },
            renderForm() {
                return (
                    <div className="note"
                         style={this.style}>
                      <Textarea ref="newText"
                                defaultValue={this.props.children}>
                      </Textarea>
                      <button className="save-btn" onClick={this.save}><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                    </div>
                )
            },
            renderDisplay() {
                return (
                    <div className="note"
                         style={this.style}>
                        <p>{this.props.children}</p>
                        <button className="edit-btn" onClick={this.edit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <button className="del-btn" onClick={this.remove}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
                    )
            },
            render() {
              return ( <Draggable>
                       {(this.state.editing) ? this.renderForm()
                                          : this.renderDisplay()}
                       </Draggable>
                )

            }
        })

export default Note
