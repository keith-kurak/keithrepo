import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { formatDate } from "./helpers/formatDate"

/**
 * This represents an episode of React Native Radio.
 */
export const EntryModel = types
  .model("Entry")
  .props({
    date: types.string,
    value: types.number,
    description: types.optional(types.string, ""),
  })
  .actions(withSetPropAction)
  .views((entry) => ({

  }))

export interface Entry extends Instance<typeof EntryModel> {}
export interface EntrySnapshotOut extends SnapshotOut<typeof EntryModel> {}
export interface EntrySnapshotIn extends SnapshotIn<typeof EntryModel> {}

// @demo remove-file
