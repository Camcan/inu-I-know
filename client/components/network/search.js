import React, {Component} from 'react';
import Styles from './search.css';
import CompanyList from './companyList.js';

class Search extends Component { 
	constructor(props){
		super(props);
		this.state = {
		    ...props,
            results: null,
            filter: null,
            showResults: false
        };
	    this.renderResults = this._renderResults.bind(this);
        this.clickListener = this.clickListener.bind(this);
    }
    componentWillMount(){
        document.addEventListener('click', this.clickListener)
    }
	componentDidMount(){
    }
    componentWillUnmount(){
        document.removeEventListener('click', this.clickListener)
    }
	componentWillReceiveProps(newProps){
         if (this.props != newProps) {
             this.setState({
                 ...newProps
            });
         }
	}
    clickListener(e){
        let vob = e.target.classList.contains(Styles.input);
        if (!vob && this.state.showResults) {
            this.toggleResults(false)
        }
    }
    toggleResults(truthy){
        this.setState({
            results: (this.state.results || this.props.list),
            showResults: truthy})
    }
    
    handleChange(e){
        const v = e.target.value;
        if (v != this.state.filter) {
            this.setState({
                filter: v,
                showResults: true
            });
            this.filterList(this.props.list, v);
        }
    }
    filterList(list,filter){
        const filteredList = list.filter((item)=>{
            return (
                item.name.toLowerCase().includes(filter.toLowerCase())
            )
        });
        console.log("filteredList", filteredList);
        this.setState({results: filteredList})
    }
    _renderResults(){
       return (this.state.results) ?  <CompanyList 
            list={this.state.results} 
            apiUrl={this.props.apiUrl}
            active={this.props.active}
            select={(i)=>this.props.handleSelection(i)}
        /> : null
    
    } 
    render(){
        return (
            <div className={Styles.container}>
                <input className={Styles.input}
                    type="text" 
                    onFocus={
                        ()=> this.toggleResults(true)
                    }
                    onBlur={
                        ()=> this.setState({showResults: false})
                    }
                    onChange={
                        this.handleChange.bind(this)
                    }
                    autofocus="false" 
                    name="search" 
                    placeholder={
                        this.props.placeHolder || "Search..."
                    } 
                ></input>
                <div className={[
                        Styles.results,
                        (this.state.showResults) ? Styles.show : null
                    ].join(" ")
                }>
                    {this._renderResults()}
                </div>
            </div>
        );
    }
};

export default Search;


