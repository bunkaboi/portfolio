import { inject, Injectable } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor(public language: LanguageService) { }

  projectIndex:number = 0;

  projectlist = [
    {
      hover: false,
      number: "01",
      name: "Join",
      img_preview: "preview join.svg",
      img_frame: "Frame_join.png",
      about: [
          "Ein Aufgaben Management Tool inspiriert von einem Kanban System. Erstelle und organisiere Aufgaben per Drag & Drop Funktionen, weise Benutzer und Kategorien zu.", 
          "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
        ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "CSS",
          icon: "icon_css.svg"
        },
        {
          tech: "HTML",
          icon: "icon_html.svg"
        },
        {
          tech: "Firebase",
          icon: "icon_firebase.svg"
        },
        {
          tech: "Angular",
          icon: "icon_angular.svg"
        },
        {
          tech: "TypeScript",
          icon: "icon_typescript.svg"
        }
      ]
    },
    {
      hover: false,
      number: "02",
      name: "El Pollo Loco",
      img_preview: "preview loco.svg",
      img_frame: "Frame_loco.png",
      about: [
        "Springen, rennen und werfen. Dieses Spiel basiert auf Objektorientierung. Hilf Pepe Münzen und Tabasco Salsa einzusammeln, um gegen die verrückten Hennen zu kämpfen.", 
        "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
      ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "JavaScript",
          icon: "icon_javascript.svg"
        },
        {
          tech: "HTML",
          icon: "icon_html.svg"
        },
        {
          tech: "CSS",
          icon: "icon_css.svg"
        }
      ]
    },
    {
      hover: false,
      number: "03",
      name: "DABubble",
      img_preview: "preview bubble.svg",
      img_frame: "Frame_bubble.png",
      about: [
        "Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Messaging und eine solide Kanalanordnung.", 
        "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization."
      ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "JavaScript",
          icon: "icon_javascript.svg"
        },
        {
          tech: "HTML",
          icon: "icon_html.svg"
        },
        {
          tech: "CSS",
          icon: "icon_css.svg"
        }
      ]
    }
  ];

}
