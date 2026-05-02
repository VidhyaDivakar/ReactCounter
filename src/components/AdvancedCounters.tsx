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
    setHistory(prev => [...prev,count]);

}, [count]);

// Auto saving the count history

useEffect(() => {
let cancelled = false;

const timeout =setTimeout(() => {
    if(!cancelled) {
        localStorage.setItem('count', count.toString());
    }
}, 100);

return () => {
    cancelled = true;
    clearTimeout(timeout);
};
}, [count]);


    


const saveToStorage = () => {
    if(!isCancelled) {
        localStorage.setItem('count', count.toString());
    }

};

)

}
