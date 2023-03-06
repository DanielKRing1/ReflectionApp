import { combineReducers } from "redux";

import journalingPhaseSlice from "./journalingPhaseSlice";

import createJournalSlice from "./createJournalSlice";
import activeJournalSlice from "./activeJournalSlice";
import journalMetadataSlice from "./journalMetadataSlice";
import journalThoughtsDictSlice from "./journalThoughtsDictSlice";
import journalEntriesSlice from "./journalEntriesSlice";

import newInklingsSlice from "./newInklingsSlice";
import newJournalEntrySlice from "./newJournalEntrySlice";

export default combineReducers({
  journalingPhaseSlice,

  createJournalSlice,
  activeJournalSlice,
  journalMetadataSlice,
  journalThoughtsDictSlice,
  journalEntriesSlice,

  newInklingsSlice,
  newJournalEntrySlice,
});
