# Alex Zhang's Website
> <zyf1014@hotmail.com> :scorpius: [@AlexandyZ](https://github.com/AlexandyZ)

## Overview

- Template is created by [HTML5 UP](https://html5up.net/) <img src="https://html5up.net/assets/icons/favicon.ico" width=18px alt="HTML5 UP"/>
- Background image is powered by [Bing Homepage Gallery](http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1) <img src="http://www.bing.com/sa/simg/bing_p_rr_teal_min.ico" width=18px alt="Bing Homepage Gallery"/>
- Gallery function is powered by [Poptrox](https://github.com/ajlkn/jquery.poptrox) <img src="https://avatars3.githubusercontent.com/u/2937342?v=3&s=400" width=18px alt="Poptrox"/>
- Contact form is powered by [Formspree](https://formspree.io/) <img src="https://formspree.io/static/img/logo.png" width=18px alt="Formspree.io"/>
- Icons are powered by [Font Awesome](https://fortawesome.github.io/Font-Awesome/cheatsheet) <img src="http://fontawesome.io/assets/ico/favicon.ico" width=18px alt="FontAwesome"/>

### Big Picture
Being a single pager, Big Picture should be way simpler to work with than some of the heavier stuff. Aside from a main page `<header>` and `<footer>`, it's pretty much just a stack of "main" `<section>` elements that follow the same basic pattern:
```
<section id="foobar" class="main">
    <div class="content container">
        <header>
            <h2>Foobar</h2>
        </header>
        ...
    </div>
</section>
```
The section can then be assigned a style class to determine its basic
look (and, in some cases, its behavior):

- style1

    Centered content with an oversized `<h2>`. Works best when
paired with a background image or color.

- style2 left
    
    Content in a box, anchored to the left side of the window. Works
best when paired with a background image or color. If you have
"useSectionTransitions" turned on in your settings, the box will
slide into view from the left.

- style2 right

    Content in a box, anchored to the right side of the window. Works
best when paired with a background image or color. If you have
"useSectionTransitions" turned on in your settings, the box will
slide into view from the right.

- style3 primary

    Used for generic content. Set against the primary background color (default is white).

- style3 secondary

    Used for generic content. Set against the secondary background color (default is a light gray).


- dark

    Flips the content's color scheme so it shows up better against darker background images and colors.

- fullscreen
    Makes the section fill the entire window (only if "useFullScreen" is enabled in your settings).


### Lightbox Gallery:

- Rows:

    The structure of the gallery is a skel grid. Each row looks like this:
    ```
    <div class="row flush images">
        <div class="6u">...<div>
        <div class="6u">...<div>
    </div>
    ```
    The `"Xu"` class indicates the width of the cell (in this case, both are 6).
    You can use any number of cells and any combination of widths provided their combined widths add up to exactly 12. So, if you needed, say, three images in a row, you can do something like this:

    ```
    <div class="row flush images">
        <div class="4u">...<div>
        <div class="4u">...<div>
        <div class="4u">...<div>
    </div>
    ```

    You can also use a `"-Xu"` class to "nudge" a cell over by that much, which comes in handy if you need to place just one image on a row and you want to center it:
    ```
    <div class="row flush images">
        <div class="6u -3u">...<div>
    </div>
    ```
    Which translates to "make this 6 wide and nudge it over to the right by another 3".

- Images:

    Each image (the '...' bit in the above examples) should look like this:
    ```
    <a href="path/to/fullsize.jpg" class="image fit from-(direction)">
        <img src="path/to/thumbnail.jpg" title="This is the image caption." alt="" /></a>
    </div>
    ```
    The `"from-(direction)"` class indicates the direction from which the image should slide into view, and can be any of the following:
    ```
    from-left
    from-right
    from-bottom
    from-left
    ```
    You can also just remove the `"from-(direction)"` class if you don't want that particular image to slide into view (in which case it'll simply fade in).

### Other Stuff:

- Either change "images/overlay.png" to something else, or remove all references to it from css/style.css could erase tinted images
- jQuery (jquery.com)
- html5shiv.js (@afarkas @jdalton @jon_neal @rem)
- CSS3 PIE (css3pie.com)
- background-size polyfill (github.com/louisremi)
- Respond.js (j.mp/respondjs)
- jquery.poptrox (@ajlkn)
- jquery.scrolly (@ajlkn)
- jquery.scrollgress (@ajlkn)
- Skel (skel.io)
- CORS Anywhere (@Rob--W)