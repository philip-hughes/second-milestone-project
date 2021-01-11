# Second milestone project — "Silver Screen movie rating website"

This project website is a movie search and rate website named Silver Screen.  The primary purpose of the site is to show users a list of movies that are
currently playing in theaters, or movies that are coming soon. In addition to this, the user can click on a movie, which will redirect them to the
movie-details screen, where they are presented with additional movie info, and an option to submit a rating for the movie. Users can also search for any
movie using the search box in the nav bar. Any movies matching the search term will be displayed on the search-results screen with the name, year of release,
movie rating, and the movie poster.
The site comprises 3 web pages and can be viewed in desktop, tablet and mobile devices.

The project is running at - https://philip-hughes.github.io/second-milestone-project/


## UX

The purpose of this site is to provide users with a way to check what movies are currently showing in theaters, to view basic movie details, and to submit
a rating for the movie if they wish.

At the beginning of the project I listed the features that were a must for the site, and features that were nice to have. The core features i wanted were
 1. A list of 'In Theaters' movies.
 2. A movie search option
 3. A 'submit a rating' option.
The availability of POST rating option was the main factor in my decision to use The Movie Database API, as it was the only API i could find that had this service available.

I had also considered displaying movie reviews on the movie-details screen but decided against it for the following reasons:
 1. The GET Reviews service in the API I chose is a bit flakey, and many of the movies dont have reviews, or very few.
 2. In my experience I generally don't read user reviews when deciding on a movie i want to see.  My decision is usually based on the director, cast, running time and how highly the movie is rated.

After selecting the API I wrote some basic proof of concept code to verify the API was giving me what i wanted, and that there were no major issues with it. I then
went about designing the basic layout of the site, and writing the wire frames. The use of a carousel on the home page was a suggestion from my project mentor during our
first project meeting. I'd considered a carousel on the search-results screen also, but decided against it for the following reasons:
 1. If there are many results returned its easier to find what you're looking for in a list as opposed to a carousel.
 2. I wanted there to be a clear distinction in layout on each screen, partly for variety, and also so that a user knows exactly where they are on the site.
Note that the search-results page in the wire frames shows a scroll able list of movies.  I changed this to a grid of cards after a suggestion from my project mentor during our second meeting.

Note also that there is a minor issue with the movies returned by the GET Upcoming API call.  Many of the movies in this response have release dates that are in the past, which of course isn't what
you'd expect for a Coming Soon movie.  I had considered filtering these movies out of the carousel, but I discussed it my mentor, and we agreed that i should leave it as is, as in some cases the filtered
list could result very small list, or possibly no 'Coming Soon movies' at all.

Wire frames can be found in root directory of the project repository.


## Features

### Existing Features — All screens
- **Home icon** - This is a font awesome icon displayed on the left of the header that links to the homepage when clicked
- **Search bar** - An input box with placeholder text prompting users to Search Movies
- **The Footer** - the footer section contains Follow Us text and social media links.

### Existing Features — Home screen
- **In Theaters carousel** - A Slick js carousel that displays movie posters and ratings returned from the Get Now Playing API call.
- **Coming Soon carousel** - A Slick js carousel that displays movie posters from the Get Upcoming API call.

### Existing Features — Search results screen
- **Search results** - A grid of cards displaying the movie poster, movie rating, title and release year that are returned from the Get Search Movies API call.

### Existing Features — Movie details screen
- **Movie info and poster** - Movie info and poster retrieved from the Get Details and Get Credits API calls.
- **Submit rating** - A component that allows users to submit a rating for the movie by selecting a number of stars and clicking the Submit button. The user must
 choose at least 1 star. The confirmation message will either confirm the rating submission or inform the user that they have already
 rated that particular movie.  The rating is submitted using the POST Rate Movie API call which takes the guest session id and rating value
 as parameters.


## Technologies Used

