import { useReducer } from "react";

const intialState = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
     return {value : action.val, isTouched : state.isTouched}
    }else if(action.type === 'BLUR'){
        return {value : state.value, isTouched : true}
    }else if(action.type === 'RESET'){
        return {value : '', isTouched : false}
    }

    return intialState;

}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, intialState);
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({ type: 'INPUT', val: event.target.value });

    }
    const inputBlurHandler = event => {
        dispatch({ type: 'BLUR' });
    }

    const reset = () => {
        dispatch({ type: 'RESET' });
    }

    return {
        value: inputState.value,
        hasError: hasError,
        isValid: valueIsValid,
        reset: reset,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler
    }

}

export default useInput;