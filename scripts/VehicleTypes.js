// event listener

import { setVehicleType, transientState } from "./TransientState.js"

const handleTypeChange = (changeEvent) => {
    if (changeEvent.target.name === "vehicletype") {
        const choiceValue = changeEvent.target.value
        setVehicleType(parseInt(choiceValue))
    }
}

// component function

export const generateTypeHTML = async () => {
    const response = await fetch("http://localhost:8088/vehicletypes")
    const types = await response.json()

    let typeHTML = types.map(({ id: id, type: type }) => {
        return `<div class="types"><input type="radio" name="vehicletype" value="${id}" /> ${type}</div>`
    }).join("")

    document.addEventListener("change", handleTypeChange)

    return typeHTML

}