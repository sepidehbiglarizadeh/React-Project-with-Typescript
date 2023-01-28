import { title } from "process";
import React, { useEffect, useState } from "react";
import "./App.css";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import addReminderService from "./services/addReminderService";
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

  const AddReminder = async (title: string) => {
    try {
      const { data } = await addReminderService(title);
      setReminders([data, ...reminders]);
    } catch (error) {}
  };

  const RemoveReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={AddReminder} />
      <ReminderList items={reminders} onRemoveReminder={RemoveReminder} />
    </div>
  );
}

export default App;
