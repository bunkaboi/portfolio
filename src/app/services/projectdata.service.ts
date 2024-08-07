import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }

  projectlist = [
    {
      hover: false,
      number: "01",
      name: "Join",
      img_preview: "preview join.svg",
      img_frame: "Frame_join.png",
      about: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
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
      about: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
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
      about: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
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
