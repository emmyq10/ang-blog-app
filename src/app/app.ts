import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { CategoryNavbar } from './layouts/category-navbar/category-navbar';
import { Footer } from './layouts/footer/footer';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CategoryNavbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title = 'ang-blog-app';
}
