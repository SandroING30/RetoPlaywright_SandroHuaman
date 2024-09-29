Feature: Automatización de OrangeHRM

  Como un usuario administrador
  Quiero registrar un nuevo empleado en el sistema OrangeHRM
  Para gestionar el personal de manera eficiente.

  Background: 
    Given que estoy en la página de inicio de sesión de OrangeHRM
    When inicio sesión con las credenciales "Admin" y "admin123"
    Then debería ver el tablero de control de OrangeHRM

  Scenario: Registrar un nuevo empleado
    Given que estoy en la sección de PIM
    When hago clic en "Add Employee"
    And lleno los detalles del empleado con "Sandro", "Zahid", "Huaman" y el ID "0124"
    And agrego detalles personales con el nombre de usuario "Sandro30@pe" y la contraseña "12345*Sa"
    And hago clic en el botón "Save"
    Then debería ver el empleado "Sandro Zahid Huaman" en la lista de empleados

  Scenario: Buscar un empleado registrado
    Given que he registrado un empleado con el nombre "Sandro Zahid Huaman"
    When busco el empleado "Sandro Zahid Huaman" en la lista de empleados
    Then debería poder editar la información del empleado desde la lista de empleados