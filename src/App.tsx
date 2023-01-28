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

  const RemoveReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={RemoveReminder}/>
    </div>
  );
}

export default App;
