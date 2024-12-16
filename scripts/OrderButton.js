import { placeOrder } from "./TransientState.js"

// handle click event
const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "orderbutton") {
        console.log("button pressed")
        placeOrder()
    }
}

// component function
export const generateOrderButton = () => {
    document.addEventListener("click", handleButtonClick)
    return '<div><button id="orderbutton">Place Car Order</button></div>'
}