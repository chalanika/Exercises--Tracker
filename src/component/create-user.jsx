import React, { Component } from 'react';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        console.log("submited");
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        console.log(user);
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username :</label>
                        <input 
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"  />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;