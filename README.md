# Express, please hide my files!

This repository contain basic implementation of controlling access of file.
There's two directory on this repository:
- `public`
- `protected`

Whatever is in the `public` directory is accessible by anybody,
but, only the worthy individual can access `protected` directory.

#### Accessing Public File

Just send some request to the server. For example:

```sh
curl localhost:8000/industrial-society-and-its-future.pdf
```

#### Accessing Protected File

Send request to the server with `Authorization` where the value is `Bearer letsjustpretendthatiamanaccesstoken`.
For example:

```sh
curl -H 'Authorization: Bearer letsjustpretendthatiamanaccesstoken' localhost:8000/cannot-see-me-without-access-token/the-gay-science.pdf
```

## Author

Fikri Rahmat Nurhidayat <fikrirnurhidayat@gmail.com>
