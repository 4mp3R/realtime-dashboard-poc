const http = require('http');
const express = require('express');
const { Server: SocketServer } = require('socket.io');

const app = express();
const sensorsState = {};

app
  .use(express.json())
  // Serve HTML pages
  .get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
  })
  .get('/sensor', (req, res) => {
    res.sendFile(__dirname + '/sensor.html');
  })
  // REST API endpoint for sensor data submission
  .post('/update', (req, res) => {
    const { sensorValue, sensorId } = req.body;
    sensorsState[sensorId] = sensorValue;

    socketServer.emit('update', sensorsState);

    res.status(200).send({ status: 'ok' });
  });

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('listening on *:3000');
});

// Web socket for real-time data streaming to dashboards

const socketServer = new SocketServer(server);
socketServer.on('connection', () => console.log('Dashboard connected'));

// TODO: Remove items that are older that X minutes (sensors are offline)
