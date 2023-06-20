import EventEmitter from 'events';


const userlogin = 'islogged';
const loginExpiryKey = 'tokenExpiry';
const Userinfo = 'userinfo';
const localStorageKey = 'loggedIn';


class Auth extends EventEmitter {
    authToken = null
    userProfile = null
    tokenExpiry = null 
 
    localLogin(authResult) {
        this.tokenExpiry = new Date();
        localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        localStorage.setItem(userlogin, 'true');
        localStorage.setItem(Userinfo, JSON.stringify({
            displayName : authResult.user.displayName,
            email : authResult.user.email,
            photoURL : authResult.user.photoURL,
        }));
    }

    Logout() {
        localStorage.removeItem(loginExpiryKey);
        localStorage.removeItem(userlogin);
        localStorage.removeItem(Userinfo);
    }

    isAuthenticated() {
        return (
            new Date(Date.now()) !==  new Date(localStorage.getItem(loginExpiryKey)) &&
            localStorage.getItem(userlogin) === 'true'
        );
    }


    localAuthLogin(authResult) {        
        this.idToken = authResult.idToken;
        this.userProfile = authResult.idTokenPayload;
        this.tokenExpiry = new Date(this.userProfile.exp * 1000);
        localStorage.setItem(loginExpiryKey, this.tokenExpiry);
        localStorage.setItem(localStorageKey, 'true');
        localStorage.setItem(Userinfo, JSON.stringify({
            displayName: this.userProfile.name,
            email: this.userProfile.email,
            photoURL: this.userProfile.picture,
            providerId: this.userProfile.sub.substr(0, this.userProfile.sub.indexOf('|')),
            uid: this.userProfile.sub
        }));
    }

    logOut() {
        localStorage.removeItem(localStorageKey);
        localStorage.removeItem(loginExpiryKey);
        localStorage.removeItem(Userinfo);
        this.idToken = null;
        this.tokenExpiry = null;
        this.profile = null;
       
    }

    isAuthenticatedUser() {        
        return (
            new Date(Date.now()) < new Date(localStorage.getItem(loginExpiryKey)) &&
            localStorage.getItem(localStorageKey) === 'true'
        );
    }
}

export default new Auth();
