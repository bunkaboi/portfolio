import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  langEng = true;
  langDeu = false;
  
langSwitch() {
  if(this.langEng) {
    this.langEng = false;
    this.langDeu = true;
  } else if (this.langDeu) {
    this.langEng = true;
    this.langDeu = false;
  }
  this.setLanguageIndex();
}

languageIndex = 1;

setLanguageIndex() {
  if(this.langEng) {
    this.languageIndex = 1;
  } else if (this.langDeu) {
    this.languageIndex = 0;
  }
}

  atf = [
    {
      AboutMe: "Über mich",
      Skills: "Fähigkeiten",
      Projects: "Projekte",
      work: "Für remote-work verfügbar",
      job: "Frontend Entwickler",
      locate: "Wohnhaft zwischen Hamburg und Schwerin",
      status: "Offen für den Einsatz in der IT",
      checkBTN: "Check meine Projekte",
      contactBTN: "Kontaktiere mich",
    },
    {
      AboutMe: "About me",
      Skills: "Skills",
      Projects: "Projects",
      work: "Available for remote work",
      job: "Frontend Developer",
      locate: "Based between Hamburg and Schwerin",
      status: "Open to work",
      checkBTN: "Check my work",
      contactBTN: "Contact me",
    }
  ]

  aboutMe = [
    {
      WhoIAm: "Wer ich bin",
      AboutMe: "Über mich",
      text: "Hallo, ich bin ein deutschsprachiger Frontend Entwickler und bin wohnhaft zwischen Hamburg und Schwerin. Motiviert durch die unendlichen Möglichkeiten in der IT, strebe ich an visuell ansprechende, und intuitiv verwendbare Webseiten und Applikationen zu erstellen.",
      bullet1: "Flexibel in Bezug auf der Arbeitsumgebung kann ich sowohl im Osten Schleswig-Holsteins oder auch remote im Home-Office arbeiten.",
      bullet2: "Ich gehe mit offenen Geist voran und suche stets nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu verbessern.",
      bullet3: "Programmieren ist für mich mehr als nur Code schreiben; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen umwandeln zu können. So helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen Wirklichkeit werden zu lassen."
    },
    {
      WhoIAm: "Who I am",
      AboutMe: "About me",
      text: "Hi, I am a german speaking Frontend Developer based between Hamburg and Schwerin. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.",
      bullet1: "Flexible in terms of working environments, I can work effectively both on-site in eastern Schleswig-Holstein and remotely.",
      bullet2: "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.",
      bullet3: "In my profession, programmin isn't just about writing code; it's a creative form of problem-solving. I take prid in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
    }
  ]

  skillSet = [
    {
      Technologies: "Technologien",
      SkillSet: "Fähigkeiten",
      text1: "Meine berufliche Laufbahn umfasst die Arbeit an vielfältigen Projekten, bei denen ich ein breites Spektrum an Frontend-Technologien und -Konzepten eingesetzt habe. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und im sich ständig weiterentwickelnden Bereich der Webentwicklung auf dem neuesten Stand zu bleiben.",
      sub1: "Du benötigst",
      sub2: "weitere Fähigkeiten?",
      text2: "Fühl dich frei mich zu kontaktioeren. Ich freue mich darauf mein bisheriges Wissen zu erweitern.",
      letsTalkBTN: "Lass uns reden",
      mindset: "Wachstums- mentalität",
      interest: "Ich bin besonders interessiert an"
    },
    {
      Technologies: "Technologies",
      SkillSet: "Skill Set",
      text1: "My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.",
      sub1: "You need",
      sub2: "another skill?",
      text2: "Feel free to contact me. I look forward to expanding on my previous knowledge.",
      letsTalkBTN: "Let's talk",
      mindset: "Growth mindset",
      interest: "I have a special interest in learning"
    }
  ]

  portfolio = [
    {
      Portfolio: "Portfolio",
      Projects: "Ausgewählte Projekte",
      text: "Entdecke hier eine Auswahl meiner Arbeiten - interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu erleben.",
      projectHeadline: "Worüber handelt dieses Projekt?",
      projectNext: "Nächstes Projekt"
    },
    {
      Portfolio: "Portfolio",
      Projects: "Featured Projects",
      text: "Explore a selection of my work here - Interact with projects to see my skills in action.",
      projectHeadline: "What is this project about?",
      projectNext: "Next Project"
    }
  ]

  colleagues = [
    {
      headline: "Was meine Kollegen über mich sagen",
      
    },
    {
      headline: "What my colleagues say about me",
      
    }
  ]

  contactMe = [
    {
      contactme: "Was meine Kollegen über mich sagen",
      headline: "Lass uns zusammen arbeiten",
      problem: "Du hast ein Problem zu lösen?",
      text: "Kontaktiere mich über dieses Formular. Ich bin daran interessiert von dir zu hören, deine Ideen zu erfahren und dich mit meiner Arbeit zu unterstützen.",
      need: "Du suchst einen Frontend Entwickler?",
      talk: "Lass uns miteinander sprechen!",
      input1: "Wie ist dein Name?",
      placeholder1: "Hier deinen Namen eintragen",
      error1: "Ups, es scheint dein Name zu fehlen",
      input2: "Wie lautet deine E-Mail?",
      placeholder2: "deineMail@email.de",
      error2: "Hoppla! Deine E-Mail Adresse muss bitte eingegeben werden",
      input3: "Wie kann ich dir helfen?",
      placeholder3: "Hallo Björn, ich bin interessiert an...",
      error3: "Was benötigst du entwickelt?",
      policy1: "Ich habe die",
      policy2: "Datenschutzrichtlinie",
      policy3: "gelesen und stimme der Verarbeitung meiner Daten gemäß den darin beschriebenen Bedingungen zu.",
      policyError: "Bitte stimme der Datenschutzrichtlinie zu.",
      helloBtn: "Sag Hallo"
    },
    {
      contactme: "What my colleagues say about me",
      headline: "Let's work together",
      problem: "Got a problem to solve?",
      text: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
      need: "Need a Frontend Developer?",
      talk: "Let's talk!",
      input1: "What's your name?",
      placeholder1: "Your name goes here",
      error1: "Oops! it seems your name is missing",
      input2: "What's your email?",
      placeholder2: "youremail@email.com",
      error2: "Hoppla! your email is required",
      input3: "How can I help you?",
      placeholder3: "Hello Björn, I am interested in...",
      error3: "What do you need to develop?",
      policy1: "I've read the",
      policy2: "privacy policy",
      policy3: "and agree to the processing of my data as outlined.",
      policyError: "Please accept the privacy policy.",
      helloBtn: "Say Hello"
    }
  ]
}
