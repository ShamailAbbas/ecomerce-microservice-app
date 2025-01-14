# Project Overview

This project is divided into the following components:

## Backend Services

- **Authentication Service**: Handles user authentication and JWT token generation.
- **Product Service**: Manages the product catalog.
- **Order Service**: Handles order creation and processing.
- **Notification Service**: Sends notifications (e.g., order updates).

## Frontend

A web application (not containerized) that interacts with the backend services.

## RabbitMQ

Used for asynchronous communication between microservices.

## Nginx

Used for routing traffic locally when running with Docker Compose.

## Kubernetes Manifests

Used for deploying the backend services in a Kubernetes cluster.

# How to Run Locally

To run this project locally, you will need the `nginx` folder and the `docker-compose.yaml` file located at the root of this repository. These files are essential for setting up the local environment using Docker.

However, if you are deploying the project in a Kubernetes (k8s) cluster, these files are not required. Instead, you should use the Kubernetes manifests provided in the `backend/k8s` folder for each service. To route traffic to the appropriate services within the cluster, we utilize an Nginx Ingress.

Please note that the frontend has not been containerized.
