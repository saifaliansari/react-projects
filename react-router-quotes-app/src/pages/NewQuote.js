import { useEffect } from 'react';
import QuotesForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { useHistory } from 'react-router-dom';
import { addQuote } from '../lib/api'
const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();
    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history])   
    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }
    return <QuotesForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuotesForm>;
}

export default NewQuote;