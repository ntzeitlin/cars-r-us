// component funciton

export const generateOrdersHTML = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    let ordersHTML = ""

    let ordersArray = orders.map((order) => {
        return `<div>Order #${order.id}: ${order.paintcolorId} with
         ${order.wheelId} wheels, ${order.fabricId} interior, and the 
         ${order.techpackageId} for a total cost of #`
    })

    ordersHTML += ordersArray.join("")
    return ordersHTML
}