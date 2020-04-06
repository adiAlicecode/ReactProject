import React,{Component} from 'react';
import { Link} from "react-router-dom";
import './CodeScreen.css'

class CodeScreen extends Component{
  
    render(){
        return(
          <div className="codeStyle">
              <label>Question Code:
                    <input type="text" required/>
                </label>
                <Link to="/Questions">
                    <button >Click</button>
                </Link>
          </div>  
        );
    }
}
export default CodeScreen;