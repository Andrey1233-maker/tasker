import { useState } from 'react';
import { Button, Modal, Input } from '../../ui';
import styles from './auth-page.module.scss';

export function AuthPage() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => {setIsOpen(prev => !prev)}}>
            <div className={styles['auth-block']}>
                <p className={styles['auth-title']}>Sosala.Tasks</p>
                <div className={styles['auth-creds']}>
                    <Input placeholder='email'/>
                    <Input placeholder='passwaord'/>
                </div>
                <Button onClick={() => {}}>Login</Button>
            </div>
        </Modal>
    )   
}