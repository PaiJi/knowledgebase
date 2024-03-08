# Type 和 Interface 的区别

根据官方文档的入门教学， `interface`能满足我们的大部分需要，直到它不能解决我们的需求时才考虑`type`。

> You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.  
> https://www.typescriptlang.org/play/?e=83#example/types-vs-interfaces

来看看这个官方的 Playground 里提到的几点都是什么：

## 大部分情况下两者都一样

我们在日常开发中可能会觉得两者都差不多，事实也确实如此：

```ts
type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };
//这是合法的
const bird3: BirdInterface = bird1;
```

继承写起来也差不多:

```ts
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// That said, we recommend you use interfaces over type
// aliases. Specifically, because you will get better error
// messages. If you hover over the following errors, you can
// see how TypeScript can provide terser and more focused
// messages when working with interfaces like Chicken.

owl = chicken;
chicken = owl;
```

这里官方提到，建议你优先使用 `interface` 的另一个好处是，可以提供更好的错误提示：

先来看猫头鹰 `Owl` 类型，它是由 `BirdType` 继承而来，而它的报错看起来就像这个：

```
Type 'Chicken' is not assignable to type 'Owl'.
  Property 'nocturnal' is missing in type 'Chicken' but required in type '{ nocturnal: true; }'.
```

再看看鸡 `Chicken` 类型，它是由 `BirdInterface` 继承而来，而它的报错更清晰明了：

```
Type 'Owl' is missing the following properties from type 'Chicken': colourful, flies
```

## Interface 可以被重复申明

> One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed.
> This means you can extend an interface by declaring it a second time.

```ts
interface Kitten {
  purrs: boolean;
}
//这会导致合并但是合法
interface Kitten {
  colour: string;
}

// In the other case a type cannot be changed outside of
// its declaration.

type Puppy = {
  color: string;
};
//这是不合法的，TS会尖叫：Duplicate identifier 'Puppy'
type Puppy = {
  toys: number;
};
```

这里需要注意的是，`interface` 重复申明的情况下，类型会合并，不会覆盖，事实上如果你覆盖其中的类型会发生报错：

```ts
interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
  //这不行，TS报错：
  //Subsequent property declarations must have the same type.  Property 'purrs' must be of type 'boolean', but here has type 'number'
  purrs: number;
}
```

## 公开导出的类型最好是 interface

> on your goals, this difference could be a positive or a negative. However for publicly exposed types, it's a better call to make them an interface.
