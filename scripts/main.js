import { generateInteriors } from "./Interiors.js"
import { generatePaints } from "./Paints.js"
import { generateTechOptions } from "./Technologies.js"
import { generateWheelOptions } from "./Wheels.js"

const render = async () => {

    const paintColorOptionsHTML = await generatePaints()
    const fabricOptionsHTML = await generateInteriors()
    const wheelOptionsHTML = await generateWheelOptions()
    const techOptionsHTML = await generateTechOptions()

    const composedHTML = `
        <h1>Cars R' Us: Personal Car Builder</h1>

        <section class="choices">

            <article class="options">
                <h2>Paints</h2>
                ${paintColorOptionsHTML}
            </article>

            <article class="options">
                <h2>Interior</h2>
                ${fabricOptionsHTML}
            </article>

            <article class="options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </article>

            <article class="options">
                <h2>Technologies</h2>
                ${techOptionsHTML}
            </article>

        </section>

        <section class="order">
            <p>button goes here</p>
        </section>
            
        <section class="custom-order-list">
            <p>order list goes here</p>    
        </section>
    `
    document.querySelector("#container").innerHTML = composedHTML

}

render()
