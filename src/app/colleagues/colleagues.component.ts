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

nextComment() {
  this.activeCommentIndex++;
  /* this.activeCommentIndex = this.activeCommentIndex % this.commentdata.commentsList.length; */
  console.log('index active comment: ', this.activeCommentIndex);
}

previousComment() {
  this.activeCommentIndex--;
  this.activeCommentIndex = this.activeCommentIndex % this.commentdata.commentsList.length;
}

}
