import React,{Component}from 'react';
import './App.css';
class App extends Component {

constructor(props){
  super(props);

  this.state={
    FirstName:"Enter your first name",
    LastName:"Enter your Last name",
    email:"Enter your email id",
    phone_no:"987879787",
    message:"Enter message"
  }
}
handlechange=(event)=>{
  this.setState({[event.target.name]:event.target.value})

}
handlesubmit=(event)=>{
  alert(`my name is ${this.state.FirstName} ${this.state.LastName}
      my email id is ${this.state.email}
      my mobile number is ${this.state.phone_no}
      my message to your company is ${this.state.message}
  `);
  event.preventDefault();
}
  render(){
    return (
      <div className="App">
        <h1><u>Register your store</u></h1><br/>
        <form onSubmit={this.handlesubmit}>
        <label>First Name</label><br/>
        <input type="text" name="FirstName" value={this.state.FirstName}
                onChange={this.handlechange}/>
        <br/>
        <label>Last Name</label><br/>
        <input type="text" name="LastName" value={this.state.LastName}
                onChange={this.handlechange}/>
        <br/>
        <label>Email</label><br/>
        <input type="email" name="email" value={this.state.email}
                onChange={this.handlechange}/>
        <br/>
        <label>Phone number</label><br/>
        <input type="number" name="phone_no" value={this.state.phone_no}
                onChange={this.handlechange}/>
        <br/>
        <label>Message</label><br/>
        <textarea name="message" value={this.state.message}
                onChange={this.handlechange}/><br/><br/>

      <input type="submit" />

        </form>
      </div>
  
    );
  }
}

export default App;
