# bjj-notes-app
A web-app for logging BJJ techniques, with notes and a video. Built using react.

This app is currently only optimized for desktop, but also works on mobile using touch events.

In this app you have the ability to create technique components, giving them a name, video link, and any number of notes you wish.

You then have the ability to drag and drop these components into the category components, transfering their props into newly generated 'categorized technique' components.

All categories, techniques, categorized techniques and notes are deletable. Notes and video links are editable.

This was great practice in lifting component states up to the main app component, and passing them back as props.

All the states are saved to local storage on refresh using the 'useEffect' hook.

Follow the link below to to give it a try!

https://petemc121.github.io/bjj-notes-app/
