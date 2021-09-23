import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            });
            return;
        }
        if (+enteredUserAge < 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid age'
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    }


    const removeErrorHandler = () => {
        setError(null);
    }
    return (

        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onremoveError={removeErrorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label>Username:</label>
                    <input type='text' ref={nameInputRef} />
                    <label>Age (Years):</label>
                    <input type='number' ref={ageInputRef} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    )

}

export default AddUser;