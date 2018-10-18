import React, { Component } from 'react'
import { View , Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import { emailChanged, passChanged, loginUser } from '../actions'

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPassChange(text) {
        this.props.passChanged(text)
    }

    onButtonPress(){
        const { email, pass } = this.props;
        this.props.loginUser({email, pass});
    }

    renderError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )

    }

    render(){
        return (
        <Card>
            <CardSection>
                <Input 
                    label="Email" 
                    placeholder="email@email.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
            </CardSection>

             <CardSection>
                <Input 
                    secureTextEntry 
                    label="Password" 
                    placeholder="password"
                    onChangeText={this.onPassChange.bind(this)}
                    value={this.props.pass}
                    />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
        );
    }
}


const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps  = state => {
    return {
        email: state.auth.email,
        pass: state.auth.pass,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {emailChanged, passChanged, loginUser})(LoginForm)