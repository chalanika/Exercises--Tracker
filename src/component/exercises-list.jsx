import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getExercises } from '../services/exerciseService';


class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = { exercises: [] };
    }

    async componentDidMount() {
        try{
            const {data: exercises} = await getExercises();
            this.setState({exercises});
        }catch(ex){
            console.log("Error",ex);
        }
    }

    deleteExercise(id) {
        console.log('delete');
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    // exerciseList() {
    //     return this.state.exercises.map(e => {
    //         return <Exercise exercise={e} deleteExercise={this.deleteExercise} key={e._id} />; 
           
    //     })
    // }

    render() {
        return (
            <div className="container">
                <h1><b>Logged Exercises</b></h1><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Description</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* {this.exerciseList} */}
                    <tbody>
                        {this.state.exercises.map(e => (
                            // {console.log(e.username)}
                            // {e.username}
                            <tr key={e?._id}>
                                <td>{e?.username}</td>
                                <td>{e?.description}</td>
                                <td>{e?.duration}</td>
                                <td>{e?.date.substring(0, 10)}</td>
                                <td>
                                    <Link to={`/edit/${e._id}`} >edit</Link> | <Link to='/' onClick={()=>{this.deleteExercise(e._id)}}>Delete</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExerciseList;