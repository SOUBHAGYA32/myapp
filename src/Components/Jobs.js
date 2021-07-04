import '../App.css';
function Jobs(){
    return(

        <div className="App">
           <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email ID</label>
                <input type="email" className="form-control" placeholder="Email" />
           </div>
           <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
           </div>
           <button type="submit" className="btn btn-success">Submit</button>
        </div>
    );

}
export default Jobs