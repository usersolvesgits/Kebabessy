# Backend Overview
Navigate to the **./src** directory to view the backend of the application.  
Kebabessy uses the **[Photon API](https://photon.komoot.io/)** by **Komoot** (based on **OpenStreetMap**), wich often leads to not being able to find the actual closest Kebab.

## Crates Used
| Crate                                               | Version | Features |
|-----------------------------------------------------|---------|----------|
| [reqwest](https://crates.io/crates/reqwest)         | 0.13.5  | Json     |
| [rocket](https://crates.io/crates/rocket)           | 0.5.1   | Json     |
| [rocket_cors](https://crates.io/crates/rocket_cors) | 0.6.0   |          |
| [serde](https://crates.io/crates/serde)             | 1.0.229 |          |