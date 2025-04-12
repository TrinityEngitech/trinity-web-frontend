document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 1, 25, 4000);
    counter("count2", 3, 100, 4000);
    counter("count3", 3, 500, 4000);
    counter("count4",  3, 500, 4000);
     counter("count5",-100, 0, 4000);
   });
   