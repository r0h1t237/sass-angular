import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss','../main.scss']
})
export class ProjectsComponent {
eye=faEye;
github=faGithub
}
