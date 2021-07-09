import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gabby Freed';
  
  
  constructor() { }

  ngOnInit(): void {
        //Where I register the plugin
        gsap.registerPlugin(ScrollTrigger);

        //Looping over all the sections in my components and then setting the animations
        gsap.utils.toArray("section").forEach((section: any, i) => {
          gsap.to(section, {
            scrollTrigger: {
              // Trigger the animation as soon as the section comes into view
              trigger: section,
              
              // Pin the section to give a feeling like slide for next section
              pin: true,
    
              // Remove the extra pin space added by default
              pinSpacing: false
            }
          });
        });
  
  }

}
