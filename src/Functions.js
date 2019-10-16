

export const findWinner = (boxes) => {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (var i = 0; i < winConditions.length; i++) {
        const [a,b,c] = winConditions[i]

        if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a]
        }
    }
    return null
}

export const allBoxesClicked = (boxes) => {
    let count = 0

    boxes.forEach(function (item) {
        if (item !== null) {
            count++
        }
    })

    // Check if all boxes are clicked (filled)
    if (count === 9) {
        return true // all the boxs are clicked
    } else {
        return false
    }
}
