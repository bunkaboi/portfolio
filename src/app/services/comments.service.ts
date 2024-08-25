import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  commentsList = [
    {
      name: "P. Döbler",
      jobtitle: [
        "Geschäftsführer", 
        "CEO"
      ],
      comment: [
        "Björn denkt und handelt unternehmerisch. Er sucht sich stets neue Herausforderungen, um sich weiterzuentwickeln.", 
        "Björn thinks and acts entrepreneurially. He constantly seeks new challenges to develop himself."
      ]
    },
    {
      name: "M. Wietbrauk",
      jobtitle: [
        "Abteilungsleiter", 
        "Head of department"
      ],
      comment: [
        "Durch seine Fähigkeit sich in Prozesse des Tagesgeschäfts einzudenken, und seine Leidenschaft dafür sich mit Hilfe von Software Werkzeuge zu erschaffen, die Arbeitfluss optimieren, schafft er für die Abteilung und dem Team die Kapazität das Geschäft erfolgreicher und ertragreicher zu entwickeln.", 
        "Thanks to his ability to immerse himself in the day-to-day processes and his passion for creating software tools that optimize workflows, he creates the capacity for the department and the team to develop the business more successfully and profitably."
      ]
    },
    {
      name: "Helmut Langhoff",
      jobtitle: [
        "Verkaufsleiter", 
        "Key Account Manger"
      ],
      comment: [
        "Björn ist ein von jedem geschätzter Kollege, der stets hilfsbereit mit Rat und Tat zur Seite steht. Durch seine Fähigkeit Probleme spontan, und mit dem aktuell verfügbaren Mitteln, zu lösen, konnten wir einige Kundenprojekte retten.",
        "Björn is a highly valued colleague who is always ready to assist with advice and action. Thanks to his ability to solve problems spontaneously and with the resources available at the time, we were able to rescue several customer projects."
      ]
    },

  ]
}
