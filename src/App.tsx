import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import getRemindersService from "./services/getRemindersService";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const getAllReminders = async () => {
      try {
        const { data } = await getRemindersService();
        setReminders(data);
      } catch (error) {}
    };
    getAllReminders();
  }, []);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
