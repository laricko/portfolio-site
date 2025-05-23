"use client"

import { useRef } from "react";
import useTerminal from "./useTerminal";

export default function Terminal() {
    const { input, setInput, history, handleKeyDown } = useTerminal();
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <main className="px-10 py-5 h-full" onClick={focusInput}>
            {history.map((line, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}

            <div className="flex">
                <span className="mr-2">&gt;</span>
                <input
                    ref={inputRef}
                    className="bg-transparent w-full caret-green-400 outline-none"
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </main>
    );
}
