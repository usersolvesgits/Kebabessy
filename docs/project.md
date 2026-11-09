# Project Structure

## Frontend

Navigate to the **[./src/app](../frontend/src/app)** directory to view the frontend of the application.  
The root of all is the **index.tsx** file.

### Assets and Images

Navigate to the **[./assets/images](../frontend/assets/images)** folder.  
The images in the **/app** folder are the icons used inside the project itself.

### Utilities

The **[./utils](../frontend/utils)** folder contains helper files that provide functionality only (types, functions, etc.).

### Extern Packages

Other than the usual packages you might see in any other Expo project, Kebabessy uses [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) and [webview](https://www.npmjs.com/package/react-native-webview).

---

## Backend

Navigate to the **./src** directory to view the backend of the application.  
Kebabessy uses the **[Photon API](https://photon.komoot.io/)** by **Komoot** (based on **OpenStreetMap**), wich often leads to not being able to find the actual closest Kebab.

### Crates Used
| Crate                                               | Version | Features |
|-----------------------------------------------------|---------|----------|
| [reqwest](https://crates.io/crates/reqwest)         | 0.13.5  | Json     |
| [rocket](https://crates.io/crates/rocket)           | 0.5.1   | Json     |
| [rocket_cors](https://crates.io/crates/rocket_cors) | 0.6.0   |          |
| [serde](https://crates.io/crates/serde)             | 1.0.229 |          |
