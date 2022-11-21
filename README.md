# Introduktion to the Inventory system App

### Backend cloud

- If you want to run the webapp with Azure container registry and docker, Just type in the "trifork-react-frontend" project : `npm start`.

---

### Backend locally

- Do you want to run the webapp locally with docker,type in the "trifork_project_backend"?
- First build the docker image : `docker build -t reactservice2.azurecr.io/reactservice:v1 .`
- Second run the image : `docker run -d -p 8080:80 reactservice2.azurecr.io/reactservice:v1`.

- Remember to change the endpoint in the "trifork-react-frontend".

- Finally in the "trifork-react-frontend" project. Type : `npm start`.
