
# Automatización de OrangeHRM

## Descripción

Este proyecto automatiza el proceso de registro y búsqueda de empleados en la plataforma **OrangeHRM** utilizando **Playwright** con el patrón **Page Object Model (POM)** para una mejor organización del código y mantenimiento. Los scripts automatizan tareas clave como la navegación a través de la página PIM, el registro de empleados, la asignación de detalles personales, y la búsqueda de empleados ya registrados.

## Técnica de diseño de caso de prueba

### BDD (Behavior Driven Development)

El diseño de los casos de prueba sigue la metodología **BDD (Behavior Driven Development)**, que permite la creación de pruebas en un lenguaje comprensible tanto para técnicos como para no técnicos. Los escenarios de prueba están escritos en **Gherkin**, un lenguaje estructurado que utiliza las siguientes secciones:

- **Given**: Define el estado inicial o las precondiciones para el caso de prueba.
- **When**: Especifica las acciones que se realizan en el sistema.
- **Then**: Describe los resultados esperados.

#### Ejemplos de escenarios:

1. **Registro de un nuevo empleado**: Se valida que el sistema permita registrar un nuevo empleado con todos sus detalles y guardar la información correctamente.
2. **Búsqueda de un empleado registrado**: Se verifica que el sistema permita buscar un empleado existente y que se pueda editar su información.

Estos escenarios se definen en un archivo de características `.feature` para facilitar la lectura y comprensión del comportamiento esperado del sistema.

## Instalación

1. Clonar el repositorio:

    git clone https://github.com/tu-repositorio/RetoPlaywright_SandroHuaman.git

   
2. Instalar las dependencias necesarias utilizando **npm**:

    npm install


3. Para ejecutar las pruebas, utiliza el siguiente comando:

    npx playwright test


## Requisitos del sistema

- Node.js (v14 o superior)
- Playwright
- Git

## Estructura del Proyecto

.
├── pageObjects/
│   ├── loginPage.ts
│   ├── pimPage.ts
│   ├── addEmployeePage.ts
│   ├── employeeListPage.ts
├── tests/
│   ├── orangeHRM.test.ts
├── .gitignore
├── package.json
├── README.md
└── playwright.config.ts

- **pageObjects/**: Contiene las clases de cada página que interactúan con la aplicación, siguiendo el patrón **Page Object Model (POM)**.
- **tests/**: Contiene los archivos de prueba que ejecutan los casos de prueba definidos.
  
## Cómo ejecutar los tests

1. Ejecuta las pruebas con el siguiente comando:
    npx playwright test

2. Los resultados se mostrarán en la consola y se generarán informes automáticos de la ejecución.