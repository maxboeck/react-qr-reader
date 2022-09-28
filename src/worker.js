// jsQR is concatenated by gulp

self.addEventListener('message', function (e) {
    try {
        var decoded = jsQR(e.data.data, e.data.width, e.data.height)
        if (decoded) {
            postMessage(decoded.data)
        } else {
            postMessage(null)
        }
    } catch (err) {
        postMessage(null)
    }
})
