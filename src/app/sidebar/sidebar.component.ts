import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
    });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
