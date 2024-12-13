import { setTechType } from "./TransientState.js"

// change handler
const handleTechChoice = (changeEvent) => {
    if (changeEvent.target.id === "techoptions") {
        const techChoice = changeEvent.target.value
        setTechType(parseInt(techChoice))
    }
}

// component function

export const generateTechOptions = async () => {
    const response = await fetch("http://localhost:8088/techpackages")
    const techOptions = await response.json()

    let techOptionHTML = "<select id='techoptions'>"

    const techArray = techOptions.map(tech => `<option value="${tech.id}">${tech.techpackage}</option>`)
    techOptionHTML += techArray.join("")
    techOptionHTML += "</select>"

    document.addEventListener("change", handleTechChoice)

    return techOptionHTML
}