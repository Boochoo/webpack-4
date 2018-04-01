import style from './main.css';

/* 
* @param { Element } elem starting Element
* @param { String } selector Selector to match against
* @return { Boolean | Element } return null if no match is found
*/

const getClosest = function(elem, selector) {
  // Get closest match
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }

  return null;
};

/* example */
let elem = document.getElementById('app');
let closestDiv = getClosest(elem, '#input-wrapper');

/**
 * Get all of an element's parent elements up the DOM tree
 * @param  { Node } elem The element
 * @param  { String } selector Selector to match against [optional]
 * @return { Array } The parent elements
 */

const getParents = (elem, selector) => {
  // Setup parents array
  var parents = [];

  // Get matching parent elements
  for (; elem && elem !== document; elem = elem.parentNode) {
    // Add matching parents to array
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
    } else {
      parents.push(elem);
    }
  }

  return parents;
};

/* example */
let allParents = getParents(elem.parentNode);
let closestParent = getParents(elem.parentNode, '#input-wrapper');

/**
 * Get all siblings of an element
 * @param { Node } elem The element
 * @return { Array } The siblings
 */

const getSiblings = elem => {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType === 1 && sibling !== elem) siblings.push(sibling);
  }

  return siblings;
};

/* example */
let appSiblings = getSiblings(elem);
