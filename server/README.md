```bash
openssl genrsa -out private.pem 4096
```
```bash
openssl rsa -in private.pem -pubout -out public.pem
```
```bash
openssl genrsa -out private.pem 4096 && openssl rsa -in private.pem -pubout -out public.pem
```
or
 
https://travistidwell.com/jsencrypt/demo/
https://cryptotools.net/rsagen