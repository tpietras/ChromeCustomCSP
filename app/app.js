function injectCSP(){
    console.log("Im working");
    var meta = document.createElement('meta');
//     <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self'"/>
    meta.httpEquiv = "Content-Security-Policy";
    meta.content="default-src 'none'; style-src 'self' https: 'unsafe-inline'; script-src 'self' https: 'unsafe-inline'; connect-src 'self' https: 'unsafe-inline'; img-src 'self' https: 'unsafe-inline'; frame-src 'self' https: 'unsafe-inline'";
    document.getElementsByTagName('head')[0].appendChild(meta);
    console.log("im done");
}

injectCSP();
