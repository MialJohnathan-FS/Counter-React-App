// access methods defined in the “react” module
import { useState, useEffect } from "react";


// a Counter component that displays an incrementing counter automatically every second
function Counter () {
    //array destructuring
    const [count, setCount] = useState(0);

    useEffect(function() {
        var timer = setInterval(function() {
            setCount(count+1);
            console.log("count =", count);
        }, 1000);

        return function() {
            clearInterval(timer);
        }
        
    })
    
    
    //increment the displayed counter, which currently remains at 0.
    

    return(
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;