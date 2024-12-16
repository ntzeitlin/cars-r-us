// initialize transient state for Order
// let transientState = {
//     "id": 0,
//     "paintcolorId": 1,
//     "fabricId": 1,
//     "wheelId": 1,
//     "techpackageId": 1
// }
export const transientState = new Map()


const resetTransientState = () => {
    transientState.set("id", 0)
    transientState.set("paintcolorId", 1)
    transientState.set("fabricId", 1)
    transientState.set("wheelId", 1)
    transientState.set("techpackageId", 1)
    transientState.set("vehicletypeId", 1)
}

resetTransientState()

// transient state setter functions
export const setPaintType = (chosenPaint) => {
    transientState.set("paintcolorId", chosenPaint)
    console.log(transientState)
}

export const setFabricType = (chosenFabric) => {
    transientState.set("fabricId", chosenFabric)
    console.log(transientState)
}

export const setWheelType = (chosenWheel) => {
    transientState.set("wheelId", chosenWheel)
    console.log(transientState)
}

export const setTechType = (chosenTech) => {
    transientState.set("techpackageId", chosenTech)
    console.log(transientState)
}

export const setVehicleType = (chosenType) => {
    transientState.set("vehicletypeId", chosenType)
    console.log(transientState)
}


// transient state to permanent state funciton

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    resetTransientState()
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}
