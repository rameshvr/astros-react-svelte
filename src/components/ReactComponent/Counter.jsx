import react,{useState} from 'react';

export default function RCounter() { 
    const [count, setCount] = useState(1);
    return (
        <div>
            <h2>React Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }