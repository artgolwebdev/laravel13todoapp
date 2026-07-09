- PHP 8.4+
## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/artgolwebdev/laravel13todoapp.git
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
