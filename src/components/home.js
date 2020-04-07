import React, {Component} from 'react';
import Select from 'react-select';
import './home.css';
import logo from '../img/girl2.png';
import bubble from '../img/bubble-text.png';

const formValid=({formErrors,...rest})=>{
    let valid=true;
    Object.values(formErrors).forEach(val=>{
        val.length > 0 && (valid=false);
    })

    Object.values(rest).forEach(val=>{
        val===null && (valid=false);
    });
    return valid;
};

const cities=[
    {label:"Akko", value:1},
    {label:"Arad", value:2},
    {label:"Ashdod", value:3},
    {label:"Ashqelon", value:4},
    {label:"Bat Yam", value:5},
    {label:"Beer Sheva", value:6},
    {label:"Bet Sheʾan", value:7},
    {label:"Bet Shemesh", value:8},
    {label:"Bene Beraqk", value:9},
    {label:"Caesarea", value:10},
    {label:"Dimona", value:11},
    {label:"Eilat", value:12},
    {label:"Givatayim", value:13},
    {label:"Hadera", value:14},
    {label:"Haifa", value:15},
    {label:"Herzliyya", value:16},
    {label:"Holon", value:17},
    {label:"Jerusalem", value:18},
    {label:"Karmiel", value:19},
    {label:"Kfar Saba", value:20},
    {label:"Lod", value:21},
    {label:"Nahariyya", value:22},
    {label:"Nazareth", value:23},
    {label:"Netanya", value:24},
    {label:"Petah Tiqwa", value:25},
    {label:"Qiryat Shemona", value:26},
    {label:"Ramat Gan", value:27},
    {label:"Ramla", value:28},
    {label:"Rehovot", value:29},
    {label:"Rishon Leziyyon", value:30},
    {label:"Tel Aviv", value:31},
    {label:"Tiberias", value:32},
    {label:"Zefat", value:33},
]

class Home extends Component{
    data;
    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.refreshPage=this.refreshPage.bind(this);

        this.state={
            TeamName:null,

            formErrors:{
                TeamName:'',
            }
        };
    }
 
    handleChange(e){
        e.preventDefault();
        const {name ,value}=e.target;
        let formErrors=this.state.formErrors;

        this.setState({
            TeamName:e.target.value
        })

        switch(name){
            case 'TeamName':
                formErrors.TeamName= value.length<3 && value.length>0
                ? "minimum 3 letters required":"";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]:value });
    }
     
    handleFormSubmit(e){
        if(formValid(this.state) && document.forms[0].checkValidity())
        {
            e.preventDefault();
            sessionStorage.setItem("mySessionStorageDate",JSON.stringify(this.state.TeamName));   
            this.props.history.push('/codescreen');
            this.refreshPage();
        }
        else{
            alert("Please fill in the details");
        }     
    }

    refreshPage(){
        window.location.reload(false);
    }

    render(){
        const {formErrors}=this.state;
        return(
        <form className="firstForm" >
            <img id="img2" src={logo} alt="Logo" />
            <img id="bubble" src={bubble} alt="Logo" /> 
            <div id="text"> <h3>Hello, you are in <br/>"Search for Alice" game! <br /> Fill in the deateils <br />and start to play!</h3>
            </div>
            <hr />
            <div className="box">
                    <label>Team Name:
                        <input type="text" 
                        name="TeamName" 
                        onChange={this.handleChange}/>
                        {formErrors.TeamName.length>0 &&(<span className="errorMessage">{formErrors.TeamName}</span>
                        )}
                    </label>
                    <br />
                    <label>Number of Users: 
                        <input type="number" id="number" min="1" max="5" required/>
                    </label>
                    <br />
                    <label>City:
                        <Select id="select" options={cities}/>
                    </label>
                    <br />
                    <button onClick={(e)=>{this.handleFormSubmit(e)}}>Click</button>
            </div>
        </form>
        )
    }
}

export default Home;