import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

    handleSubmit = () => {
      event.preventDefault();
      fetch("")
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SignUp