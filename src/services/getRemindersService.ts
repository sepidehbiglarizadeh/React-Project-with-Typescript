import Reminder from "../models/reminder";
import http from "./httpServices";

const getRemindersService = () => {
  return http.get<Reminder[]>("/todos");
}
 
export default getRemindersService;