import React, {Component} from 'react';
import API from './api.js';
import Styles from './styles.css';
import Network from './network.js';
import ModeSelector from './modeSelector.js';
import CompanyProfile from './companyProfile.js';

const apiUrl = [
    'http://',
    '149.28.167.13', 
    ':3000/api/' 
].join('');

class NetworkContainer extends Component { 
	constructor(props){
		super(props);
		this.state = {
            companyList: [],
               activeList: [],
               companyRels: [],
               activeRels: [],
               filter: 'All',
               selectedCompany: null
        }
	}
	componentDidMount(){
        console.log("mounting...")
      API.getRelationships(apiUrl, (data)=>{
        console.log(data);
        this.setState({
            companyList: data.companyList,
            activeList: data.companyList,
            companyRels: data.relationships,
            activeRels: data.relationships,
        });
      });
	}
	componentWillReceiveProps(newProps){
        console.log("Container newProos;", newProps) 
        this.setState({
             ...newProps
         });
	}
	render(){
         const profileClass = [
            Styles.companyProfile,
            (this.state.selectedCompany) ? Styles.active : ""
        ].join(" ");    
        return <div className={Styles.container}>
		    <div className={Styles.network}>
                <div className={Styles.modeSelector}>
                    <ModeSelector select={(filter)=>this.setState({filter: filter})}
                        options={["All"]}
                        active={this.state.filter}
                    />
                </div>
                <Network 
                    background="linear-gradient(to right, #EEE, #FFF)"
                    height="400px"
                    data={this.state.activeList} 
                    rels={this.state.activeRels}
                    api={apiUrl}
                    selected={
                        (this.state.selectedCompany) ? [this.state.selectedCompany] 
                        : null
                    }
                    handleSelection={
                        (id)=>{
                            this.setState({selectedCompany: id});
                            console.log("SelectingCompany", id);
                        }
                    } 
                />
            </div>
		    <div className={profileClass}>
                <CompanyProfile 
                    apiUrl={apiUrl}
                    companyList={this.state.companyList}
                    selectedCompany={this.state.selectedCompany}
                />
            </div>
        </div>
	
	}
};

export default NetworkContainer;
