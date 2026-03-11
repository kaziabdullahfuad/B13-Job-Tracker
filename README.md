## Answers to Questions
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
- getElementById- it is one of the fastest way to grab an element. Id is unique in a page so it will always return a single element or null if it doesnt exist and will return a single object.
- getElementsByClassName - It will search for all elements with the same class name since class names can be multiple in a single page. Returns an html collection
- querySelector- It will return the first element that matches the criteria. Returns a static NodeList which is different from HTMLCollection. Unlike HtmlCollection, nodelist supports .forEach().
- querySelectorAll - Returns all matching elements in a nodelilst. Also return type is nodelist.

Overall getElementById is pretty much the fastest and it returns a single element but has low flexibility. Where as querySelectors have higher flexibility.

2. How do you create and insert a new element into the DOM?
Ans: We use  **document.createElement()** to generate a new node in memory. For ex- const newDiv = document.createElement('div');. And then for adding as a chile we use appendChild() which adds the element as the last child of a parent.
A practical example would be:
Find the parent
const list=document.querySelector('#my-list');
Create and set up the new element
const newItem = document.createElement('li');
newItem.textContent = 'Apples';

Snap it into place at the end of the list
list.appendChild(newItem);

3. What is Event Bubbling? And how does it work?
Ans: It is an event whehre if lets say we clicked on a child element then the same event would be triggered on the parent elements as well since it moves updward. It starts from the target element to the document root.

It has 3 phases
1. Capturing Phase- The event goes down from the root to the target element.
2. Target Phase: The event reaches the element  clicked.
3. Bubbling Phase: The event travels back up from the target to the root. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: It utilizes the behavior of event bubbling to our advanges where instead of adding an event listener to every child element we just add one to the parent since events bubble from children to parent the parent will be able to catch the event and figure which child was clicked.
It is useful for multiple reasons such as
- memory efficiency
- cleaner code
- handling dynamic elements
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: Both are used to interrupt the normal flow of an event.
- preventDefault()- stops the browser's built-in action,
- stopPropagation() - stops the event from propagating (bubbling up or capturing down) the DOM tree to other elements. 
