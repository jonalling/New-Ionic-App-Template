# Building your app
#### Ionic CLI

Navigate to your Ionic installation directory

```sh
$ cd ionic
```

Run starter app loader. I use the TABS starter because it is organized the nicest and had the most example code to learn from. I usually end up removing a lot though, but until there are better starter apps I think it's the best option.

```sh
$ ionic start [yourAppName] tabs
```

Navigate to your app directory

```sh
$ cd yourAppName
```

Add platform code from Ionic

```sh
$ ionic platform add ios
**and/or**
$ ionic platform add android
```

If you are using a cordova plugin, install ngCordova

```sh
$ bower install ngCordova
```

And then add any plugins (http://ngcordova.com/docs/plugins/)

```sh
$ cordova plugin add cordova-plugin-device-motion
**also always good to add**
$ cordova plugin add org.apache.cordova.statusbar
```

If you have other dependencies you want to add (i.e. d3.js), do that next. 

```sh
$ bower install d3 --save
```

This is the point I usually build the project and test it by running in xCode.

```sh
$ ionic build ios
```
# Prepare Code
#### Index.html

For cordova plugins add reference to ng-cordova.js, above default cordova.js line

```sh
<script src="js/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Add reference to dependencies

```sh
<!-- charts -->
<script src="lib/d3/d3.js"></script>
```

#### /www/js/

- add a recent copy of ng-cordova.js (http://ngcordova.com/docs/install/)
- replace or clean out app.js, controllers.js, services.js
    - this is where things get messy when removing and reformating a lot of code to rename or eliminate tabs and inject dependencies in app.js and controllers.js

#### /www/templates/

- rename and replace or clean out template htmls
