import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";
export const fetchCartData =()=>{
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-b7ee0-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            return data;
        };

        try{
           const cartData = await fetchData(); 
           dispatch(cartAction.replaceCart({
               items:cartData.items || [],
               totalQuantity : cartData.totalQuantity
            }
            ));
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Error Fetching Data'

            }))
        }
    }

}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending Cart Data'

        }))

        const sendRequest = async () => {
            const reponse = await fetch('https://react-http-b7ee0-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            if (!reponse.ok) {
                throw new Error('Something went wrong')
            }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent Cart Data'

            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Error Sending Data'

            }))
        }
    }
}