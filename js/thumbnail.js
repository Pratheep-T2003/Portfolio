document.getElementById('video-thumbnail').onclick = function() {
    this.style.display = 'none'; 
    var iframe = document.getElementById('video-iframe');
    iframe.src = "https://www.youtube.com/embed/opGK4380cyE?si=8SyAFY8DjbFH993U"; 
    iframe.style.display = 'block'; 
};