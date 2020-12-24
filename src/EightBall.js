import './EightBall.css';
import { useState } from 'react';
import { getRandom } from './helpers';

const EightBall = ({ answers }) => {
    const defaultText = { msg: 'Think of a question.', color: 'black' };
    const [answer, setAnswer] = useState(defaultText);

    const defaultCounts = { green: 0, goldenrod: 0, red: 0 };
    const [counts, setCounts] = useState(defaultCounts);

    return (
        <div className="EightBall">
            <div className="EightBall-container" style={{ backgroundColor: answer.color }}>
                <h4>{answer.msg}</h4>
            </div>
            <button onClick={handleShake} className="EightBall-button">Shake!</button>
            <button onClick={handleReset} className="EightBall-button">Reset</button>
            <div className="EightBall-answer-counts">
                <div style={{ color: 'green' }}><h5>Yes</h5></div>
                <div style={{ color: 'goldenrod' }}><h5>Maybe</h5></div>
                <div style={{ color: 'red' }}><h5>No</h5></div>
                <div>{counts.green}</div>
                <div>{counts.goldenrod}</div>
                <div>{counts.red}</div>
            </div>
        </div >
    )

    async function handleShake() {
        const newAnswer = getRandom(answers);
        setAnswer(newAnswer);
        counts[newAnswer.color] += 1;
        setCounts(counts);
    }

    function handleReset() {
        setAnswer(defaultText);
        setCounts(defaultCounts);
    }
}

export default EightBall;