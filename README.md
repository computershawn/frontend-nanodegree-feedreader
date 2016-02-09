## Feed Reader Testing
This project applies test-driven-development methods to an RSS reader web application. More specifically, we're using [Jasmine](http://jasmine.github.io/) to write test suites that check:

1. Variable definitions, non-zero arrays and string lengths
2. DOM UI default state and click responses
3. Content change after asynchronous load
4. Articles read by the user

#### To Run the Application Locally
Mac Localhost: Download the project from its [Github repo](https://github.com/computershawn/frontend-nanodegree-feedreader.git) to your 'Sites' folder. In your desktop browser, navigate to the web app: http://localhost/~{your short user name}/frontend-nanodegree-feedreader

Alternatively, after downloading the app, you could open index.html with Adobe's Brackets text editor (free!). Then, while in Brackets, click File > Live Preview to view the application in your default browser.

#### Viewing Status of Your Test Suite
The page will download some content asynchronously, so it may take a few seconds for content to load. Take a moment to view the list of articles, and then scroll to the bottom. You should see the Jasmine console, with a list of test specs. The suite for this application contains five test suites:
* RSS Feeds – Verifies that an array of feeds exists, and that each element has a name and URL
* The Menu – Makes sure that the menu is hidden upon first loading the page. It also checks for a change in the menu's visibility upon user click.
* Initial Entries – Makes sure there is at least one element with class name 'entry' in the 'feed' DOM container
* New Feed Selection – Verifies that the feed reader's DOM content changes whenever a different RSS feed is loaded
* Article Overload – This suite is for Leader Boards, a future feature of our feed reader. Users will be eligible for prizes, but more importantly, 1337 status, for consuming massive volumes of RSS data. This suite is labeled as 'pending', because the functionality it's checking against has not yet been written into the main app. 

The top bar of the Jasmine console shows the test suite's status: Total number of specs, number of failures and number of pending specs. The background color of the top bar will be red if any of the specs has failed. Beneath each of these suite descriptions is a list of individual tests that are run each time the application loads. If the spec has passed or is pending, just its title will be listed. If the spec has failed, the cause of the failure will be listed under the spec's title. This description should provide some insight into how to resolve the test failure.