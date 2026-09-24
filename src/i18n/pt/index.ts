import type { Dictionary } from "../types";
import { search } from "./search";
import { toolCards } from "./tool-cards";
import { ui } from "./ui";

export const dictionary: Dictionary = { ui, toolCards, search };
