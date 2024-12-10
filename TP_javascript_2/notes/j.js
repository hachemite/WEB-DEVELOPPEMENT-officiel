let interval = setInterval(run, 2000)

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}