import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { BucketModel } from "./Bucket";
import { withSetPropAction } from "./helpers/withSetPropAction";

export const BucketsStoreModel = types
  .model("EpisodeStore")
  .props({
    buckets: types.array(BucketModel),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    addBucket(name: string) {
      store.buckets.push({ name });
    },
  }))
  .views((store) => ({}));

export interface BucketsStore extends Instance<typeof BucketsStoreModel> {}
export interface BucketsStoreSnapshot extends SnapshotOut<typeof BucketsStoreModel> {}
