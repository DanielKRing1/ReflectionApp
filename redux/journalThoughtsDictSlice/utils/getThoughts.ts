import { Thought, ThoughtsDict } from "../../../db/api/types";

export const getThought = (
  thoughtId: string,
  thoughtsDict: ThoughtsDict
): Thought | undefined => thoughtsDict[thoughtId];
