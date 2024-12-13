//change handler

import { setFabricType } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "fabricoptions") {
        const chosenOption = changeEvent.target.value
        setFabricType(parseInt(chosenOption))
    }
}


//component function
export const generateInteriors = async () => {
    const response = await fetch("http://localhost:8088/fabrics")
    const fabrics = await response.json()

    let fabricOptionsHTML = "<select id='fabricoptions'>"
    const fabricArray = fabrics.map(fabric => `<option value="${fabric.id}">${fabric.fabric}</option>`)
    fabricOptionsHTML += fabricArray.join("")
    fabricOptionsHTML += "</select>"

    document.addEventListener("change", handleInteriorChoice)

    return fabricOptionsHTML

}