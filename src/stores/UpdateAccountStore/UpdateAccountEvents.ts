import { createEvent } from "effector";
import { RequestError } from "../../domain/request";

export const loadUpdateAccount = createEvent("loadUpdateAccount");
export const loadUpdateAccountDone = createEvent("loadUpdateAccountDone");
export const loadUpdateAccountFail = createEvent<RequestError>("loadUpdateAccountFail");