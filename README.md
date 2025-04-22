## Deploying-a-Microservices-Application-on-Kubernetes-with-Minikube
This project demonstrates deploying a microservices-based application on a Kubernetes cluster using Minikube on Windows. It includes a Node.js backend API and a static HTML/CSS/JS frontend, both containerized with Docker and orchestrated with Kubernetes. A CI/CD pipeline using GitHub Actions automates Docker image builds and pushes to Docker Hub.

## Architecture

- **Frontend**: Static HTML/CSS/JS site fetching data from the backend.
- **Backend**: Node.js Express API returning JSON.
- **Kubernetes**: Manages deployments and services.
- **Minikube**: Local Kubernetes cluster.
- **Docker**: Containerizes services.
- **GitHub Actions**: CI/CD pipeline.

## Project Structure

```
microservices-k8s/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── package.json
│   ├── Dockerfile
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
├── .github/
│   ├── workflows/
│   │   ├── ci-cd.yml
├── README.md
```
## Setup Instructions

1. **Install Tools**:

   - Docker Desktop: Enable WSL 2 or Hyper-V.
   - Minikube: `minikube start --driver=docker`.
   - kubectl: Add to system PATH.
   - Node.js and Git: Verify with `node --version`, `git --version`.

2. **Build and Push Docker Images**:

   ```bash
   cd backend
   docker build -t yourusername/backend:latest .
   cd ../frontend
   docker build -t yourusername/frontend:latest .
   docker login
   docker push yourusername/backend:latest
   docker push yourusername/frontend:latest
   ```
3. **Deploy to Kubernetes**:

   ```bash
   minikube start
   kubectl apply -f k8s/
   ```

4. **Access the Application**:

   ```bash
   minikube service frontend
   ```

## Kubernetes Commands

- View deployments: `kubectl get deployments`
- View services: `kubectl get services`
- View pods: `kubectl get pods`
- Scale replicas: `kubectl scale deployment frontend --replicas=3`
- Check logs: `kubectl logs <pod-name>`

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) builds and pushes Docker images on push to `main`. Configure `DOCKER_USERNAME` and `DOCKER_PASSWORD` in GitHub Secrets.

## Testing and Scaling

- Scale frontend: `kubectl scale deployment frontend --replicas=3`
- Simulate failure: `kubectl delete pod <frontend-pod-name>`
- Verify: `kubectl get pods`

## Troubleshooting

- **Minikube fails**: Ensure Docker Desktop is running, check RAM/CPU.
- **CrashLoopBackOff**: Check logs with `kubectl logs <pod-name>`.
- **Frontend can’t reach backend**: Verify `backend:30001` in `frontend/script.js`.
- **Docker push fails**: Run `docker login` with correct credentials.

## Cleanup

```bash
kubectl delete -f k8s/
minikube stop
minikube delete  # Optional
```

## Skills Demonstrated

- Kubernetes orchestration
- Docker containerization
- Microservices architecture
- CI/CD with GitHub Actions

## Architecture Diagram
