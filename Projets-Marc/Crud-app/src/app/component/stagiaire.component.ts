// Composant Principal
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from '../services/stagiaire.service';
import { Stagiaire } from '../models/stagiaire.model'

@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  stagiaires: Stagiaire[] = [];
  stagiaireForm: FormGroup;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private stagiaireService: StagiaireService
  ) {
    this.stagiaireForm = this.fb.group({
      id: [null],
      nom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      departement: ['', Validators.required],
      ecole: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadStagiaires();
  }

  loadStagiaires(): void {
    this.stagiaires = this.stagiaireService.getStagiaires();
  }

  onSubmit(): void {
    if (this.stagiaireForm.invalid) return;

    this.stagiaireService.saveStagiaire(this.stagiaireForm.value);
    this.loadStagiaires();
    this.resetForm();
  }

  editStagiaire(stagiaire: Stagiaire): void {
    this.isEditing = true;
    this.stagiaireForm.patchValue(stagiaire);
  }

  deleteStagiaire(id: number): void {
    this.stagiaireService.deleteStagiaire(id);
    this.loadStagiaires();
  }

  resetForm(): void {
    this.stagiaireForm.reset();
    this.isEditing = false;
  }
}