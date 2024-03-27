import { useEffect, useRef, useState } from 'react'
import styles from './draggable.module.scss'

export function Draggable({ children, onDrop }: IDraggableProps) {
    const wrapper = useRef<HTMLDivElement>(null);

    const moveAt = (event: MouseEvent) => {
        if (!wrapper.current) {
            return;
        }
        wrapper.current.style.left = `${event.pageX}px`;
        wrapper.current.style.top = `${event.pageY}px`;
    }

    useEffect(() => {
        if (!wrapper.current) {
            return;
        }
        // wrapper.current.onclick = (event) => { setOffset({x: event.offsetX, y: event.offsetY}) }
        wrapper.current.onmousedown = (event: MouseEvent) => {
            if (!wrapper.current) {
                return;
            }
            moveAt(event)
    
            wrapper.current.style.position = 'absolute';
            document.onmousemove = moveAt;
            wrapper.current.onmouseup = () => {
                if (!wrapper.current) {
                    return;
                }
        
                wrapper.current.style.position = 'static';
                document.onmousemove = null;
                wrapper.current.onmouseup = null;
                onDrop && onDrop(event.pageX, event.pageY);
            }
        }
    }, [wrapper.current])

    return (
        <div className={styles['drag']} ref={wrapper}>
            {children}
        </div>
    )
}

export interface IDraggableProps {
    children: JSX.Element
    onDrop?: (x: number, y: number) => void
}