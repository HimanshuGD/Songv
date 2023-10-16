import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
                style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <main className="pa4 black-80"
                    style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="measure"
                        style={{ padding: "300px", alignItems: 'center', justifyContent: 'center' }}>
                        {/* <fieldset id="sign_up" className="ba b--transparent ph0 mh0"> */}
                        <legend className="f1 fw6 ph0 mh0" 
                        style={{ minWidth: '50vh', minHeight: '15vh', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '90px' }}>Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name"
                                style={{ fontSize: '35px', color: 'white', padding: '10px' }}>Name : </label>
                                <input
                                    style={{ fontSize: '37px', margin: "20px", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label 
                                style={{ fontSize: '35px', color: 'white', padding: '10px' }} 
                                className="db fw6 lh-copy f6" htmlFor="email-address">Email : </label>
                                <input
                                    style={{ fontSize: '37px', margin: "20px", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password"
                                style={{ fontSize: '35px', color: 'white', padding: '10px' }}>Password : </label>
                                <input
                                style={{ fontSize: '37px', margin: "20px", marginBottom:'40px', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        {/* </fieldset> */}
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                style={{ padding: '30px', fontSize: '30px', cursor:'pointer' }}
                                value="Register"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;

