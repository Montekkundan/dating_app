import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MembersService } from '../_services/members.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameExistsResolver implements Resolve<boolean> {
  constructor(private membersService: MembersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const username = route.paramMap.get('username');

    // Check if username is valid
    if (!username || username.trim().length === 0) {
      this.router.navigate(['/not-found']);
      return of(false);
    }

    return this.membersService.getMember(username).pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/not-found']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(false);
      })
    );
  }
}
