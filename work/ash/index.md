---
layout: default
title: Ash
---

<div class="gallery">

<div class="main-image-wrapper">
  <button class="gallery-nav prev" onclick="prevImage()">&#10094;</button>

  <img id="main-image" class="main-image"
       src="{{ '/assets/images/ash-1.jpg' | relative_url }}"
       alt="Ash">

  <button class="gallery-nav next" onclick="nextImage()">&#10095;</button>
</div>


  <div class="thumbnails">
    <img src="{{ '/assets/images/ash-1.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/ash-2.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/ash-3.jpg' | relative_url }}" onclick="changeImage(this)">
  </div>

</div>

<p>
  <em>Ash</em> This sculpture portrays the human form as a convergence of multiple selves. Emerging torsos and faces merge into a single body, revealing the layered and often conflicting aspects of identity. Cast in fiberglass and iron, the work embodies both fragility and endurance—an external shell containing internal multiplicity. Ash reflects on the complexity of being, where belief, doubt, virtue, and instinct coexist within one vessel. The figure stands as a quiet monument to the contradictions that define human existence.
</p>

<p><a href="{{ '/work/' | relative_url }}">← Back to all works</a></p>
<script>
let images = [
  "{{ '/assets/images/ash-1.jpg' | relative_url }}",
  "{{ '/assets/images/ash-2.jpg' | relative_url }}",
  "{{ '/assets/images/ash-3.jpg' | relative_url }}",
];

let currentIndex = 0;
let mainImage = document.getElementById('main-image');

function changeImage(img) {
  mainImage.src = img.src;
  currentIndex = images.indexOf(img.src.replace(window.location.origin, ""));
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  mainImage.src = images[currentIndex];
}
</script>
