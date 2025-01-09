import { Component } from '@angular/core';
import { faFacebook,faInstagram,faTwitter,faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss','../main.scss']
})
export class HomePageComponent {
facebook=faFacebook;
linkedin=faLinkedinIn;
twitter=faTwitter;
instagram=faInstagram;
github=faGithub;

}
