import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel: CarouselComponent;


  ngOnInit(): void {
      // onInit code.
  }

  ngAfterViewInit(): void {
      // afterViewInit code.
      this.init();
  }

  init(): void {
      // init code.
      const basePath = './../../../src/images/';

      this.carousel.dataSource = generateDataSource(6);

      function generateDataSource(items: number) {
          const headlines = ['Quentin CARDON'],
              contentParagraphs = [`Ceci est un paragraphe `],
              dataSource = [];

          for (let i = 0; i < items; i++) {
              const item = {
                  image: `${basePath}carousel-medium-${i + 1}.jpg`,
                  label: headlines[parseInt('' + Math.random() * 5)].substring(0, (5 + Math.random() * 10)),
                  content: contentParagraphs[parseInt('' + Math.random() * 5)].substring(0, (50 + Math.random() * 10)) + '.'
              };
              dataSource.push(item);
          }
          return dataSource;
      }
  }
}