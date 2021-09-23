import useInput from "../hooks/use-input";


const isNotEmpty = (value) => value.trim() !== '';

const isEmail = (value) => { return value.trim() !== '' && value.includes('@') }

const BasicForm = (props) => {
  const { value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler } = useInput(isNotEmpty);


  const { value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    reset: resetLastNameInput,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler } = useInput(isNotEmpty);

  const { value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler } = useInput(isEmail);

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
  }



  const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';




  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler} />
          {firstNameInputHasError && <p className='error-text'>Enter valid First Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler} />
          {lastNameInputHasError && <p className='error-text'>Enter valid Last Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} />
        {emailInputHasError && <p className='error-text'>Enter valid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
