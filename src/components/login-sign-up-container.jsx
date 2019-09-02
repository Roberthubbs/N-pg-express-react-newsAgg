
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../util/user_util';
import SessionForm from './login';
import { signup } from '../util/user_util';
// import { resetErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <Link to="/login">Login</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginDemo: (user) => dispatch(login(user)),
        // resetErrors: () => dispatch(resetErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);