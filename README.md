# 🛒 Shop Pre-order Form Frontend

👍 In the pre-order form application, we can create a pre-order with contact information and multiple item selection. <br>
## 🪶 Features
➖ In this application you can manage users, categories, products, and orders<br>
➖ Admin can create, update, and delete operations<br>
➖ The manager can only view the order items.<br>
➖ Guest user, admin, and manager both can create pre-orders <br>
➖ Order can be searched by name, email <br>
➖ Pagination used <br>

## 🏹 Requirments
Node Version: v20.15.0 <br>
npm: 10.8.1

## ⚙️ Installation guideline
Clone the project from the below link

```sh
git clone https://github.com/jotonsd/shop_pre_order_frontend.git
```
▶️ Run the below command to install npm dependencies

```sh
npm install
```

▶️ Set the proxy URL for API call in file **vite.config.js**
```sh
server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000", // paste you proxy URL here
        changeOrigin: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    },
  }
```


▶️ To run this project run:

```sh
npm run dev
```

▶️ To build this project run:

```sh
npm run build
```

**😃 Happy Coding, Thank You**
