import React, { Component } from 'react';
import {  Input, Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{
    state = { showModal : false}

    onButtonPress(){
        const { name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift on ${shift}`); // Sending SMS
    }

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate( {prop, value} )
        });
    }

    onDecline(){
        this.setState({
            showModal: false
        })
    }

    onAccept(){
        const { uid } = this.props.employee; 
        this.props.employeeDelete({ uid});
    }

    render(){
        
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={ () => this.setState({showModal: !this.state.showModal}) }>Fire Employee</Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)