# 03-css-variables

Given boilerplate under `start/` directory. You can run `npm run serve` to start the hot-reloading development server.

## Task

After running `npm run serve`, visit the localhost link on the terminal; you should see 3 inputs and an image. The 3 inputs corresponds to spacing, blur and base color. There are 3 CSS variables corresponds to the 3 input, namely, `--spacing`, `--blur` and `--base` respectively. 

Your task is to wire up the 3 inputs with their corresponding [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var).
You might find [v-model](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components) useful for wiring the input with Vue's data model.
Then you can set a [computed](https://vuejs.org/v2/guide/computed.html) which computes the corresponding css code to set the css variable. Attach the css styles to the root of the App component.
