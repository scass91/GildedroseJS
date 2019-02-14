# Gilded rose tech test

[![Maintainability](https://api.codeclimate.com/v1/badges/77dd545ea1faaa59ad7a/maintainability)](https://codeclimate.com/github/scass91/GildedroseJS/maintainability)

## Getting started

1. Clone this repo `git clone git@github.com:scass91/GildedroseJS.git`
2. Change directory `cd GildedroseJS`
3. Run npm to install dependencies `npm install`

### Testing

1. Run tests with Jasmine `open -a "Google Chrome" SpecRunner.html`

### Usage
1. In the same SpecRunner browser window, open up the console e.g. in Chrome:  
  `ctrl + shift + J` (windows) or
 `cmd + option + J` (mac)
2. Create a new item `a = new Item(itemName, sellIn, quality)`
3. Create a new shop with the item added to it `s = new Shop([a])`
4. Update the state of the items in the store with `s.change()`

# Approach

Faced with a mess of nested if statements I first tried to understand the code better by playing around with the legacy code in console, I then diagrammed out what the code currently does, and how I would want to refactor it better.
![Imgur](https://i.imgur.com/C62xtVK.png)
![Imgur](https://i.imgur.com/dfAID7s.png)

I was curious to see how an independent website would measure the maintainability of the Gilded Rose before any refactoring, I wasn't particularly surprised to see the below from [Code Climate](https://codeclimate.com)
![Imgur](https://i.imgur.com/IRr4Xfd.png)

* Once I got my head around what the code was specifically trying to achieve, I got to work writing feature tests for the already implemented functionality - my logic here was that at some point down the line I would need to check the code could still function as intended and if these tests broke then I would know I'd done something wrong
* Noting that different items in a shop behaved differently, I began writing feature tests in groups relating to each of these items, with a focus on 3 things; names, sell by dates & quality
* The specs were separated as follows:
```
Non-Special items
Aged Brie
Sulfuras
Backstage Passes
```
* After I wrote out these feature tests, I looked to separate the gilded_rose.js file, keeping in mind the requirements which said I could only really touch the updateQuality method
* I decided to write a different unit test file for each of the style of item
* I then added unit tests for a new item which was mentioned in the requirements - Conjured items. I didn't add this into the feature tests yet as it hadn't been implemented in gilded_rose.js
* In efforts to keep my code DRY, I added quality.js, which is used to update the state of an item when necessary
* Finally replaced all the nested if statements in the legacy code with injected classes for the items listed, I didn't yet add the Conjured items in as it hadn't been feature tested
* I wrote failing feature tests for the Conjured items
* I added Conjured items to the gilded_rose.js change method, all tests pass and requirements are completed


--------


This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

## The brief:

Choose [legacy code](https://github.com/emilybache/GildedRose-Refactoring-Kata) (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

HINT: Test first FTW!
