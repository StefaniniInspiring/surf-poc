import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { firebase } from '@firebase/app';
import '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private afs: AngularFirestore) {}

  observeContent(collection) {
    return this.afs
      .collection(collection)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  update(doc, data) {
    this.afs.doc(doc).set(data, { merge: true });
  }
}
