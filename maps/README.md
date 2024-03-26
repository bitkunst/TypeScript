## Installation

### Parcel

-   Tool to help us run TypeScript in the browser

```sh
$ npx parcel index.html
```

### Faker Library

-   https://github.com/faker-js/faker
-   https://github.com/faker-js/faker#typescript-support

```sh
$ npm install @faker-js/faker@7.6.0
```

### Google Maps

-   https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

```sh
$ npm i -D @types/google.maps
```

<br>

## Type Definition Files

-   We can think of a type definition file as kind of an adapter between TypeScript code that we write and JavaScript libraries that we try to work with
-   A type definition file is going to tell the TypeScript compiler all the different functions that are available inside the JavaScript library, what type of argument they take and what type of value those functions return
-   We can think of these type definition files as like an adapter layer of sorts
-   Sometimes type definition files will be installed automatically when you install a JavaScript library
    -   `We have to install a type definition file manually if it is not included for us`

<image src="../public/type-definition-file.png" width="800px" />

### Definitely Typed

-   Type definition files for JavaScript libraries

### Definitely Typed Naming Scheme

```plain
@types/{library name}
```
