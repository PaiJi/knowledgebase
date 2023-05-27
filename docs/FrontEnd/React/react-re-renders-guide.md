---
authors: JiPai
tags: [react]
---

# 读书笔记：React 重渲染指南(react-re-renders-guide)

这是一篇《React 重渲染指南(react-re-renders-guide)》的读书笔记。以下简介摘选之原文。

> React 重新渲染的全面指南。该指南解释了什么是重新渲染，什么是必要和不必要的重新渲染，以及可以触发 React 组件重新渲染的内容。
> 此外还包括最重要的模式，可以帮助防止重新渲染，并列举了一些导致不必要的重新渲染和性能差的反模式。每个模式和反模式都附有视觉辅助和工作代码示例。

## 什么是 React 中的重新渲染？

重新渲染主要分为两种：

- 初始渲染-当组件首次出现在屏幕上时发生
- 重新渲染-已经在屏幕上的组件的第二次及任何连续渲染

## 什么是必要和不必要的重新渲染？

必要的重新渲染 - 是指源更改的组件或直接使用新信息的组件需要重新渲染。例如，如果用户在输入字段中键入，则管理其状态的组件需要在每次按键时更新自身，即进行重新渲染。

不必要的重新渲染 - 是指通过不同的重新渲染机制传播到应用程序中并由于错误或低效率应用程序架构而导致重复呈现的组件。例如，如果用户在输入字段中键入，并且整个页面在每次按键时都会被重绘，则页面已经被无谓地重绘了。

## 什么时候组件会重新渲染?

有四个原因会导致组件重新渲染：状态改变、父（或子）组件重新渲染、上下文更改和钩子函数更改。还有一个误解：当组件的 props 改变时，它会重新渲染。但单独来看这个说法是不正确的。

### 状态改变时

`setState`改变 state 时，组件会重新渲染。事实上，以上四个原因都可以归因成是因为状态发生了改变。

### 父组件发生了重新渲染

当父组件发生重渲染时，子组件会重新渲染。

### Context 发生了改变时

当 Context Provider 中的数据发生变化时，任何使用了其中数据的组件会发生变化。

### 当 Hooks 触发时

Hooks 内部发生的一切都属于使用它的组件，且 Hooks 调用是链式的。

## 咬文嚼字：Props 改变会导致重渲染

Props 改变不是导致子组件重新渲染的直接原因，直接原因是因为父组件的重渲染，根本原因是因为 State 的改变。

## 别这么干

### 在组件中创建别的组件并使用它

```
const Editor=()=>{

const <Input>=()=> <input />

    return (
        <div>
            <Input>
        </div>
    )
}
```

这会导致Editor每次重新渲染时也重新生成`Input`，同时`Input`内部的状态和焦点都会丢失。

## 如何尽量避免导致较大范围的重渲染
### 尽量将State改变导致的重渲染限制在需要的组件里
适当的拆分组件，确保重渲染只发生在需要它的组件内部。

### 将组件作为props传入并使用
```
<div onClick={handleClick}>
    <UserInfo/>
</div>
```

```
const UserInfoWrapper=({children})=>{    
    return <div onClick={handleClick}>{children}</div>
}

const Page=()=>{
    return (
        <UserInfoWrapper>
            <UserInfo/>
        </UserInfoWrapper>
    )
}
```
其核心原理是，`UserInfo` 现在是一个 props，不再被视为一个子组件，而是一个和UserInfoWrapper同级的兄弟组件。

### 使用Memo
使用`React.memo` 来包裹组件，用以提示React不需要在props没有发生变化的情况下重新渲染组件。

### 对正确的组件使用Memo
要认识到组件和props的本质是对象，因此Memo父组件不能阻止子组件的重渲染，应当对子组件进行memo。

### 如果组件被memo，那它的props也必须如此
当一个组件被memo，那么你也要确保它的props也被memo，否则就没有意义。

### 循环中的Key

如果列表是完全静态的，不涉及任何改变顺序的操作，用Index也没关系。如果列表是动态的，使用一个 能真正代表元素的Key 可以帮助React在重新渲染时识别并复用组件，使用Index或者其他不能真正代表元素的key，比如 随机数、本机时间戳、本机生成的uuid，无一例外的都会导致 React 在重新渲染时认为这是一个新的组件，从而触发渲染挂载流程。

### Context中的值也要memo
如果你的Context Provider被父组件重新渲染，而你的value并没有被memo化，就会导致消费了这个Context的组件也被重新渲染。而这不是我们的本意，因此将Context Provider的value正确memo化，也很重要。



## 总结

原文英文的内容翻译由 chatGPT 驱动

来源：

> [https://www.developerway.com/posts/react-re-renders-guide](https://www.developerway.com/posts/react-re-renders-guide)
