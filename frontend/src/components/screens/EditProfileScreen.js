import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { currentProfile, profileUpdateAction } from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';

const EditProfileScreen = () => {

    const history = useHistory()
    const dispatch =  useDispatch()

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 

    const profileCurrent = useSelector(state =>state.profileCurrent)
    const {loading,profile,error} = profileCurrent 

    const profileUpdate = useSelector(state =>state.profileUpdate)
    const {success} = profileUpdate 
    

    const initialState = {
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubUsername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
      };
     
    
      const [formData,setFormData] = useState(initialState)
      const [displaySocial,setDisplaySocial] = useState(false)  

    const {
        company,
        website,
        location,
        status,
        skills,
        githubUsername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      } = formData;


    const handleOnChange = (e) =>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    
     const displaySocialLinks = () =>{

         setDisplaySocial(!displaySocial)
      
     }

    
     const handleSubmit = (e)=>{
         e.preventDefault()
         dispatch(profileUpdateAction(formData))
        
          
     }
     
     useEffect(() =>{
        if(!userInfo){
            history.push('/login')
        }
        else{
            if(!profile.status){
                dispatch(currentProfile())  
            }
            else{
               const profileData ={...initialState}

               for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
              }
              for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key];
              }
              if (Array.isArray(profileData.skills)){
                profileData.skills = profileData.skills.join(', ');
              }
               setFormData(profileData);
            }
        }  
  },[history,userInfo,profile,dispatch]) 

     
  

    return (
        <> 
            {
              loading ? <Loader></Loader>:
                error ? <Message>{error}</Message>:(
                 
                    <div className="create-profile">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <Link to="/dashboard" className="btn btn-light">
                            Go Back
                        </Link>
                        <h1 className="display-4 text-center">Edit Your Profile</h1>
                        <p className="lead text-center">Let's get some information to make your profile stand out</p>
                        {success && <Message variant="success">Profile Updated</Message>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <select className="form-control form-control-lg" name="status"
                             value={status}
                             onChange={handleOnChange}
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
                                onChange={ handleOnChange}
                            className="form-control form-control-lg" placeholder="Company" name="company" />
                            <small className="form-text text-muted">Could be your own company or one you work for</small>
                            </div>
                            <div className="form-group">
                            <input type="text"
                               value={website}
                               onChange={ handleOnChange}
                            className="form-control form-control-lg" placeholder="Website" name="website" />
                            <small className="form-text text-muted">Could be your own or a company website</small>
                            </div>
                            <div className="form-group">
                            <input type="text" 
                               value={location}
                               onChange={handleOnChange}
                            className="form-control form-control-lg" placeholder="Location" name="location" />
                            <small className="form-text text-muted">City & state suggested (eg. Boston, MA)</small>
                            </div>
                            <div className="form-group">
                            <input type="text"
                                  name="skills" 
                                value={skills}
                                onChange={handleOnChange}
                            className="form-control form-control-lg" placeholder="Skills"/>
                            <small className="form-text text-muted">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
                            </div>
                            <div className="form-group">
                            <input type="text"
                            name="githubUsername"
                               value={githubUsername}
                               onChange={handleOnChange}
                            className="form-control form-control-lg" placeholder="github Username"  />
                            <small className="form-text text-muted">If you want your latest repos and a githubUsername link, include your username</small>
                            </div>
                            <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                                value={bio}
                                onChange={handleOnChange}
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
                               onChange={handleOnChange}
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
                               onChange={handleOnChange}
                            className="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" />
                            </div>
    
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text py-3 ">
                                <i className="fab fa-linkedin"></i>
                                </span>
                            </div>
                            <input type="text"
                               value={linkedin}
                               onChange={ handleOnChange}
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
                               onChange={handleOnChange}
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
                               onChange={handleOnChange}
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

                )
                
            }
             
        </>
    );
};

export default EditProfileScreen;