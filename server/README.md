```bash
openssl genrsa -out private.pem 4096
```
```bash
openssl rsa -in private.pem -pubout -out public.pem
```
```bash
openssl genrsa -out private.pem 4096 && openssl rsa -in private.pem -pubout -out public.pem
```

make a key
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```
or
 
https://travistidwell.com/jsencrypt/demo/
https://cryptotools.net/rsagen