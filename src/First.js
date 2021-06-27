import React,{Component} from 'react';
import App from './App.js';
import Admin from './Admin.js';
import Importdata from './Importdata';
import ManageCompany from './Company/ManageCompany.js';
import AddCompany from './Company/AddCompany.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UpdateCompany from './Company/UpdateCompany.jsx';
import UpdatePage from './Company/UpdatePage.js';
import AddStockExchange from './StockExchange/AddStockExchange.js';
import AddSector from './Sector/AddSector.js';


import UpdateIpo from './IPO/UpdateIpo.js';
import User from './User.js';
import GetIpos from './IPO/GetIpos.js';
import Second from './Second.js';
import Third from './Third.js';


class first extends Component {
   constructor(props)
   {
       super(props)
       
       
   }
   
    render() {
        const mystyle={
            position: "absolute",
            top: "25px",
            right: "16px",
            color:"black"
           };
       
        return (
            <div>
                
                  <div>
        
                 
        <Router>
 <Link style={mystyle} to="/">Log Out</Link>
            <div>
           
           <Switch>
           <Route  exact path="/" component={App}/>
            <Route path="/user" component={Second}/>
                <Route path="/admin" component={Third}/>
              
          
            
            
            
            </Switch>
            </div>
        </Router>
        </div>
            </div>
        );
    }
}

export default first;
/*function First()
{
    return(
        <div>
        
       
<Router>
    <div>
    <Button  onClick=(this.logout)>Log Out</Button>
   <Switch>
   <Route  exact path="/" component={App}/>
    <Route path="/user" component={Second}/>
        <Route path="/admin" component={Third}/>
      
  
    
    
    
    </Switch>
    </div>
</Router>
</div>
  
  );

    
}
export default First;*/