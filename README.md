![gd.docs][Icon]

# `gd.docs`

[![gd.docs][Badge]][gd.docs]

**Documentation for Geometry Dash.**

`gd.docs` is a project built to openly give advanced information for aspiring developers looking to interface
with *Geometry Dash*. We primarily aim to create this as a website for people to learn more about the inner
workings of *Geometry Dash* along with its data.

You can find the website over [here][gd.docs].

## Installing

**Python 3.7 is required to build the documentation.**

Firstly, you need to clone the `gd.docs` repository:

```console
$ git clone https://github.com/gd-programming/gd.docs
$ cd gd.docs
```

Then you can install the dependencies via:

```console
$ python -m pip install .
```

Alternatively, if you are using poetry:

```console
$ poetry install
```

## Building

`gd.docs` is built using `mkdocs` library. Building the documentation is as simple as:

```console
$ mkdocs build
```

The result will be placed in the `site` directory.

## Serving

In order to make the documentation easier to work on, one can use the following command:

```console
$ mkdocs serve
```

It will run a local server, updating all changes to documentation on-the-fly.

## Contributing

Contributions to all aspects of this project are preferred to be made over pull requests and issues.
Ideas on what to add or improve can be found in the [issues][Issues] section of this repository.

[gd.docs]: https://docs.gd-programming.org/

[Discord]: https://gd-programming.org/discord
[Issues]: https://github.com/gd-programming/gd.docs/issues
[Badge]: https://github.com/gd-programming/gd.docs/workflows/docs/badge.svg
[Icon]: https://github.com/gd-programming/gd.docs/blob/main/assets/icons/gd.docs.png?raw=true
