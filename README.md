<h1>About This Project</h1>

Entropy was a React Native application with the goal of making it easy for lively public events and parties to be found.
It was abandoned due to lack of faith in the concept. Here's what was done so far:

* Beautiful, responsive UI
  * Used gradients with a dark-blue, purplish theme for a "nighttime" aesthetic.
* Fully functional account creation (signup) and login.
  * User account data + credentials stored in Firebase.
  * State management for visually informing the user what went wrong when signing in: wrong credentials, email not found in system, etc.
* MapBox GL implementation
  * Customized to be visually consistent with application's aesthetic (same font, color scheme)
  * Added points on map to visually simulate where users are to calculate where there is more "entropy" on the map (higher likelihood of an event happening)
* Navigation components
  * Used React navigation to go from user profile page, map screen, and settings.
  * Implemented a simple but functional navigation bar on bottom of the screen for switching between these screens (similar to Instagram)
  * Context implemented for the user information

<h2>See the video, EntropyV1.mp4, to see some of the work that was done (up to a certain point)</h2>
