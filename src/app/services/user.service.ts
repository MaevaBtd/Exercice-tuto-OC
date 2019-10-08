import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Will',
      lastName: 'Alexander',
      email: 'will@will.com',
      drinkPreference: 'Coca',
      hobbies: ['coder', 'boire du café']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
