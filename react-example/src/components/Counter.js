import { useState } from "react";

import { Button } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Counter Value: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    );
}

export default Counter;