// initialize transient state for Order
const transientState = {
    "id": 0,
    "paintcolorId": 0,
    "fabricId": 0,
    "wheelId": 0,
    "techpackageId": 0
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