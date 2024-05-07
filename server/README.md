```bash
openssl genrsa -out private.pem 4096
```
```bash
openssl rsa -in private.pem -pubout -out public.pem
```
```bash
openssl genrsa -out private.pem 4096 && openssl rsa -in private.pem -pubout -out public.pem
```

```bash
openssl genrsa -out certificates/key.pem   
openssl genrsa req -new -key certificates/key.pem -out certificates/csr.pem
openssl x509 -req -days 365 -in certificates/csr.pem -signkey certificates/key.pem -out certificates/cert.pem
```
or
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

https://travistidwell.com/jsencrypt/demo/
https://cryptotools.net/rsagen