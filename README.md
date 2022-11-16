# Lifecycle Class Components

3 fasenya yaitu Mounting, Updating, Unmounting

Ketika component mounting, maka constructor dijalankan kemudian method render dijalankan. Setelah menjalankan tahap-tahap tersebut, react akan update DOMnya dan mounting component kita untuk pertama kali. Kemudian setelah react update DOMnya, method componentDidMount dipanggil.

Masuk fase updating, ketika props baru atau setState atau forceUpdate dipanggil maka react akan menjalan method render lagi. Kemudian react akan update DOMnya dengan UI yang baru. Kemudian setelah react update DOMnya, method componentDidUpdate dipanggil.

Masuk fase unmounting, unmounting artinya ketika kita mau pindah halaman react akan menghilangkan halaman tersebut dan sebelum itu terjadi kita bisa memanggil method componentWillUnmount

3 method ini, componentDidMount, componentDidUpdate, componentWillUnmount hanya untuk class component.

Tetapi untuk functional component, functional component masih mengikuti 3 fase secara umum, mounting, updating dan unmounting. Perlu di ingat bahwa functional component itu tidak punya lifecycle, yang bisa dilakukan adalah berpikir secara function dan side effects. Untuk hal itu perlu mempelajari pure functions dan impure function

pure function

```
let s = 10;
const pureFunc = (a, b) => {
  return a + b
}
const impureFunc = (a, b) => {
  s = s + a + b;
  return a + b;
}
```

Pure functions:

1. You can say that pure functions have no side effects.
2. Pure functions must not rely on variables outside their scope
3. Examples of pure functions are strlen(), pow(), sqrt(), array.length etc

based on example that above, You can see that it is causing a side effect(changes) on the external variable. Examples of impure functions are printf(), rand(), time(), etc.
