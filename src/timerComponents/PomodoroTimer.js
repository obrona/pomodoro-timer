

import Timer from './Timer'
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import './PomodoroTimer.css'
import{ useState } from 'react'

function PomodoroTimer() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings: showSettings,
        setShowSettings: setShowSettings,
        workMinutes: workMinutes,
        breakMinutes: breakMinutes,
        setBreakMinutes: setBreakMinutes,
        setWorkMinutes: setWorkMinutes
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default PomodoroTimer;
