const params = new URLSearchParams(window.location.search) ;

const name = params.get( 'name' ) ;
const id = params.get( 'id' )

document.getElementById( 'welcome' ).innerHTML = `Welcome ${name} , Your ID is ${id}` ;