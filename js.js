<script>
var video = document.getElementById("sports");

// Function to check if element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (!isInViewport(video)) {
    video.pause(); // Pause video if it's not in viewport
  }
}

// Add event listener for scroll event
window.addEventListener("scroll", handleScroll);
</script>