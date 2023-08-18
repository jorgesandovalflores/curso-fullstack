import * as soap from 'soap';
import express, { Request, Response } from 'express';
import * as http from 'http';

const app = express();

const service = {
  MyService: {
    MyPort: {
      MyFunction: (args: any) => {
        return { result: `Hello, ${args.name}!` };
      },
    },
  },
};

const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
const wsdlOptions = {
  xml: xml,
  services: service,
};

const server = http.createServer(app);

server.listen(8000, () => {
  const wsdlPath = '/wsdl';
  soap.listen(server, wsdlPath, service, xml);
  console.log(`API SOAP escuchando en el puerto 8000${wsdlPath}?wsdl`);
});