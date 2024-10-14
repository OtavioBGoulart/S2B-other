import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface ScrollContextType {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    contatosRef: React.RefObject<HTMLDivElement>;
    solutionsRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
}


const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

interface ScrollProviderProps {
    children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
    const contatosRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollTo, contatosRef, solutionsRef, aboutRef }}>
            {children}
        </ScrollContext.Provider>
    );
}
