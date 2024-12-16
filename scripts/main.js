import { generateInteriors } from "./Interiors.js"
import { generateOrderButton } from "./OrderButton.js"
import { generateOrdersHTML } from "./Orders.js"
import { generatePaints } from "./Paints.js"
import { generateTechOptions } from "./Technologies.js"
import { generateTypeHTML } from "./VehicleTypes.js"
import { generateWheelOptions } from "./Wheels.js"

const render = async () => {

    const paintColorOptionsHTML = await generatePaints()
    const fabricOptionsHTML = await generateInteriors()
    const wheelOptionsHTML = await generateWheelOptions()
    const techOptionsHTML = await generateTechOptions()
    const ordersHTML = await generateOrdersHTML()
    const orderButtonHTML = generateOrderButton()
    const vehicleTypeHTML = await generateTypeHTML()

    const composedHTML = `
        <h1>Cars R' Us: Personal Car Builder</h1>

        <section class="choices">
        
            <article class="options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </article>

            <article class="options">
                <h2>Technologies</h2>
                ${techOptionsHTML}
            </article>
            
            <article class="options">
                <h2>Paints</h2>
                ${paintColorOptionsHTML}
            </article>

            <article class="options">
                <h2>Interior</h2>
                ${fabricOptionsHTML}
            </article>


        </section>

        <section class="choices">
            ${vehicleTypeHTML}
        </section>
        
        <section class="order">
            ${orderButtonHTML}
        </section>
            
        <section id="custom-order-list">
            ${ordersHTML}       
        </section>
    `
    document.querySelector("#container").innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed")
    render()
})

render()
