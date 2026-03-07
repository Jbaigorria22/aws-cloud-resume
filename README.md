# AWS Cloud Resume Challenge

Este repositorio contiene el código y la configuración de infraestructura para mi versión del **AWS Cloud Resume Challenge**. 

Se trata de una arquitectura 100% serverless desplegada en Amazon Web Services (AWS), que aloja mi currículum vitae interactivo con un contador de visitas real y automatización de despliegues (CI/CD).

🌐 **Demo en vivo:** [https://d2jsgk01gyceu4.cloudfront.net](https://d2jsgk01gyceu4.cloudfront.net)

---

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en tres pilares fundamentales: Frontend, Backend y Automatización (CI/CD).

### 1. Frontend (Infraestructura Estática)
El currículum está construido con HTML, CSS y JavaScript puro, priorizando la velocidad y la simplicidad.
* **Amazon S3:** Aloja los archivos estáticos del sitio web.
* **Amazon CloudFront:** Actúa como red de distribución de contenido (CDN) global, garantizando baja latencia y proporcionando seguridad mediante HTTPS.

### 2. Backend (Serverless)
El contador de visitas funciona mediante una API que se comunica con una base de datos NoSQL.
* **Amazon DynamoDB:** Base de datos utilizada para almacenar y persistir el recuento de visitas.
* **AWS Lambda:** Función escrita en **Python** que se encarga de consultar y actualizar el número de visitas en la base de datos de manera atómica.
* **Amazon API Gateway:** Funciona como puente (REST API) comunicando el código JavaScript del frontend con la función Lambda en el backend.

### 3. CI/CD (Despliegue Continuo)
Todo el proceso de actualización del sitio está automatizado para evitar intervenciones manuales en la consola de AWS.
* **GitHub Actions:** Pipeline configurado para que, ante cada nuevo `push` a la rama principal, el código se sincronice automáticamente con el bucket de S3 y se invalide la caché de CloudFront para reflejar los cambios en tiempo real.

---

## 🛠️ Tecnologías Utilizadas
* **Cloud:** AWS (S3, CloudFront, API Gateway, Lambda, DynamoDB, IAM)
* **Backend:** Python 3, Boto3 (AWS SDK)
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **DevOps / CI-CD:** Git, GitHub Actions, AWS CLI

---

## 📂 Estructura del Repositorio

```text
aws-cloud-resume/
│
├── frontend/                 # Archivos del sitio web (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/                  # Código fuente de la función Lambda
│   └── lambda_function.py
│
├── .github/workflows/        # Configuración del pipeline de CI/CD
│   └── deploy.yml
│
└── README.md