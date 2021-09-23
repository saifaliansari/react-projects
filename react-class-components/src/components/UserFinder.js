import { Component, Fragment } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css'
import ErrorBoundry from './ErrorBoundry';

import Users from './Users';


class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }
    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        return (
            <Fragment  >
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundry>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundry>


            </Fragment>
        );
    }
    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) });
        }

    }
}

export default UserFinder;