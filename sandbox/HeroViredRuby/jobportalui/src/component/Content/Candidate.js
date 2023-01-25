import "./Candidate.js"
//import axios from 'axios';
import React,{useState} from 'react';
//import {   Link   } from "react-router-dom";

// singing up with nanme, email, and possword
const Candidate = () => {
    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
         [e.target.name] : e.target.value
     })
    }
    console.log(data);

    async function sendData() {
        // let res = await axios.post('/userdetail',{data});
        // console.log(res.data)
    }
    // skill.select('#multiple-select', {
    //     inputElement: document.getElementById('my-input'),
    //     touchUi: false
    // });
    return (
        <div className='body'>
             <h1>Fill your details here</h1>
             <br />
             <form>

             <ul class="nobull">
                <li>
                    <label>Firstname        </label>
                    <input type="text" placeholder='Firstname' name='firstname' onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Lastname       </label>
                    <input type="text" placeholder='Lastname' name='lasttname' onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Email   </label>
                    <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Contactnumber  </label>
                    <input type="text" placeholder='Contactnumber' name='contact'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Address  </label>
                    <input type="text" placeholder='Address' name='address'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>About    </label>
                    <input type="text" placeholder='About' name='about'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Currentcompany   </label>
                     <input type="text" placeholder='Currentcompany' name='currentcompany'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                  <label>Current  Ctc  </label>
                  <input type="text" placeholder='Ctc' name='ctc' onChange={handleChange}/>
                </li>
                <br />
                <li>
                   <label>Experience   </label>
                    <input type="text" placeholder='Experience' name='ctc' onChange={handleChange}/>

                </li>
                <br />
                <li>
                    <label>Current Role </label>
                    <input type="text" placeholder='Current Role' name='currentrole' onChange={handleChange}/>
                </li>
                <br />
                <li>

                    {/* <label for="skill">Choose your skills:</label>
                    <select name="skill" id="skill" multiple>
                        <option value="JAVA">JAVA</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Dotnet">Dotnet</option>
                        <option value="SQLserver">SQLserver</option>
                        <option value="ORACLE">ORACLE</option>
                        <option value="ReactJs">ReactJs</option>
                        onChange={handleChange}
                    </select> */}
                    <label>
                         Choose your skills:
                    </label>
                    <select name="skill" id="skill" multiple>
                        <option value="1">JAVA</option>
                        <option value="2">Dotnet</option>
                        <option value="3">SQLserver</option>
                        <option value="4">Ruby on Rails</option>
                        <option value="5">Bootstrap</option>
                        <option value="6">ORACLE</option>
                        <option value="7">SQLserver</option>
                        <option value="8">ReactJs</option>
                    </select>
                </li>
                <br />
                <li>
                    <label>Expected Salary</label>
                    <input type="expectedsalary" placeholder='Expected Salary' name="expectedsalary"  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>ResumeLink</label>
                    <input type="resumelink" placeholder='resumelink' name="resumelink"  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Preferred Location</label>
                    <select id="location">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Opel</option>
                        <option value="Mumbai">Audi</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </li>

            </ul>


            <br />

            <input type="submit" onClick={sendData} />
            </form>
            {/* <Link to="/"> */}
        </div>
    );
}

export default Candidate;
