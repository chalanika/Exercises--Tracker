import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { getRelevantExercise } from '../services/exerciseService';

class EditExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []

        }
    }

    async componentDidMount() {
        
        try {
            const res = await getRelevantExercise(this.props.match.params.id);
            this.setState({
                username: res.data.username,
                description: res.data.description,
                duration: res.data.duration,
                date: new Date(res.data.date),
            });
            axios.get("http://localhost:5000/users").then(res=>{
                if(res.data.length > 0){
                    this.setState({
                        users:res.data.map(user=>user.username),
                    })
                }
            });
        } catch (ex) {
            console.log("Error", ex);
        }    

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        console.log("submited");
        console.log(this.state);
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }
        console.log(exercise);

        axios.put("http://localhost:5000/exercises/" + this.props.match.params.id, exercise);
        // this.props.history.push("/");
        window.location = '/';  //back to home
    }

    render() {
        return (
            <div className="container">
                <h3>Edit New Exercise Log</h3><br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Username:</label>
                        <select
                            className="form-control"
                            required
                            value={this.state?.username}
                            onChange={this.onChangeUsername}
                        >
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}
                                    >{user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label >Duration: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label >Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Edit"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditExercise;