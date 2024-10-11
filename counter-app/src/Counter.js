// a Counter component that displays an incrementing counter automatically every second
function Counter () {
    var count = 0;
    
    //increment the displayed counter, which currently remains at 0.
    setInterval(function() {
        count++;
        console.log("count =", count);
    }, 1000);

    return(
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;