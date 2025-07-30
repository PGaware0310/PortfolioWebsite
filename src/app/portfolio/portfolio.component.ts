import { Component, OnInit } from '@angular/core';
declare var AOS: any;
declare var TypeIt: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  ngOnInit(): void {
    const texts = ["Web Developer", "Angular Developer", "Frontend Developer", "UI/UX Designer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    const typedText = document.getElementById("typed-text");

    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      if (typedText) {
        typedText.textContent = letter;
      }

      if (letter.length === currentText.length) {
        setTimeout(erase, 1500);
      } else {
        setTimeout(type, 100);
      }
    }

    function erase() {
      letter = currentText.slice(0, --index);

      if (typedText) {
        typedText.textContent = letter;
      }

      if (letter.length === 0) {
        count++;
        setTimeout(type, 200);
      } else {
        setTimeout(erase, 50);
      }
    }

    type();
  }

    scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
