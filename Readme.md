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
$ cordova plugin add cordova-plugin-ble-central
$ cordova plugin add cordova-plugin-screen-orientation
**also always good to add**
$ cordova plugin add cordova-plugin-statusbar
```

If you have other dependencies you want to add (i.e. d3.js), do that next. 

```sh
$ bower install d3 --save
```

This is the point I usually build the project and test it by running in xCode.

```sh
$ ionic build ios
```
# Prepare Index.html

For cordova plugins add reference to ng-cordova.js, above default cordova.js line

```sh
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Add reference to other dependencies below default cordova.js line if applicable

```sh
<!-- charts -->
<script src="lib/d3/d3.js"></script>
```

----
----
#### Stop here if you just want the Ionic default tabs template
----
----


# Copy code from one of these repositories
#### /onePage_blank/www/

Clean single page app with settings modal.

#### /onePage_deviceMotion_d3/www/

Clean single page app (with a settings page allotted for in UI-Router) including deviceMotion and d3 integration.

#### /Trails_App/www/

Single page app including deviceMotion and d3 integration, interactive svg visual graphics with scatter and line plot
