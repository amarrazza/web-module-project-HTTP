import axios from "axios";
import React, { useState } from "react";

const initialMovie = {
    title:"",
    director: "",
    genre: "",
    metascore: 0,
    description: ""
}

const AddMovieForm = () => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        
        axios.post("http://localhost:9000/api/movies", movie)
            .then(resp => {
                console.log(resp);
            }).catch(err => {
                console.log(err);
            })

    }
    
    const { title, director, genre, metascore, description } = movie;
    return(
        <div className="col">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add movie </h4>
                    </div>
                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
                        </div>
                                        
                    </div>
                    <div className="modal-footer">			    
                        <button className="btn btn-info">Add</button>
                    </div>
			</form>
		</div>
	</div>);
    
}

export default AddMovieForm;