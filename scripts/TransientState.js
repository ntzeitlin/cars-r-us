// initialize transient state for Order
let transientState = {
    "id": 0,
    "paintcolorId": 1,
    "fabricId": 1,
    "wheelId": 1,
    "techpackageId": 1
}

const resetTransientState = () => {
    transientState = {
        "id": 0,
        "paintcolorId": 1,
        "fabricId": 1,
        "wheelId": 1,
        "techpackageId": 1
    }
}

// transient state setter functions
export const setPaintType = (chosenPaint) => {
    transientState.paintcolorId = chosenPaint
    console.log(transientState)
}

export const setFabricType = (chosenFabric) => {
    transientState.fabricId = chosenFabric
    console.log(transientState)
}

export const setWheelType = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const setTechType = (chosenTech) => {
    transientState.techpackageId = chosenTech
    console.log(transientState)
}


// transient state to permanent state funciton

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    resetTransientState()
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}
