## Answers to Questions
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
- getElementById- it is one of the fastest way to grab an element. Id is unique in a page so it will always return a single element or null if it doesnt exist and will return a single object.
- getElementsByClassName - It will search for all elements with the same class name since class names can be multiple in a single page. Returns an html collection
- querySelector- It will return the first element that matches the criteria. Returns a static NodeList which is different from HTMLCollection. Unlike HtmlCollection, nodelist supports .forEach().
- querySelectorAll - Returns all matching elements in a nodelilst. Also return type is nodelist.

Overall getElementById is pretty much the fastest and it returns a single element but has low flexibility. Where as querySelectors have higher flexibility.

2. How do you create and insert a new element into the DOM?

3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?
