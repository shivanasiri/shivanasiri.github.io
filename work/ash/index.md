---
layout: default
title: Ash
---

<div class="gallery">

  <img id="main-image" class="main-image"
       src="{{ '/assets/images/ash-1.jpg' | relative_url }}"
       alt="Ash">
<!-- Image navigation arrows -->
<div class="image-nav">
    <button class="nav-arrow left-arrow" onclick="prevImage()">&#10094;</button>
    <button class="nav-arrow right-arrow" onclick="nextImage()">&#10095;</button>
</div>

  <div class="thumbnails">
    <img src="{{ '/assets/images/ash-1.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/ash-2.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/ash-3.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/ash-4.jpg' | relative_url }}" onclick="changeImage(this)">
  </div>

</div>

<p>
  <em>Ash</em> This sculpture portrays the human form as a convergence of multiple selves. Emerging torsos and faces merge into a single body, revealing the layered and often conflicting aspects of identity. Cast in fiberglass and iron, the work embodies both fragility and endurance—an external shell containing internal multiplicity. Ash reflects on the complexity of being, where belief, doubt, virtue, and instinct coexist within one vessel. The figure stands as a quiet monument to the contradictions that define human existence.
</p>

<p><a href="{{ '/work/' | relative_url }}">← Back to all works</a></p>
