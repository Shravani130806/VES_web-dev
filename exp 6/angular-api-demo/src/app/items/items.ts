import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    console.log("Component loaded");

    const data = await this.apiService.getItems();
    console.log("Component received:", data);

    this.items = data.slice(0, 10);

    this.cd.detectChanges();  
  }
}