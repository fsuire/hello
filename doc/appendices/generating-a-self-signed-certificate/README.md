# How to generate a self-signed certificated

A SSL certificated is composed of three files:
- one for a **private key** (suffixed with `.key`)
- one will be required to generate the certificate file, it's the **certificate signing request** (suffixed with `.csr`)
- and the actual **certificate** (suffixed with `.crt`)

Each SSL certificate is tied to an execution environmemt such as "production" or "development". The following procedure will illustrate the creation of a self-signed SSL certificate for a hypothetical "production" environment.

You need to generate a **private key** named "production" (as the targeted environment):
```bash
openssl genrsa -des3 -out server/keys/production.key 1024
```
A passphrase will be required. Be sure to fill the `CERTIFICATE_PASSPHRASE` environment variable in the corresponding `env_file` file with it (and remember that the environment variables declared in a `env_file` file will override those declared in a `docker-compose.yml` or a `Dockerfile`).

You also need to generate a **CSR** file (Certificate Signing Request), also named "production":
```bash
openssl req -new -key server/keys/production.key -out server/keys/production.csr
```

You can now generate your **self-signed SSL certificate**:
```bash
openssl x509 -req -days 365 -in server/keys/production.csr -signkey server/keys/production.key -out server/keys/production.crt
```
