import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, updateNumber } from "../../redux/slices/counterSlice";
import styles from "../../styles.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const number = useSelector((state) => state.counter.number);
  const [stepDraft, setStepDraft] = useState(String(number));

  const handleNumberChange = (event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) return;

    setStepDraft(value);
    const nextNumber = Number(value);
    if (value !== "" && Number.isSafeInteger(nextNumber) && nextNumber >= 1) {
      dispatch(updateNumber(nextNumber));
    }
  };

  const handleNumberBlur = () => {
    setStepDraft(String(number));
  };

  const handleReset = () => {
    dispatch(reset());
    setStepDraft("1");
  };

  return (
    <div className={styles.counterArea}>
      <div className={styles.countLabel}>Current count</div>
      <output className={styles.count} aria-live="polite" aria-label="Current count">
        {count}
      </output>
      <label className={styles.stepLabel} htmlFor="stepValue">Step value</label>
      <input
        className={styles.stepInput}
        id="stepValue"
        type="number"
        min="1"
        step="1"
        inputMode="numeric"
        value={stepDraft}
        onChange={handleNumberChange}
        onBlur={handleNumberBlur}
      />
      <div className={styles.actions}>
        <button className={styles.actionButton} type="button" onClick={() => dispatch(decrement())} aria-label={`Decrement by ${number}`}>
          <FiMinus aria-hidden="true" /> {number}
        </button>
        <button className={styles.actionButton} type="button" onClick={() => dispatch(increment())} aria-label={`Increment by ${number}`}>
          <FiPlus aria-hidden="true" /> {number}
        </button>
      </div>
      <button className={styles.resetButton} type="button" onClick={handleReset}>Reset counter</button>
    </div>
  );
};

export default Counter;
