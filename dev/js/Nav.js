import React from 'react'
import '../scss/App.scss'

let Nav = React.createClass({
            render() {
                return (<div className='nav'>
                           <h3> {this.props.name} </h3>
                        </div>)
            }
        })

export default Nav
