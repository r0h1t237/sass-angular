import { Component } from '@angular/core';
import { faFacebook,faInstagram,faTwitter,faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  facebook=faFacebook;
  linkedin=faLinkedinIn;
  twitter=faTwitter;
  instagram=faInstagram;
  github=faGithub;
}
