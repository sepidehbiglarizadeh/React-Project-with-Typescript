import Reminder from "../models/reminder";
import http from "./httpServices";

const addReminderService = (title: string) => {
  return http.post<Reminder>("/todos", title);
};

export default addReminderService;
