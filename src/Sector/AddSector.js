import React, { Component } from 'react';
import SectorService from '../service/SectorService';
import StockExchangeService from '../service/StockExchangeService';

class AddSector extends Component {
constructor(props)
{
    super(props)
    this.state={
    name:'',
	
	brief:'',
	
    }
   this.sectorhandler=this.sectorhandler.bind(this)
   this.briefhandler=this.briefhandler.bind(this)
   
   this.savesector=this.savesector.bind(this)
} 
sectorhandler(event)
{
    this.setState({
name:event.target.value
    })
}
briefhandler(event)
{
    this.setState({
brief:event.target.value
    })
}

savesector(e)
{
    e.preventDefault();
    let sector={name:this.state.name, brief:this.state.brief
}
SectorService.addsector(sector);
console.log(JSON.stringify(sector));
alert("saved")

}

    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <form>
                            <div className="form-group">
                                <label>Sector</label>
                                <input placeholder="Sector" name="name" className="form-control"
                                value={this.state.name} onChange={this.sectorhandler}/>

                            </div>
                            <div className="form-group">
                                <label>Brief</label>
                                <input placeholder="Brief" name="brief" className="form-control"
                                value={this.state.brief} onChange={this.briefhandler}/>
                                
                            </div>
                            
                           
                            

                            <button className="btn btn-success" onClick={this.savesector}>Save</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddSector;