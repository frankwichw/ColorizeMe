export default function logout() {
    sessionStorage.removeItem('userData');
    // const auth2 = window.gapi.auth2.getAuthInstance()
    // if (auth2 != null) {
    //     auth2.signOut().then(
    //     auth2.disconnect().then(this.props.onLogoutSuccess)
    //     )
    // }
};
