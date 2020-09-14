// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/initialize_persistence.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_initialize_persistence]
import { enableIndexedDbPersistence } from "firebase/firestore"; 

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully
// [END modular_initialize_persistence]