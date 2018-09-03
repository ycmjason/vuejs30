# 01-vuejs-drum-kit

Given boilerplate under `start/` directory. You can run `npm run serve` to start the hot-reloading development server.

## Task

After running `npm run serve`, visit the localhost link on the terminal; you should see a grid of squares, each with a label of a sound.

Your task is to make these squares clickable. When they are clicked, they should produce the corresponding sound.

Inspect `src/App.vue` and `src/components/DrumPad.vue` carefully. Notice that inside `src/components/DrumPad.vue`, an `<audio>` tag is added which links to the correct sound already for you.

`<audio>` tags can be controled with the `HTMLMediaElement` API. Breifly read the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) and find out how to programmatically play `<audio>` tags.

You can ask Vue to select the `<audio>` for you with `ref`. See more [here](https://vuejs.org/v2/api/#ref).

## Advanced task

`src/App.vue` defines each sound as an object `{ key, name }`. The advanced task is try to add [`keydown`](https://developer.mozilla.org/en-US/docs/Web/Events/keydown) listener to `window` and play the sound if the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) equals to `sound.key`.
