var excuses = [
  "I can't swim.",
  "I cancelled my credit card.",
  "I don't have any snowpants.",
  "I get migraines when I do that.",
  "I had a really bad dream about that once.",
  "I have to go to the DMV.",
  "I left it in my Uber.",
  "I need to take my dog to the vet.",
  "I need to wash my car.",
  "I need to wash my cat.",
  "I need to wash my hair.",
  "I sprained my ankle.",
  "I'm gluten free.",
  "I'm having an art installation.",
  "I'm hungry.",
  "I'm pregnant.",
  "I'm tired.",
  "I'm waiting for the repairman.",
  "I've got a deadline coming up at work.",
  "I've got a family thing.",
  "It makes me break out in hives.",
  "It's raining outside.",
  "My in-laws are in town.",
  "My internet is down.",
  "My spoon is too big.",
  
  // HT YoungRobin
  "Mercurcy is in retrograde, but I don't believe in astrology.",
  "I wish I could, but I don't want to.",
  "It has small parts and I'm allergic to choking hazards.",
  "Today's my turn to clip my grandfather's toenails.",
  "I didn't get out of bed this morning to do that sort of thing.",
  "My mother wouldn't approve.",
  "The color is offensive.",
  "Thousands of men and women have died protecting my freedom to not do that."
];

// From: https://github.com/lodash/lodash/blob/master/shuffle.js
function shuffle(array) {
  var length = array == null ? 0 : array.length;
  if (!length) { return []; }

  var index = -1;
  var lastIndex = length - 1;
  var result = array;
  while (++index < length) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    var value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result
}

var app = {
  init: function () {
    var evt = this.render.bind(this);
    document.addEventListener('click', evt, false);
    document.addEventListener('deviceready', evt, false);
    document.addEventListener('DOMContentLoaded', evt, false);
    this.reset();
  },

  reset: function () {
    excuses = shuffle(excuses);
    excuses.push(false);
  },

  pick: function () {
    var excuse = excuses.splice(0, 1)[0];
    if (!excuse) {
      this.reset();
      excuse = excuses.splice(0, 1)[0];
    }
    excuses.push(excuse);
    return excuse;
  },

  render: function () {
    document.getElementById('app').innerText = this.pick();
  }
};

app.init();
