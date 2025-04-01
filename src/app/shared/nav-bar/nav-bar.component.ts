import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  toolingPage: string = 'tooling-page';

  constructor(private renderer: Renderer2, private elRef: ElementRef, private route: ActivatedRoute) {}

  ngOnInit() {
		this.route.fragment.subscribe((fragment) => {
			if (fragment) {
				const element = document.getElementById(fragment);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	}

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
