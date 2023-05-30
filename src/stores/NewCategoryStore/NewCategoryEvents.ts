import { createEvent } from "effector";
import { RequestError } from "../../domain/request";

export const loadNewACategory = createEvent("loadNewACategory");
export const loadNewACategoryDone = createEvent("loadNewACategoryDone");
export const loadNewACategoryFail = createEvent<RequestError>("loadNewACategoryFail");