# Peridot

Peridot is a single page app inspired by Pinterest, where users can discover new ideas and inspiration through 
other users' shared images, as well as contribute their own collections.

[Visit the site](https://peri-dot.herokuapp.com/#/)

## Technologies
* Ruby on Rails
* React/Redux
* HTML/CSS/JS
* Amazon Web Services

## Features

* When viewing a pin, a suggested feed is generated below containing similar images
<p align="center">
  <img max-width="650" height="auto" src="./app/assets/images/gifs/peridot_feed_demo2.gif">
</p>

* View other users' pins and add them to your own collections.
<p align="center">
  <img max-width="650" height="auto" src="./app/assets/images/gifs/peridot_save_pin_demo.gif">
</p>


* Create and edit your own pins and boards to save images and ideas.
<p align="center">
  <img max-width="650" height="auto" src="./app/assets/images/gifs/peridot_create_pin_demo.gif">
</p>

* Masonry-inspired layout provides a responsive and inviting home feed
<p align="center">
  <img max-width="650" height="auto" src="./app/assets/images/gifs/peridot_responsive_demo2.gif">
</p>

## Challenges
* Home feed organization is paramount to the user experience. The masonry style layout proved challenging
    when implemented outside a library. Instead, I used CSS to display the pins as a grid with rows that
    change based on the size of the viewport. This provides responseiveness upon window resizing. 
    To organize the pin heights in a column, I used Javascript to calculate the position of the next 
    available row end based on the height, and placed the image in that position.

<p align="center">
  <img width="auto" height="auto" src="./app/assets/images/home_feed.png">
</p>

* Discovering new ideas is easier when you can view other images related to the ones you like.
    When viewing individual pins, frontend filters generate a suggested feed of similar pins.
    To implement this, I used selectors to populate the components with pins of the same category 
    and check user ownership to ensure unsaved pins are shown.

```
export const selectSuggestedPins = (pins, userId, pinId) => {
    //select based on category, ignore currently viewed pin
    let suggestedPins = [];
    Object.values(pins).forEach( pin => {
        if (pin.id === pinId) return;
        if ((pin.userId !== userId) && (pin.category === pins[pinId].category)) suggestedPins.push(pin);
    })
    return suggestedPins;
};
```

## Coming soon
* Masonry-style layout
* Lazy load images
* Search bar