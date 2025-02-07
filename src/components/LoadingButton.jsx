import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function LoadingButton({ idButton, onClick, children }) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise(resolve => {
                setTimeout(resolve, 2000);
            });
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="secondary"
            disabled={isLoading}
            onClick={onClick}
            id={idButton}
        >
            {children}
            🔍
        </Button>
    );
}

export default LoadingButton;