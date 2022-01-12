function getObjById (arr, changeId) {
    for (const obj of arr) {
        if(obj.id === changeId) {
            return obj;
        }
    }
}

export {getObjById};