document.getElementById( 'loginForm' ).addEventListener( 'submit' , function( e ) {
    e.preventDefault(  ) ;

    const name = document.getElementById( 'name' ).value ;
    const id = document.getElementById( 'id' ).value ;

    window.location.href = `result.html?name=${name}&id=${id}` ;
} ) ;