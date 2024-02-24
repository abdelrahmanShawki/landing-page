/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navUL = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const addElements = () => {
    for(let i = 0 ; i < 4; i++) { 
        const newElement = document.createElement('a');
        const newLi = document.createElement('li');
        newElement.innerText = `section  ${i + 1}`;
        newElement.setAttribute('href' , `section${i+1}`);
        newLi.appendChild(newElement);
        fragment.appendChild(newLi);
    }
    navUL.appendChild(fragment);
}

addElements();

// Add class 'active' to section when near top of viewport

const removeActive = () => { 
    const links = document.querySelector('a.active');
    if (links === null) {
        return; // If no element found, exit the function early
    }
    links.classList.remove('active');

}



navUL.addEventListener('click' , (event) => {
    event.preventDefault();
    if(event.target.tagName === 'A') { 
        removeActive();
        event.target.classList.add('active');

        // making scrolling 
        scroll(event);

    }
});


// Scroll to anchor ID using scrollTO event
const scroll = (event) => {
       const targetHref = event.target.getAttribute('href');
        const targetSection = document.querySelector('#'+targetHref);
        
        if(targetSection) { 
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


