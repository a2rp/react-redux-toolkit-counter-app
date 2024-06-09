import Counter from "./components/counter";
import styles from "./styles.module.scss";

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.appHeading}>Counter app using "react-redux, redux-toolkit"</h1>
            <Counter />
        </div>
    );
}

export default App;
