# Peridot

Peridot is a single page app inspired by Pinterest, where users can discover new ideas and inspiration through 
other users' shared images, as well as contribute their own collections.

[Visit the site](https://peri-dot.herokuapp.com/#/)

<img align="center" width="650" height="auto" src="https://peridot-seed.s3-us-west-1.amazonaws.com/welcome3.png">

## Technologies
* Ruby on Rails
* React/Redux
* HTML/CSS/JS
* Amazon Web Services

## Features

###Discover feed suggestions
* When viewing a pin, a suggested feed is generated below containing similar images
<p align="center">
  <img max-width="650" height="auto" src="https://peridot-seed.s3-us-west-1.amazonaws.com/gifs/peridot_suggested_pins3.gif">
</p>

* Frontend filters generate the suggested feed. Selectors populate the components with pins of the same category 
    and check user ownership to ensure only unique and unsaved pins are displayed.

```javascript
export const selectSuggestedPins = (pins, userId, pinId) => {
    let suggestedPins = [];
    Object.values(pins).forEach( pin => {
        if (pin.id === pinId) return;
        if ((pin.userId !== userId) && (pin.category === pins[pinId].category)) suggestedPins.push(pin);
    })
    return suggestedPins;
};
```

### View other users' pins and boards or create your own
* View an assortment of other users' pins and add them to your own collections.
<p align="center">
  <img max-width="650" height="auto" src="https://peridot-seed.s3-us-west-1.amazonaws.com/gifs/peridot_save_pin.gif">
</p>

* Create and edit your own pins and boards to save and organize your ideas.
<p align="center">
  <img max-width="650" height="auto" src="https://peridot-seed.s3-us-west-1.amazonaws.com/gifs/peridot_create_pin3.gif">
</p>

### Masonry layout
* After fetching, pins are randomized with a shuffling algorithm and individually assigned to a column. 
    The number of columns is caluclated from the current width of the viewport and updated by an event listener on the window. 
    CSS flexbox and animations are used to display the image upon loading.

<p align="center">
  <img max-width="650" height="auto" src="https://peridot-seed.s3-us-west-1.amazonaws.com/gifs/ezgif.com-optimize.gif">
</p>

## Coming soon
* Lazy loading images
* Search bar