//Gestion du localstorage

import { Injectable } from '@angular/core';
import { Stagiaire } from '../models/stagiaire.model';

@Injectable({ providedIn: 'root' })
export class StagiaireService {
  private readonly STORAGE_KEY = 'stagiaires';

  getStagiaires(): Stagiaire[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveStagiaire(stagiaire: Stagiaire): void {
    const stagiaires = this.getStagiaires();
    if (stagiaire.id) {
      const index = stagiaires.findIndex(s => s.id === stagiaire.id);
      stagiaires[index] = stagiaire;
    } else {
      stagiaire.id = Date.now();
      stagiaires.push(stagiaire);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stagiaires));
  }

  deleteStagiaire(id: number): void {
    const stagiaires = this.getStagiaires().filter(s => s.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stagiaires));
  }
}