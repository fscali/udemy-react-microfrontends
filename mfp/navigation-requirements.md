## Routing requirements

### Both the container + Individual SubApps need routing features

- Users can navigate around to different subapps using routing logic built into the Container
- Users can navigate around in a subapp using routing logic build into the subapp itself
- Not all subapps will require routing

### Sub-apps might need to add in new pages/routes all the time

New routes added to a subapp shouldn't require a redeploy of the container

### We might need to show two or more microfrontends at the same time

This will occur all the time if we have some kind of sidebar nav that is build as a separate microfrontend

### We want to use off-the-shelf routing solution

- Building a routing library can be hard - we don't want to author a new one"
- Some amount of custom coding is OK

### We need navigation features for sub-apps in not hosted mode and isolation

- Developing for each environment should be easy - a developer should immediately be able to see what path they are visiting

### If different apps need to communicate information about routing, it should be done in as generic a fashion as possible

- Each app might be using a completely different navigation framework
- We might swap out or upgrade navigation libraries all the time - should'n require a rewrite of the rest of the app

## Notes

The most common pattern in microfrontends is to use browser history in the container and memory history in the hosted apps.
This is done because otherwise there would conflicts in handling the address bar url
between container and the microfrontends.
