import React, { Component } from 'react'

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LogIn