# To-Do List App (Laravel)
- PHP 8.4+
## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Configure environment**

   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Then set your MySQL credentials in `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=todo_app
   DB_USERNAME=root
   DB_PASSWORD=
   ```

   Make sure the `todo_app` database exists in MySQL before migrating.

4. **Generate app key**
   ```bash
   php artisan key:generate
   ```

5. **Run migrations**
   ```bash
   php artisan migrate
   ```

6. **Start the server**
   ```bash
   php artisan serve
   ```

7. **Open the app**

   Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.
