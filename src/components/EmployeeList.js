import React, {Component} from 'react'
import { ListView, View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import _ from 'lodash';
import ListItem from './ListItem'

class EmployeeList extends Component{
    
    componentWillMount(){
        this.props.employeesFetch();
    }

    renderRow(employee){
        return <ListItem employee={employee} />
    }

    _keyExtractor = (item, index) => item.name;

    render(){
        console.log(this.props);
        
       
        return (
            <FlatList data={this.props.data}
                renderItem={ ({item}) => this.renderRow(item) }
                keyExtractor={this._keyExtractor}
            />
            
        )
    }
}

const mapStateToProps = state => {
    console.log(state.employees)
    const employees = _.map(state.employees.data, (val, uid) => {
        return {...val, uid}
    });
    return {
        data: employees,
        loading: state.employees.loading
    }
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList)