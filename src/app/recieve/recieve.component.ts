import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { collectionChanges, collectionSnapshots } from '@angular/fire/firestore';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-recieve',
  templateUrl: './recieve.component.html',
  styleUrls: ['./recieve.component.css']
})
export class RecieveComponent implements OnInit {

  all_users: any[] = [];
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    // return all snapshots
    collectionSnapshots(this.serverService.getAll()).pipe(
      map((changes) => {
        return changes.map((c) => {
          return ({ id: c.id, ...c.data() })
        })
      })
    ).subscribe(data => {
      this.all_users = data;
    });

    // return only changed snapshots
    /*
    collectionChanges(this.serverService.getAll()).pipe(
      map((changes) => {
        return changes.map((c) => {
          return ({ id: c.doc.id, ...c.doc.data() })
        })
      })
    ).subscribe(data => {
      this.all_users = data;
    });
    */
  }

}
