import { useState, useEffect } from 'react';
// Making Advance counter a React.FC which is a (TypeScript Type) for a Functional Componenet
export const AdvancedCounter: React.FC = () => {
    //lazy initilization of state; checks if a values exisits in localStorage
    // if yes -> uses that value, if no defaults to 0
    const [count, setCount] = useState<number>(() => {
        console.log("Inilializer running...")
        const saved = localStorage.getItem('count');
        return saved ? Number(saved) : 0;
        // The initializer runs only once so React can preserve state across 
        // re-renders instead of resetting it every time the component function executes.
    });
    // Declaring state variables (react hooks) as the const
    const [step, setStep] = useState<number>(1);
    const [history, setHistory] = useState<number[]>([]);

    // To track the history

    useEffect(() => {
        setHistory(prev => [...prev, count]);

    }, [count]);

    // Auto saving the count history

    useEffect(() => {
        let cancelled = false;

        const timeout = setTimeout(() => {
            if (!cancelled) {
                localStorage.setItem('count', count.toString());
            }
        }, 100);

        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, [count]);

    //Increment and Decrement handlers
    const handleIncrement = () => {
        setCount(prev => prev + step);
    };

    const handleDecrement = () => {
        setCount(prev => prev - step);
    };
    const handleReset = () => {
        setCount(0);
    };
    // handling step count  
    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setStep(value || 1);
    };

    // React Keyboard handling
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp') {
            handleIncrement();
        }
        if (e.key === 'ArrowDown') {
            handleDecrement();
        }
    };
    // adding UI elements
    return (
        <div
            tabIndex={0} // makes div focusable
            onKeyDown={handleKeyDown}
            style={{
                padding: '20px',
                maxWidth: '450px',
                margin: '0 auto',
                outline: 'none'
            }}
        >
            <h1>Advanced Counter</h1>
            <h2>Count: {count}</h2>

            <div style={{ marginBottom: '10px' }}>
                <label>Step: </label>
                <input
                    type="number"
                    value={step}
                    onChange={handleStepChange}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <h2>Count History</h2>
            <p>
                {history.length > 0
                    ? history.join(', ')
                    : 'No history yet'}
            </p>
        </div>
    );
};