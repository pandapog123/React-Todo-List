import { createContext } from "react";
import { todo } from "../types/todo";

export const TodoContext = createContext<todo[]>([]);
