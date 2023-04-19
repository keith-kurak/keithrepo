import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { withSetPropAction } from "./helpers/withSetPropAction";
import { formatDate } from "./helpers/formatDate";
import { EntryModel } from "./Entry";

/**
 * This represents an episode of React Native Radio.
 */
export const BucketModel = types
  .model("Bucket")
  .props({
    name: "",
    entries: types.array(EntryModel),
  })
  .actions(withSetPropAction)
  .actions((bucket) => ({
    addEntry({ value, description }: { value: number; description: string }) {
      bucket.entries.push({ value, description, date: "" });
    },
  }))
  .views((episode) => ({}));

export interface Bucket extends Instance<typeof BucketModel> {}
export interface BucketSnapshotOut extends SnapshotOut<typeof BucketModel> {}
export interface BucketSnapshotIn extends SnapshotIn<typeof BucketModel> {}

// @demo remove-file
