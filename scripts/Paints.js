import { setPaintType } from "./TransientState.js"

// change handler
const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "paintcolors") {
        const chosenOption = changeEvent.target.value
        setPaintType(parseInt(chosenOption))
    }
}


// component funciton
export const generatePaints = async () => {
    const response = await fetch("http://localhost:8088/paintcolors")
    const colors = await response.json()

    let paintOptionsHTML = "<select id='paintcolors'>"

    const paintColorArray = colors.map(color => `<option value="${color.id}">${color.color}</option>`)

    paintOptionsHTML += paintColorArray.join("")

    paintOptionsHTML += "</select>"

    document.addEventListener("change", handlePaintChoice)

    return paintOptionsHTML
}