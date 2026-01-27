import { useEffect, useState, type ComponentType } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export interface WithMouseFollowerProps {
    mousePosition: MousePosition;
}

export function withMouseFollower<T extends WithMouseFollowerProps>(
    WrappedComponent: ComponentType<T>
) {
    return function WithMouseFollower(props: Omit<T, keyof WithMouseFollowerProps>) {
        const [position, setPosition] = useState<MousePosition | null>(null);

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                setPosition({ x: e.clientX, y: e.clientY });
            };
            document.addEventListener('mousemove', handleMouseMove);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);

        if (!position) return null; 

        return (
            
                <WrappedComponent {...(props as T)} mousePosition={position} />
  
        );
    };
}