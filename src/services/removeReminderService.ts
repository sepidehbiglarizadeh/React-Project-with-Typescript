import Reminder from "../models/reminder";
import http from "./httpServices";

const removeReminderService = (id: number) => {
  return http.delete<Reminder>(`/todos/${id}`);
};

export default removeReminderService;
