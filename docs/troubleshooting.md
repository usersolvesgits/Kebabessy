# Troubleshooting

## 1) Why doesn't it show the nearest Kebab?

Kebabessy uses the **[Photon API](https://photon.komoot.io/)** based on **OpenStreetMap**.   
If a Kebab isn't present on OpenStreetMap, then it won't appear as an option in the search.  

### **STATUS**: Working on it!

## 2) Why doesn't it ask my location? | Why does it automatically refuse the geolocation permission?

This problem could be caused by a multitude of reasons.

1) Check the privacy options of your OS regarding geolocation (make sure your device actually supports geolocation in the first place).
2) Check the privacy options of your browser (sometimes your browser may automatically refuse or block the request regarding geolocation).
   1) If you're using Chrome, and it still gives you this problem, try using the **[sensors](https://developer.chrome.com/docs/devtools/sensors)** feature, emulating the location of the device.

Some devices (especially desktops) **don't allow geolocation altogether**.  
For testing purposes try using Google Chrome with the sensors feature and see if the problem persists.

### **STATUS**: Device dependent, will not investigate!