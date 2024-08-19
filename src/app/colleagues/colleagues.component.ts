import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {

  constructor(public commentdata: CommentsService) { }

  activeCommentIndex = 1;

  inactiveCommentIndexLeft = 0;
  inactiveCommentIndexRight = 2;

  activeColor = "red";
  inactiveColor = "grey";

  nextCardAnimation = false;
  previousCardAnimation = false;
  currentSlide = this.commentdata.commentsList[this.activeCommentIndex];

  nextSlide() {
    if (this.nextCardAnimation == false) {
      this.nextCardAnimation = true;
    }
    setTimeout(() => {
      this.nextCardAnimation = false;
    }, 1000);
  }

  previousSlide() {
    if (this.previousCardAnimation == false) {
      this.previousCardAnimation = true;
    }
    setTimeout(() => {
      this.previousCardAnimation = false;
    }, 1000);
  }

  nextComment() {
    this.nextSlide();
    setTimeout(() => {
      this.activeCommentIndex++;
    this.activeCommentIndex = this.activeCommentIndex % this.commentdata.commentsList.length;
    this.inactiveSlidesIndexes();
    }, 1000)
    
    
    this.testlog();
  }


  previousComment() {
    this.previousSlide();
    setTimeout(() => {
      this.activeCommentIndex--;
    if (this.activeCommentIndex < 0) {
      this.activeCommentIndex = 2
    }
    this.inactiveSlidesIndexes();
    }, 1000) 
    
    this.testlog();
  }

  inactiveSlidesIndexes() {
    if (this.activeCommentIndex == 0) {
      this.inactiveCommentIndexLeft = 2;
      this.inactiveCommentIndexRight = 1;
    } else if (this.activeCommentIndex == 1) {
      this.inactiveCommentIndexLeft = 0;
      this.inactiveCommentIndexRight = 2;
    } else if (this.activeCommentIndex == 2) {
      this.inactiveCommentIndexLeft = 1;
      this.inactiveCommentIndexRight = 0;
    }
  }

  testlog() {
    console.log('index active comment: ', this.activeCommentIndex);
    console.log(' inactive left', this.activeCommentIndex - 1);
    console.log(' inactive right', this.activeCommentIndex + 1);
    console.log('nextCardAnimation = ', this.nextCardAnimation);
    console.log('previousCardAnimation = ', this.previousCardAnimation);
  }

}
