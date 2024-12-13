import { generatePaints } from "./Paints.js"

const render = async () => {

    const paintColorOptions = await generatePaints()

    const composedHTML = `
        <h1>Cars R' Us: Personal Car Builder</h1>

        <section class="choices">

            <article class="options">
                <h2>Paints</h2>
                ${paintColorOptions}
            </article>

            <article class="options">
                <h2>Interior</h2>
            </article>

            <article class="options">
                <h2>Wheels</h2>
            </article>

            <article class="options">
                <h2>Technologies</h2>
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
