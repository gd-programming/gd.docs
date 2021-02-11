<div align="center">
    <img src="https://github.com/gd-programming/gddocs/blob/master/assets/gddocs-icon.png?raw=true" height="128" width="128" alt="book">
</div>

# GDDocs

**Some documentation for Geometry Dash's servers, and the game itself.**

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9badf0ef98b242a7883c6dbd4e6c9443)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gd-programming/gddocs&amp;utm_campaign=Badge_Grade)

----

**GDDocs** is a project built to openly give advanced information and readable information for aspiring developers looking to interface with Geometry Dash. Primarily, we aim to create this as a website for people to learn more about the inner workings of geometry dash, along with it's data.

## Running/Building
**You will require Node.js `>=12` to debug and run this project.**

GDDocs is built off of the `docsify` engine, outputted to a generator file to be able to work well on server environments, rather than GitHub pages. This is primarily to allow for easy domain usage and development in a place where it can always update, and be hosted upon locally rather than over GitHub's servers.

As such, rather than having to install using the package.json; (which we would recommended doing anyways using `npm install`,) the installation and such has been included in `generator.js`.

```plain
node generator.js
```

To debug it, you will need to properly clone or pull this repository.

## Contributing

Contributions are preferably made to the documentation, rather than the simple `generator.js` file; unless need be. Contributions to all aspects of this project are preferred to be made over pull requests and issues. Ideas on what to contribute or read over can be read in the [issues](https://github.com/gd-programming/gddocs/issues) section of this repository.

