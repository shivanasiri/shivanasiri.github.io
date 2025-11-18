---
layout: default
title: Mass
---

<h1>Mass</h1>
<p>2018 · Iron and resin · 120 cm</p>

<div class="gallery">

  <div class="main-image-wrapper">
    <button class="gallery-nav prev" onclick="prevImage()">&#10094;</button>

    <img id="main-image" class="main-image"
         src="{{ '/assets/images/mass-1.jpg' | relative_url }}"
         alt="Mass">
    <button class="gallery-nav next" onclick="nextImage()">&#10095;</button>
  </div>

  <div class="thumbnails">
    <img src="{{ '/assets/images/mass-1.jpg' | relative_url }}" onclick="changeImage(this)">
    <img src="{{ '/assets/images/mass-2.jpg' | relative_url }}" onclick="changeImage(this)">
    <!-- add/remove depending on how many mass images you uploaded -->
  </div>
  
  </div>


<p>
  <em>Mass</em> This sculpture contemplates the weight of belief, its physical and spiritual gravity. Formed from iron cutouts of a cathedral resting on human feet, the work fuses architecture and body, faith and structure. Created in Iran, the choice of a church rather than a mosque underscores the universality of organized religion and its capacity to both elevate and confine. The title Mass refers simultaneously to the religious ritual and to the notion of mass as weight, suggesting that faith, while transcendent, is also something borne and carried.
</p>

<p><a href="{{ '/work/' | relative_url }}">← Back to all works</a></p>
