import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, updateNumber } from "../../redux/slices/counterSlice";
import styles from "../../styles.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const number = useSelector((state) => state.counter.number);
  const handleNumberChange = (event) => dispatch(updateNumber(Number(event.target.value.replace(/\D/g, "")) || 0));
  return <div className={styles.counterArea}><div className={styles.countLabel}>Current count</div><output className={styles.count} aria-live="polite">{count}</output><label className={styles.stepLabel} htmlFor="stepValue">Step value</label><input className={styles.stepInput} id="stepValue" type="number" min="1" value={number} onChange={handleNumberChange} /><div className={styles.actions}><button className={styles.actionButton} type="button" onClick={() => dispatch(decrement())} aria-label={`Decrement by ${number}`}>− {number}</button><button className={styles.actionButton} type="button" onClick={() => dispatch(increment())} aria-label={`Increment by ${number}`}>+ {number}</button></div><button className={styles.resetButton} type="button" onClick={() => dispatch(reset())}>Reset counter</button></div>;
};
export default Counter;