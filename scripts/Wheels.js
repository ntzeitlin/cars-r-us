// change handler
const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheeloptions") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}

// component function
export const generateWheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelsHTML = "<select id='wheeloptions'>"

    const wheelsArray = wheels.map(wheel => `<option value="${wheel.id}">${wheel.wheel}</option>"`)

    wheelsHTML += wheelsArray.join("")

    wheelsHTML += "</select>"

    document.addEventListener("change", handleWheelChoice)

    return wheelsHTML
}
