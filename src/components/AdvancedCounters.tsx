import { useState, useEffect } from 'react';
// Making Advance counter a React.FC which is a (TypeScript Type) for a Functional Componenet
export const AdvancedCounter: React.FC = () => {
//count - current value, setCount - function to update it
    const [count, setCount] = useState<number>(() => {
        const saved = localStorage.getItem('count');
        return saved ? Number(saved) : 0;

    });
// Declaring state (react hooks) as the const
const [step, setStep] = useState<number>(1);
const [history, setHistory] = useState<number[]>([]);

// To track the history

useEffect(() => {
    setHistory(prev => [...prev,count]);

}, [count]);

useEffect(() => {
let isCancelled = false;

const saveToStorage = () => {
    if(!isCancelled) {
        localStorage.setItem('count', count.toString());
    }

};

)

}
