window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.getEntriesByType("navigation")[0].type === "back_forward");
    if ( historyTraversal ) {
        window.location.reload();
    }
});