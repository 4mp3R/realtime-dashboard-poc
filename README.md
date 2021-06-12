### Proof of concept app for a dashboard showing real-time sensor data

#### Setup

- `npm install`

#### Usage

- `npm start`
- Open N dashboards that will receive real-time updates `http://localhost:3000/dashboard`
- Open M sensors that will send data to server `http://localhost:3000/sensor`

#### Data flow

```
[ Sensor 1 ]  -----> ==========
                     |        | ------> [ Dashboard A ]
[ Sensor 2 ]  -----> | Server |
                     |        | ------> [ Dashboard B ]
[ Sensor 3 ]  -----> ==========
```
