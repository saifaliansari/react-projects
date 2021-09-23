import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const { value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler } = useInput(value => value.trim() !== '');


  const { value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  }
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses} >
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {emailInputHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
