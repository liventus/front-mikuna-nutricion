import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,signOut,signInWithPopup ,GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth ) { }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  

  async getCurrentUser() {
   
    const user = this.auth.currentUser;
    if (user===undefined) {
      return null;
    }else{
      return user;
    }
    
 
}

async isUserLoggedIn() {
  const user = await this.getCurrentUser();
  return !!user;
}


async getUid() {
  const user = await this.getCurrentUser();
  if(user===undefined){

  return null;
  }else{
    return user?.uid;
  }
}

}
