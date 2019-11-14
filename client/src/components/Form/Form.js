import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Form.css"

// This file exports the Input, TextArea, and FormBtn components

export function UserName(props){
 
  return(
      <>
     <div className="form-group" {...props}>
       
     </div>
     </>
  
  )
}

export function Input(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="formContainer">
    {!isAuthenticated &&
     <></>
    }
    {isAuthenticated && 
     <>
     <h3>Title</h3>
     <div className="form-group">
       <input className="form-control" {...props} />
     </div>
     </>
    }

    </div>  
  );
}

export function PostTextArea(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="formContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <>
      <h3>Body</h3>
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
    </>
      
      }
    </div>
  );
}

export function CommentTextArea(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="formContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <>      
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
    </>
      
      }
    </div>
  );
}

export function FormBtn(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="submitContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <button id="submitPost" {...props} style={{ float: "none", marginBottom: 10 }} className="btn btn-success" >
        Submit
      </button>
      

      }
    </div>
  );
}