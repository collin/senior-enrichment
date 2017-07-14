export function filteredArray(array, id, key) {
    if (array.length) {
        let filteredArray = array.filter(index => {
            return +id === +index[key]
        })
        if (filteredArray.length === 1) {
            return filteredArray[0]
        } else {
            return filteredArray
        }
    } else {
        return [];
    }
}

