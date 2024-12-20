import styles from './App.module.css'
import { AppFunctions } from './AppFunctions'

const App = () => {
  const {
    handleFeedback, all, good, neutral, bad
  } = AppFunctions();

  const stats = { all, good, neutral, bad };

  return (
    <div className={styles.container}>
        <h2>Give feedback</h2>
        <select onChange={handleFeedback}>
            <option value="all">Count all</option>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
        </select>
      <div className={styles.statsContainer}>
          <h2>Statistics</h2>
          <div className={styles.stats}>
              {Object.keys(stats).map((stat) => (
                <p key={stat} className={styles.stat}>
                    {stat}: {stats[stat]}
                </p>
              ))}
          </div>  
      </div>
    </div>
  )
}
export default App