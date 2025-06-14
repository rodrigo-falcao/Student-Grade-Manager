# 🚀 Student-Grade-Manager

![status](https://img.shields.io/badge/status-finalizado-brightgreen?style=flat)
![node](https://img.shields.io/badge/node-%3E%3D14.x-brightgreen?style=flat)
![npm](https://img.shields.io/badge/npm-%3E%3D6.x-blue?style=flat)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat)

Student-Grade-Manager é uma API desenvolvida em Node.js com o objetivo de praticar conceitos de back-end e gerenciamento de dados acadêmicos. A aplicação permite cadastrar, consultar, atualizar e remover notas de alunos.

## 📌 Funcionalidades

- **GET /grades**: Retorna todas as notas cadastradas.
- **POST /grades**: Adiciona uma nova nota.
- **PUT /grades/:id**: Atualiza uma nota existente pelo ID.
- **DELETE /grades/:id**: Remove uma nota existente pelo ID.

## 🧭 Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   node index.js
   ```

3. O servidor estará disponível em:
   ```
   http://localhost:3000/
   ```

## 📚 Exemplos de uso

### **GET /grades**
- **Descrição**: Retorna todas as notas cadastradas.
- **Resposta**:
  ```json
  [
      {
          "id": "x",
          "student": "David",
          "subject": "Math",
          "grade": "7"
      }
  ]
  ```

### **POST /grades**
- **Descrição**: Adiciona uma nova nota.
- **Corpo da requisição**:
  ```json
  {
      "student": "David",
      "subject": "Math",
      "grade": "7"
  }
  ```
- **Resposta**:
  ```json
  {
      "id": "1",
      "student": "David",
      "subject": "Math",
      "grade": "7"
  }
  ```

### **PUT /grades/:id**
- **Descrição**: Atualiza uma nota existente pelo ID.
- **Corpo da requisição**:
  ```json
  {
      "student": "John",
      "subject": "Science",
      "grade": "9"
  }
  ```
- **Resposta**:
  ```json
  {
      "id": "1",
      "student": "John",
      "subject": "Science",
      "grade": "9"
  }
  ```

### **DELETE /grades/:id**
- **Descrição**: Remove uma nota existente pelo ID.
- **Resposta**:
  - Código de status: `204 No Content`

🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