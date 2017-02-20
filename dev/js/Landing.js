import React from 'react'
import '../scss/App.scss'

let Landing = React.createClass({
            render() {
                return (<div> 
                            <div className='background-overlay'></div>
                            <div className='landing-section'>
                                <h3> Welcome to {this.props.name} </h3>
                                <h4>Where dreams and food get delivered, quite early in the morning :)</h4>
                                <h4>Now let's get started with the order</h4>
                                <a href="menu.html" role="button" className="landing-btn">Get Started</a>
                            </div>
                        </div>)
            }
        })

export default Landing
