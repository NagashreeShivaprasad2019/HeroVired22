import { useState } from 'react';


const SearchJob = ({ submit }) => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    city: "",
    description: "",
  });

  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submit({ ...form, id: new Date().getTime().toString() });
  }


  return (


    <div className="Hcenter">
      <div className="Hsearch">

        <h3> All Jobs</h3>
        <form onSubmit={handleSubmit}>


          <input
            className="HsearchInput"
            type="text"
            placeholder="Title, Client, Location...."
            value={form.description}
            name="description"
            onChange={handleInput}
            required
          />





          <button className="button is-primary">Search</button>
          <br /><br /><br /><br />




        </form>

        <div class="navbar">
          <div class="All Jobs">

            <button class="dropbtn">All Jobs
              <i class="fa fa-caret-down"></i>
            </button>
            <button class="dropbtn">Industry
              <i class="fa fa-caret-down"></i>
            </button>
            <button class="dropbtn">Location
              <i class="fa fa-caret-down"></i>
            </button>
            <button class="dropbtn">Job Type
              <i class="fa fa-caret-down"></i>
            </button>
            <button class="dropbtn">Posted Date
              <i class="fa fa-caret-down"></i>
            </button>
            {/* <div class="dropdown-content">
            <a href="#">Fresher Jobs</a>
            <a href="#">Remote Jobs</a>
            <a href="#">MNC Jobs</a>
            <a href="#">WalkIn Jobs</a>
            <a href="#">Work From Home Jobs</a>
          </div> */}
          </div>
        </div>
      </div>
    </div>

  );


};

export default SearchJob;