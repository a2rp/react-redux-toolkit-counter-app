import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, updateNumber, reset } from '../../redux/slices/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    const number = useSelector(state => state.counter.number);
    const [incrementText, setIncrementText] = useState("Increment by " + number);
    const [decrementText, setDecrementText] = useState("Decrement by " + number);

    const handleNumberChange = (event) => {
        const value = event.target.value.replace(/\D/g, "");
        dispatch(updateNumber(Number(value)));
    };

    useEffect(() => {
        setIncrementText("Increment by " + number);
        setDecrementText("Decrement by " + number);
    }, [number]);

    return (
        <div>

            <div
                style={{ marginTop: "30px", fontWeight: 900, fontSize: "30px" }}
            >Count = {count}</div>

            <div style={{
                marginTop: "15px",
                display: "flex",
                gap: "15px"
            }}>
                <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    style={{ paddingLeft: "15px" }}
                />

                <input
                    type="button"
                    value={incrementText}
                    onClick={() => dispatch(increment())}
                    style={{ padding: "5px" }}
                />

                <input
                    type="button"
                    value={decrementText}
                    onClick={() => dispatch(decrement())}
                    style={{ padding: "5px" }}
                />

                <input
                    type="button"
                    value="Reset"
                    onClick={() => dispatch(reset())}
                    style={{ padding: "5px" }}
                />
            </div>
        </div>
    )
}

export default Counter



