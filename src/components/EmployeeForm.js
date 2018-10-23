import React, {Component} from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common'; 
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Mehmet" 
                        value={this.props.name} 
                        onChangeText={text => this.props.employeeUpdate({prop:'name', value: text})}/>
                </CardSection>

                 <CardSection>
                    <Input label="Phone" placeholder="554 555 55 55" 
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop:'phone', value: text})}/>
                </CardSection>

                <CardSection style={{flexDirection: "column"}}>
                    <Text style={styles.pickerLabel}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={ day => this.props.employeeUpdate({prop: 'shift', value: day})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabel: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const {name, phone, shift} = state.employeeForm;
    return {
        name, phone, shift
    };
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);