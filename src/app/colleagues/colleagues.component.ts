import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {

  commentdata = inject(CommentsService);

  activeCommentIndex = 1;

  inactiveCommentIndexLeft = 0;
  inactiveCommentIndexRight = 2;

  activeColor = "red";
  inactiveColor = "grey";

  slideCardAnimation = false;
  currentSlide = this.commentdata.commentsList[this.activeCommentIndex];

  nextSlide() {
    if (this.slideCardAnimation == false) {
      this.slideCardAnimation = true;
      this.activeCommentIndex++;
      this.activeCommentIndex = this.activeCommentIndex % this.commentdata.commentsList.length;
      
    }
    setTimeout(() => {
      this.slideCardAnimation = false;
    }, 1000);
  }

  nextComment() {
    this.activeCommentIndex++;
    this.activeCommentIndex = this.activeCommentIndex % this.commentdata.commentsList.length;
    this.inactiveSlidesIndexes();
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

  previousComment() {
    this.activeCommentIndex--;
    if (this.activeCommentIndex < 0) {
      this.activeCommentIndex = 2
    }
    this.inactiveSlidesIndexes();
    this.testlog();
  }

  testlog() {
    console.log('index active comment: ', this.activeCommentIndex);
    console.log(' inactive left', this.activeCommentIndex - 1);
    console.log(' inactive right', this.activeCommentIndex + 1);
  }

  slideEffect() {

  }

}
