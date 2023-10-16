import React from 'react';
// import './signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-red" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <main className="pa4 black-80" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div className="measure" style={{padding:"300px", alignItems: 'center', justifyContent: 'center' }} >
                        {/* <fieldset id="sign_up" className="ba b--transparent ph0 mh0" style={{ alignItems:'center', justifyContent:'center'}}> */}
                            <legend className="f1 fw6 ph0 mh0" style={{ minWidth:'50vh', minHeight:'10vh', alignItems: 'center', justifyContent: 'center', color:'white', fontSize:'40px' }} >Sign In</legend>
                            <div className="mt3" style={{justifyContent:'center', alignContent:'center'}}>
                            <label style={{ fontSize: '35px', color: 'white', padding: '10px' }} className="db fw6 lh-copy f6" htmlFor="email-address">Email : </label>
                                <input style={{ fontSize:'37px', margin:"20px", justifyContent:'center', alignItems:'center', alignContent:'center'}}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label style={{ fontSize:'35px', color:'white', padding:'10px' }} className="db fw6 lh-copy f6" htmlFor="password">Password : </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    style={{fontSize:'37px', margin:'20px'}}
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        {/* </fieldset> */}
                        <div className="tc">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                style={{ marginTop:'50px', fontSize:'40px', cursor:'pointer'}}
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} 
                            className="f6 link dim black db pointer"
                            style={{ padding:'90px', color:'white', fontSize:'60px', cursor:'pointer'}}>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;




