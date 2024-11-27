# Shop Pre-order Form Frontend

## 🏹 Requirments
Node Version: v20.15.0 

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
