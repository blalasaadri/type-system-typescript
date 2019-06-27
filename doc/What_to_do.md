# Looking into the TypeScript type system
Here are some resources that can help you look into the TypeScript type system.
1. Generally the TypeScript documentation, but especially:
   - The _Typescript in 5 minutes_ article starting with [type annotations](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#type-annotations)  and ending with [Classes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#classes).
   - The migration guide from JavaScript, especially [`any`, `Object` and `{}`](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#any-object-and-).
   - In the [handbook](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#toc-handbook):
      - [Basic types in TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)
      - [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
      - [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
      - [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
      - [Advanced types in TypeScript](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
      - [Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)
      - [Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html)
2. If you are trying to use Generics with fat arrow functions (= lambdas), check out [this StackOverflow answer](https://stackoverflow.com/a/45576880/2382246).
3. TypeScript 3.0 introduced a new type: `unknown`. You can readd [the official announcement](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type) and/or the article [TypeScript 3.0: The unknown Type](https://mariusschulz.com/blog/typescript-3-0-the-unknown-type) for more information.
4. All of the documentation about the JavaScript type system we used before.