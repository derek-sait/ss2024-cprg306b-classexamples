

export default function Counter({curCount, incFunc}) {
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {curCount}</p>
            <button onClick={incFunc}>Increment!</button>
        </div>
    );
}