— [Bootstrap](https://getbootstrap.com/)
 — Bootstrap was used for the site layout.

— [Slick](https://kenwheeler.github.io/slick/)
 — The Slick library was used to implement the homepage carousel functionality.

— [JQuery](https://jquery.com)
 — Jquery is used throughout the project for writing elements to the DOM.

— [Font Awesome](https://fontawesome.com/)
 — Font Awesome icons were used for the homepage icon, the contact icons, and the stars used for the display and submission of ratings.

— [The Movie DB API](https://www.themoviedb.org/documentation/api)
 — All movie info and images displayed on the site are retrieved from this DB API.


## Testing

The following tests were manually executed and passed in Chrome, Microsoft Edge, Firefox and on a Samsung mobile device.  The chrome dev tools device emulator
was used for responsive breakpoint testing.

**Header section and search**
1. Open the Home page in desktop view and verify that the Home icon is displayed at the top left of the screen.
2. Verify that the search bar is aligned on the right of the header and placeholder text is displayed.
3. Leave the search box empty and click the search button. Check that dev tools network tab and verify that no API call is made and the home screen is still displayed.
4. Enter some text in the search box e.g. Jaws, and click the search spyglass button. Verify that you are directed to the search results screen and a list
 of movies is displayed.
5. Enter a different search term in the search box e.g. Star wars, and submit. Verify that results for Star Wars are now displayed.
6. Click the Home icon and verify you are returned to the home page.
5. Use the Chrome dev tools device emulator responsive option to reduce the screen width down to 320px. Verify that home title and icon, and search bar are visible
 and displayed without issue in all screen sizes >= 320px.

**Home page carousels**
1. Open the Home page in desktop view with a screen resolution of approximately 1680 x 948
2. Verify that there are two carousels displayed, with 5 slides in each.
3. Verify that the slide images are not overlapping each other.
4. Verify that the star rating or the 'Not Rated Yet' text are displayed below each slide.
5. Click the next and previous arrows in each carousel and verify that carousel items are changing without issue.
6. Verify that the carousels items are sliding in an infinite loop. i.e. Take note of the first slide in the carousel and click the next arrow
 repeatedly until the first item is displayed again. Repeat this test using the previous arrow.
7. Verify that a default image is displayed for carousel items that dont have a poster.  Most of the 'In Theatre' items will have a poster, so check this
  by sliding through the 'Coming Soon' items.  There are usually one or two Coming Soon movies that dont have posters yet.
8. Use the Chrome dev tools device emulator responsive option to gradually reduce the screen width down to 320px.  Verify that
 the number of slides displayed are reduced at the following breakpoints — 1540:4 slides, 1180:3 slides, 875:2 slides, 620:1 slide.
9. Check that carousel is functioning correctly (click the arrows) at each of the following breakpoints 1540:4 slides, 1180:3 slides, 875:2 slides, 620:1 slide.
10. At each breakpoint verify that slide images are not overlapping each other and that the star rating or the 'Not Rated Yet' text are displayed below each slide

**Search results screen**
1. Open the site home page in desktop view and enters a search term in the search box that will return a large number of results. e.g. search for 'shark'
2. Verify that the search results screen is displayed and that a grid of card items is displayed with 4 columns.
3. Verify that the movie title, year of release and star rating are displayed below each movie image.
4. Hover a movie image and title and verify that the pointer cursor is displayed. (note that cursor pointer isn't displayed if you're using the chrome dev tools
emulator).
5. Hover a movie year and star rating and verify that the pointer cursor is not displayed.
6. Click on the star rating or year and verify that they are not clickable. i.e. you remain on the search results screen.
7. Verify that any movies with longs names display an ellipsis. e.g. Mega Shark v Brontosaurus should have an ellipsis.
8. Verify that any movies without a poster display a default image.  You can test this by search for 'bat'.  Several of the results for this search will
 display a default image.
9. Enter a search term that will return no results. Any random text will do.  Verify that a message is displayed stating that no results were found and to
 refine your search.
10. Enter a valid search term again that will return a large number of results and verify that the grid of cards is displayed again.
11. Gradually reduce the screen with from 1680 down to 320 and verify that the number of columns is reduced at the following breakpoints: 1199: 3 columns,
 991: 2 columns, 767: 1 column.
12. Increase the screen width and verify that number of columns increases again at the same breakpoints.

**Movie details screen**
1. Open the site home page in desktop view and click on any movie from either carousel. Verify that movie details screen is displayed with a poster a info
 of the selected movie.
2. Search for a different movie and when the search results screen is displayed, select the movie.
3. Verify that the movie details screen is opened again, and movie details displayed are for the newly selected movie.
4. Check the details for the movie and verify that a title, overview, cast, release date, running time and current rating are displayed. If the movie has not
 been rated, then the 'Not rated yet text' should be displayed.
5. Click on one of the stars in the 'Submit a rating section' and click the Submit button. Verify that a message is displayed stating that 'Your rating has been
 submitted'.
6. Refresh the screen and submit another rating.  Verify that a message is displayed stating that 'You have already rated this movie'.
7. Click browser back button to return to the search results screen and select a different movie that you haven't already rated.
8. Submit a rating for the newly selected movie and verify that the 'Your rating has been submitted' message is displayed again.
9. Gradually reduce the screen width from 1680 down to 320 and verify that the movie details column remains vertically centered, and that there is no
 overlapping of elements or text.

**Footer section**
1. Scroll down to the footer section and click on each of the social media links. Verify that correct site is open in a new browser tab.
2. Gradually reduce the screen width from 1680 down to 320 and verify that the Follow Us text and icons remain centered and no overlapping occurs.

## Deployment

This website was deployed to github pages with the following steps.  The version deployed on github pages is the final version.
1. Go to the repository root directory at https://philip-hughes.github.io/second-milestone-project/
2. Click on Settings and scroll down to the GitHub Pages section.
3. Open the Source drop down menu and select 'master branch'. The Settings page will reload.
4. Scroll back down to the GitHub Pages section and you should see a blue message stating that "Your site is ready to be published", followed by a link to the site.
5. Wait a couple of minutes until the message turns green and the site is published.
6. Click on the link and then append index.html to the URL to view the site. e.g. https://philip-hughes.github.io/second-milestone-project/index.html

If you want to run the site locally you need to download the site files from Github and host it on a HTTP server.
1. To download the site files, go to https://philip-hughes.github.io/second-milestone-project/, then click the Clone or Download button and select Download Zip.
2. Extract the downloaded zip and run the index.html file from your HTTP server. If you dont already have a HTTP server installed I recommend you use the Python server which
is very easy and quick to install.  There are clear steps to install the Python server available here — https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server

## Credits

### Content
— All movie info displayed is retrieved from the The Movie Database API.

### Media
— All images are supplied The Movie Database API, with the exception of the default image that's used in the carousels and search results.

### Acknowledgments

— The box shadow CSS used for the search-results cards was taken from an example on the w3schools site. I liked
 the way it looked, and didn't see any reason to change it, so I left it as is.  All other code in this project is my own work.
  https://www.w3schools.com/howto/howto_css_cards.asp
