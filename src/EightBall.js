import './EightBall.css';
import { useState } from 'react';

const EightBall = ({ answers }) => {
    const defaultText = { msg: 'Think of a question.', color: 'black' };
    const [answer, setAnswer] = useState(defaultText);

    return (
        <div className="EightBall">
            <div className="EightBall-container" style={{ backgroundColor: answer.color }}>
                <h4>{answer.msg}</h4>
            </div>
            <button onClick={() => setAnswer(answers[Math.floor(Math.random() * answers.length)])} className="EightBall-button">Shake!</button>
        </div >
    )
}

export default EightBall;