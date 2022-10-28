import React from 'react';
import PropTypes from "prop-types";
import './Profile.css';




function Profile(props) {
    return (
        <div className='prof'>
            <div className='photo'>
            {props.children}
            <h1 style={{color:"white", width:"250px"}}>{props.person.fullName}</h1>
            <h2 style={{color:"white"}}>{props.person.profession}</h2>
            </div>
            <div className='bio'>
            <p style={{width:"700px",padding:"30px",boxShadow:"10px 10px 5px lightgrey",borderRadius:"15px",backgroundColor:"lightblue",fontSize:"x-large"}}><i>{props.person.bio}</i></p>
            <button style={{height:"50px"}} onClick={()=>props.handleName(props.person.fullName)} >Full Name</button>
            </div>
        </div>
    )
}
Profile.defaultProps={
    fullName:"This a default name",
    bio:"This a default bio",
    profession:"This is a default profession"

}
Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
    HandleName:PropTypes.func
}
export default Profile