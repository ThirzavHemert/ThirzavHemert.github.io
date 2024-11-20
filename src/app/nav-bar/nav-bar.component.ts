import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const listItems = this.elRef.nativeElement.querySelectorAll('ul li');

    listItems.forEach((item: HTMLElement) => {
      this.renderer.listen(item, 'click', () => {
        listItems.forEach((el: HTMLElement) => this.renderer.removeClass(el, 'clicked'));
        this.renderer.addClass(item, 'clicked');
      });
    });
  }
}
