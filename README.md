# React Native Template

A strong foundation for react-native applications is the goal of this project. It provides a clear and organized structure, core dependencies, and boilerplate to get the development process started.

[![Dependencies check with forcefully](https://github.com/pushpender-singh-ap/react-native-template/actions/workflows/dependencies.yml/badge.svg)](https://github.com/pushpender-singh-ap/react-native-template/actions/workflows/dependencies.yml)

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods 1.11.2](https://cocoapods.org)
- [JDK > 12](https://www.oracle.com/in/java/technologies/javase/jdk12-archive-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

#### Use Template button

To use this template, click the "Use this template" button above the file list, then click the Owner drop-down menu to select the account that will own the repository. A repository created from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). The project should give you no problems at all, just run the script, reinstall your node modules and you should be set.

This library might cause problems when renaming a project on iOS that uses `Pods`.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 13.2 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: More information about execution scripts can be found in the Setup environments section further down in this file.

### Option 2: Copy the structure to your project

Alternatively, you can create your own project and then copy the `/src` folder (which contains all the code for your app) and update your `index.js`.

It is important to remember that if you do this, you will have to **install and link** all dependencies (and add the native code for each library that it depends on).

## Folder structure

This template follows a very simple project structure:

- `src`: It is the main place where you store all the code for your application.
  - `assets`: Asset folder to store all fonts, images, vectors, etc.
    - `Fonts`: Store all your fonts here.
    - `Image`: Store all images, vectors, etc.
    - `ImagePath.js`: This file contains the paths to all images.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `localization`: Folder to store the languages files.
  - `routes`: Folder to store the navigators.
  - `redux`: Folder that contains all your application redux.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `controllers`: The api collection and network request handlers are contained in this folder.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `rootReducer.js`
    - `selectors`: Folder to store your selectors for each reducer.
    - `store`: Folder to put all redux middlewares and the store.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles.
      - `Screen.js`
      - `Screen.styles.js`
  - `storage`: Folder that contains the application storage logic.
  - `theme`: Folder to store all the styling concerns related to the application theme.
    - `Fonts.js`: This file contains the paths to all Fonts.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble`

Note: You have two options to execute the project
`assemble:` Generates an apk that you can share with others.
`bundleRelease:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select 'Any iOS device' as target
3. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

# How to use it

The purpose of this section is to explain how to use template composition when using well-formed architecture, especially when using redux flow.

An easy and convenient export pattern is followed by the template. The folder index exposes the resources, making it possible to import them all from the same path.

So let's take a closer look at each folder to see how it can be used.

## Components

Components are the building blocks of a react native application, but since we strive to minimize development complexity, all components are nesting at the same level.

You also need to use propTypes to make sure your components are getting the right kind of data. You must define the type of props the component receives, and if necessary, also the default value of the property if it receives data from others.

### Static resources:

The global static resources that are used by an application must be placed in a specific file to keep the application scalable and organized.

### We manage three main folders for that:

- Assets: Using this area, you can store all images and icons you need to work with the app.

- Localization: You can create a multilingual application by using the locale objects in this folder. You need to create a separate file for each locale, define an object for each locale, then nest the objects by the screen that contains the text that you need and the text you want to display. Make sure you add a reference to LocalizedStrings in the Localization.js file as the final step.

- Theme: You can define all the different screen styles here. For example, you could create here dark and light color palettes to simplify the interaction between the application and a device.

## Redux

After the components have been defined, they are linked with the application in order to manage information. Redux implements the store-reducer-action model in the usual way, but not only does it handle data, but also success and error responses follow the same form.

### Redux folders

4 folders divide the redux work

- Store: Here you define the store shape and you can configure the persistReducer and middlewares.
- Actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- Reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.
- Selectors: Create one file for each action classification. Here you define what part of the store you need to see in your interface.

## Screens

In this folder, you will find the main components of your composition architecture. Make a folder for each screen in your application, call every component and static resource you need for rendering the scene, then work with the corresponding hooks to interact with redux and create behaviors for each store.