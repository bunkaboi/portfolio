import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  commentsList = [
    {
      name: "R. Richter",
      jobtitle: "Handlanger",
      comment: "läuft bei ihm, Digger"
    },
    {
      name: "J. Mitzu",
      jobtitle: "Kämpfer",
      comment: "hashi jamakato"
    },
    {
      name: "M. Emsen",
      jobtitle: "Mittelsmann",
      comment: "manchmal mag man mutig mitgehen"
    },

  ]
}
