import { Component } from '@angular/core';
import { faEnvelope,faMobileAlt,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
email=faEnvelope;
mobile=faMobileAlt;
address=faMapMarkerAlt;
}
