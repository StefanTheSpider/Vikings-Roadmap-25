import { useState } from 'react';

const messages = [
    'Do a good job in a Free Agency 💪',
    'do nice on the Draft 🤝',
    'Winn the Super Bowl 🏆',
];

export default function App() {
    const [step, setStep] = useState(1);
    const [openClose, setOpenClose] = useState(true);
    function handlePrevious() {
        if (step > 1) {
            setStep((step) => step - 1);
        }
    }
    function handleNext() {
        if (step < 3) {
            setStep((step) => step + 1);
        }
    }

    return (
        <>
            <button
                className="close"
                onClick={() => setOpenClose((btn) => !btn)}
            >
                &times;
            </button>
            {openClose && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <Button
                            textColor="fff"
                            bgColor="#ffc62f"
                            onClick={handlePrevious}
                        >
                            🫲🏻 Previus
                        </Button>
                        <Button
                            textColor="fff"
                            bgColor="#ffc62f"
                            onClick={handleNext}
                        >
                            Next 🫱🏻
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <>
            <button
                style={{ color: textColor, backgroundColor: bgColor }}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}
