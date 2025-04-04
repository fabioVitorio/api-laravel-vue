# 🛠️ API de Autenticação com Laravel 12 e Vue.js 3  

Este projeto consiste em uma API de autenticação desenvolvida com **Laravel 12** e consumida separadamente no **Vue.js 3**. Para a autenticação, foi utilizado o **Laravel Sanctum**.  

## 🚀 Tecnologias Utilizadas  

- **Backend:** Laravel 12, Laravel Sanctum  
- **Frontend:** Vue.js 3  
- **Banco de Dados:** MySQL
- **Autenticação:** Token-based com Sanctum  

### 📌 Instalação e Configuração  

## 🖥️ Backend (Laravel 12)  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/fabioVitorio/api-laravel-vue
   cd taskflow/taskflow-backend
   ```
   
2. Instale as dependências:  
   ```bash
   composer install
   ```

3. Configure o arquivo .env (baseado no .env.example) e gere a chave da aplicação:  
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Configure o banco de dados no .env e execute as migrações:  
   ```bash
   php artisan migrate
   ```

5. Instale o Sanctum e publique sua configuração:  
   ```bash
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   php artisan migrate
   ```

6. Execute o servidor:  
   ```bash
   php artisan serve
   ```

O backend estará rodando em http://127.0.0.1:8000/

## 🖥️ Frontend (Vue.js 3)  

1. Acesse o diretório do frontend:  
   ```bash
   cd taskflow/taskflow-frontend
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Instale as dependências:  
   ```bash
   npm run dev
   ```

O frontend estará rodando em http://localhost:5173/

## 🔗 Rotas da API  

A API conta com as seguintes rotas de autenticação:  

### 📌 Autenticação  

#### 📍 Registrar usuário  
- **Método:** `POST`  
- **Endpoint:** `/register`  
- **Descrição:** Registra um novo usuário  
- **Autenticação:** ❌ Não requer  

#### 📍 Login  
- **Método:** `POST`  
- **Endpoint:** `/login`  
- **Descrição:** Faz login e retorna um token de autenticação  
- **Autenticação:** ❌ Não requer  

#### 📍 Logout  
- **Método:** `POST`  
- **Endpoint:** `/logout`  
- **Descrição:** Encerra a sessão do usuário  
- **Autenticação:** ✅ Requer token  

> **Obs.:** A rota de logout está protegida e requer autenticação via **Bearer Token (Sanctum)**.  
 
