---
layout: minimum
title: Home
---

<div id="cloud-container">
  <canvas id="my_canvas"></canvas>
  <div id="tooltip" class="hidden"></div>
</div>

<style>
  /* Remove default browser margins to ensure full screen */
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevent scrolling */
  }

  #cloud-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #1a1a1a; /* Dark sleek background */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Tooltip styling */
  #tooltip {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: 5px 10px;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 14px;
    pointer-events: none; /* Let clicks pass through to the canvas */
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: opacity 0.2s;
  }

  .hidden {
    opacity: 0;
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.1.0/wordcloud2.min.js"></script>

<script>
  const canvas = document.getElementById('my_canvas');
  const tooltip = document.getElementById('tooltip');
  const stopWords = new Set(["the", "and", "is", "it", "to", "in", "of", "a", "that", "this", "for", "on", "with", "as", "are", "was", "at", "be", "we", "have", "from", "or", "by", "but", "not", "an", "if", "they", "which", "will", "can", "your", "my", "all", "so", "do"]);

  let wordList = []; // Store processed data here

  // A. Function to size canvas and draw cloud
  function drawCloud() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (wordList.length === 0) return;

    WordCloud(canvas, { 
      list: wordList,
      
      // ... your existing size/font settings ...
      gridSize: 18,
      weightFactor: function (size) {
        return Math.pow(size, 0.5) * (window.innerWidth / 100); 
      },
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      color: function (word, weight) {
        const colors = ['#61dafb', '#ff6b6b', '#feca57', '#1dd1a1', '#ff9ff3', '#ffffff'];
        return colors[Math.floor(Math.random() * colors.length)];
      },
      backgroundColor: '#1a1a1a',

      // --- ROTATION (Keep your natural tilt) ---
      rotateRatio: 1.0, 
      minRotation: -Math.PI / 6,
      maxRotation: Math.PI / 6,
      rotationSteps: 10,
      
      // --- ANIMATION SETTING (NEW) ---
      // This tells the script to wait 15ms between drawing batches.
      // 10ms = Fast build
      // 50ms = Slow, dramatic build
      wait: 45, 
      // -------------------------------

      shape: 'circle',
      
      // ... keep your hover and click settings ...
      hover: function(item, dimension, event) {
        if (item) {
          tooltip.innerText = item[0] + ": " + item[1] + " times";
          tooltip.style.left = event.pageX + 10 + "px";
          tooltip.style.top = event.pageY + 10 + "px";
          tooltip.classList.remove('hidden');
          canvas.style.cursor = 'pointer';
        } else {
          tooltip.classList.add('hidden');
          canvas.style.cursor = 'default';
        }
      },
      click: function(item) {
        if(item) {
          const word = item[0];
          const targetUrl = "{{ '/search.html' | relative_url }}?q=" + encodeURIComponent(word);
          window.location.href = targetUrl;
        }
      }
    });
  }

  // B. Fetch Data
  fetch("{{ site.baseurl }}/assets/js/corpus.json")
    .then(response => response.json())
    .then(data => {
      let allText = data.map(post => post.content).join(" ");
      let words = allText.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);

      let wordCounts = {};
      words.forEach(word => {
        if (word.length > 3 && !stopWords.has(word) && isNaN(word)) { 
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      });

      // Convert to array
      for (let word in wordCounts) {
        wordList.push([word, wordCounts[word]]);
      }
      
      // Sort and Slice
      wordList.sort((a, b) => b[1] - a[1]);
      wordList = wordList.slice(0, 30); // Increased limit for full screen

      // Draw for the first time
      drawCloud();
    })
    .catch(err => console.error("Error:", err));

  // C. Handle Resize (Redraw on window change)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawCloud, 200); // Debounce to prevent lag
  });

</script>