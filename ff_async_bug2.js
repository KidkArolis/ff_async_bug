var s = document.createElement("script");
s.src = "http://localhost/ff_async_bug/empty.js" + "?" + new Date().getTime();
document.head.appendChild(s);
