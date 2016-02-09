/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Array allFeeds is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loop through each feed in the allFeeds object and ensure
         * 1) it has a URL defined and that 2) the URL is not empty
         */
        it('All items have url', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        /* Loop through each feed in the allFeeds object and ensure
         * 1) it has a name defined and that 2) the name is not empty
         */
        it('All items have name', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    /* The menu test suite */
    describe('The Menu', function() {
        // We'll re-use these variables throughout this suite
        var hideClass,  // CSS class name that places menu off-screen by default
            menuButton, // Menu toggle button DOM element
            docBody;    // DOM body element

        beforeEach(function() {
            menuButton = document.getElementsByClassName("menu-icon-link")[0];
            docBody = document.getElementsByTagName('body')[0];
            hideClass = 'menu-hidden';
        });
        
        /* Ensure that the menu element is hidden by default */
        it('Menu hidden by default', function() {
            var cL = docBody.classList;
            expect(cL).toContain(hideClass);
        });

        /* Ensure that the menu element changes visibility upon click
         * Check that the menu displays when its toggle button is clicked,
         * and that the menu hides when its toggle button is clicked again.
         */
        it('Menu changes visibility on click', function() {
            /* The menu element is showed and hidden by applying the
             * CSS class 'menu-hidden' to the DOM body element
             */
            
            // Click the menu button. This should remove 'menu-hidden' class
            menuButton.click();
            var cL = docBody.classList; // Array of classes assigned to DOM body element
            expect(cL).not.toContain(hideClass);
            
            // Click menu button again. This should put back 'menu-hidden' class
            menuButton.click();
            cL = docBody.classList;
            expect(cL).toContain(hideClass);            
        });        
    });

    
    /* Initial Entries test suite */    
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(); // for asynchronicity
            });
        });
        
        /* Ensure that the '.feed' container element contains at
         * least one '.entry' element
         */
        it("Should exist at least 1 '.entry' element in '.feed' container", function(done) {
            // Get the 'feed' element in our DOM
            var feedCont = document.getElementsByClassName("feed")[0];
            // Get the 'entries' elements within feed DOM element
            var entries = feedCont.getElementsByClassName("entry");
            // Check length of entries array
            expect(entries.length).toBeGreaterThan(0);
            done();  // for asynchronicity
        });
    });
    

    /* New Feed Selection test suite */    
    describe('New Feed Selection', function() {
        // Get state of the 'feed' DOM element before loading content
        var prevFeedCont = document.getElementsByClassName("feed")[0].innerHTML;
        
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(); // for asynchronicity
            });
        });
        
        /* Ensure that when a new feed is loaded by loadFeed function,
         * the content actually changes.
         */
        it("Feed content changes", function(done) {
            // Get the 'feed' element in our DOM
            var feedCont = document.getElementsByClassName("feed")[0].innerHTML;
            expect(feedCont).not.toEqual(prevFeedCont);
            done();  // for asynchronicity
        });
    });
}());
