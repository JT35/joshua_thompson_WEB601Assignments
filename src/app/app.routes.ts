import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'content',
    loadComponent: () => import('./content-list/content-list.component').then(m => m.ContentListComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./master-form-component/master-form-component.component').then(m => m.MasterFormComponentComponent)
  },
  {
    path: 'content/add',
    loadComponent: () => import('./add-movie-collection/add-movie-collection.component').then(m => m.AddMovieCollectionComponent)
  },
  {
    path: 'content/find',
    loadComponent: () => import('./find-movie-collection/find-movie-collection.component').then(m => m.FindMovieCollectionComponent)
  },
  {
    path: 'content/edit',
    loadComponent: () => import('./edit-movie-collection/edit-movie-collection.component').then(m => m.EditMovieCollectionComponent)
  },
  {
    path: 'content/remove',
    loadComponent: () => import('./remove-movie-collection/remove-movie-collection.component').then(m => m.RemoveMovieCollectionComponent)
  },
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'content',
  }
];
