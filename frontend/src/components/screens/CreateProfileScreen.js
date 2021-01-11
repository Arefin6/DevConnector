import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const CreateProfileScreen = () => {
  
    const history = useHistory()
    const dispatch =  useDispatch()

    const [displaySocial,setDisplaySocial] = useState(true)
    const [status,setStatus] = useState("")
    const [website,setWebsite] = useState("")
    const [location,setLocation] = useState("")
    const [company,setCompany] = useState("")
    const [github,setGithub] = useState("")
    const [skills,setSkills] = useState([])
    const [bio,setBio] = useState("")
    const [twitter,setTwitter] = useState("")
    const [facebook,setFacebook] = useState("")
    const [Linkdin,setLinkdin] = useState("")
    const [instagram,setInstagram] = useState("")
    const [youtube,setYoutube] = useState("")



    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 
     
     const displaySocialLinks = () =>{

         setDisplaySocial(!displaySocial)
      
     }
    
     const handleSubmit = (e)=>{
         e.preventDefault()
     } 

     if(!userInfo){
         history.push('/login')
     }


    return (
        <>
             <div className="create-profile">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <Link to="/dashboard" className="btn btn-light">
                        Go Back
                    </Link>
                    <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">Let's get some information to make your profile stand out</p>
                  
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <select className="form-control form-control-lg" name="status"
                         value={status}
                         onChange={ (e) => setStatus(e.target.value)}
                        >
                            <option value="0">* Select Professional Status</option>
                            <option value="Developer">Developer</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Senior Developer">Senior Developer</option>
                            <option value="Manager">Manager</option>
                            <option value="Student or Learning">Student or Learning</option>
                            <option value="Instructor">Instructor or Teacher</option>
                            <option value="Intern">Intern</option>
                            <option value="Other">Other</option>
                        </select>
                        <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
                        </div>
                        <div className="form-group">
                        <input type="text"
                            value={company}
                            onChange={ (e) => setCompany(e.target.value)}
                        className="form-control form-control-lg" placeholder="Company" name="company" />
                        <small className="form-text text-muted">Could be your own company or one you work for</small>
                        </div>
                        <div className="form-group">
                        <input type="text"
                           value={website}
                           onChange={ (e) => setWebsite(e.target.value)}
                        className="form-control form-control-lg" placeholder="Website" name="website" />
                        <small className="form-text text-muted">Could be your own or a company website</small>
                        </div>
                        <div className="form-group">
                        <input type="text" 
                           value={location}
                           onChange={ (e) => setLocation(e.target.value)}
                        className="form-control form-control-lg" placeholder="Location" name="location" />
                        <small className="form-text text-muted">City & state suggested (eg. Boston, MA)</small>
                        </div>
                        <div className="form-group">
                        <input type="text"
                            value={skills}
                            onChange={ (e) => setSkills(e.target.value)}
                        className="form-control form-control-lg" placeholder="Skills" name="skills" />
                        <small className="form-text text-muted">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
                        </div>
                        <div className="form-group">
                        <input type="text"
                           value={github}
                           onChange={ (e) => setGithub(e.target.value)}
                        className="form-control form-control-lg" placeholder="Github Username" name="githubusername" />
                        <small className="form-text text-muted">If you want your latest repos and a Github link, include your username</small>
                        </div>
                        <div className="form-group">
                        <textarea className="form-control form-control-lg" 
                            value={bio}
                            onChange={ (e) => setBio(e.target.value)}
                        placeholder="A short bio of yourself" name="bio"></textarea>
                        <small className="form-text text-muted">Tell us a little about yourself</small>
                        </div>

                        <div className="mb-3">
                        <button type="button" onClick={displaySocialLinks} className="btn btn-light">Add Social Network Links</button>
                        <span className="text-muted">Optional</span>
                        </div>
                        { displaySocial &&
                         <>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text py-3">
                            <i className="fab fa-twitter"></i>
                            </span>
                        </div>
                        <input type="text" 
                           value={twitter}
                           onChange={ (e) => setTwitter(e.target.value)}
                        className="form-control form-control-lg" placeholder="Twitter Profile URL" name="twitter" />
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text py-3">
                            <i className="fab fa-facebook "></i>
                            </span>
                        </div>
                        <input type="text"
                           value={facebook}
                           onChange={ (e) => setFacebook(e.target.value)}
                        className="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" />
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text py-3 ">
                            <i className="fab fa-linkedin"></i>
                            </span>
                        </div>
                        <input type="text"
                           value={Linkdin}
                           onChange={ (e) => setLinkdin(e.target.value)}
                        className="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" />
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text py-3">
                            <i className="fab fa-youtube"></i>
                            </span>
                        </div>
                        <input type="text"
                           value={youtube}
                           onChange={ (e) => setYoutube(e.target.value)}
                        className="form-control form-control-lg" placeholder="YouTube Channel URL" name="youtube" />
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text py-3">
                            <i className="fab fa-instagram"></i>
                            </span>
                        </div>
                        <input type="text" 
                           value={instagram}
                           onChange={ (e) => setInstagram(e.target.value)}
                        className="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" />
                        </div>
                        </>
                          }
                          
                        <input type="submit" className="btn btn-info col-12 text-white mt-4" />
                    </form>
                    </div>
                </div>
                </div>
            </div> 
        </>
    );
};

export default CreateProfileScreen;