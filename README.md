#### Manual reproduction steps

1. `new workspace-name --defaults --minimal --create-application false && cd workspace-name`
2. `ng g lib library && ng g lib library2`
3. Import `LibraryModule` into `Library2Module`
4. change tscongfig paths to:
```
"paths": {
    "library": [
        "dist/library",
        "projects/library/src/public_api.ts"
    ],
    "library2": [
        "dist/library2",
        "projects/library2/src/public_api.ts"
    ]
}
```
5. `ng build library && ng build library2` <-- Fails with `library2` :(