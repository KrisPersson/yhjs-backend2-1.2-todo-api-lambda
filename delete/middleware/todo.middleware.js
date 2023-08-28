function checkBody(body) {
    if (body?.task && body?.hasOwnProperty('done')) return true;
    else return false
}

function checkDeleteBody(body) {
    if (body?.task) return true;
    else return false
}

module.exports = { checkBody, checkDeleteBody }
