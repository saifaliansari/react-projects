import { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api'

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const { quoteId } = params;
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        return <p className='centered'>error</p>
    }

    if (!loadedQuote.text) {
        return <p>No Quote Found</p>
    }


    return (<Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}></HighlightedQuote>
        <Route path={`${match.path}`} exact>
            <div className='centered'> <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link></div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments>Comment</Comments>
        </Route>
    </Fragment>);
}

export default QuoteDetail;