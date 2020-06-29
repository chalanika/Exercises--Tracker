import axios from "axios";


export function getExercises (){
    return axios.get('http://localhost:5000/exercises');
}

export function getRelevantExercise(id){
    return axios.get("http://localhost:5000/exercises/"+id);
}