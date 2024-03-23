import styles from './input.module.scss';

export function Input({ value, placeholder, onChange }: IInputProps) {

    const cb = onChange || (() => {});

    return (
        <input placeholder={placeholder} className={styles['input']} value={value} onChange={({ target }) => { cb(target.value)}} />
    )
}

export interface IInputProps {
    value?: string
    placeholder?: string
    onChange?: (value: string) => void 
}