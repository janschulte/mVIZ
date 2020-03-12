import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vis-resolver-starter',
  templateUrl: './vis-resolver-starter.component.html',
  styleUrls: ['./vis-resolver-starter.component.scss']
})
export class VisResolverStarterComponent implements OnInit {

  @Input() fileName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  openVisResolver() {
    const modifiedFileName = encodeURIComponent(this.fileName);
    this.router.navigate([`resolver/${modifiedFileName}`], { relativeTo: this.route });
  }

}
