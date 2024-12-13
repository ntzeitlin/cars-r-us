// component funciton

export const generateOrdersHTML = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paintcolor&_expand=fabric&_expand=wheel&_expand=techpackage")
    const orders = await response.json()

    let ordersHTML = ""

    let ordersArray = orders.map((order) => {
        const totalCost = order.paintcolor.price + order.fabric.price + order.wheel.price + order.techpackage.price
        return `<div>Order #${order.id}: ${order.paintcolor.color} with
         ${order.wheel.wheel} wheels, ${order.fabric.fabric} interior, and the 
         ${order.techpackage.techpackage} for a total cost of $${totalCost}`
    })

    ordersHTML += ordersArray.join("")
    return ordersHTML
}