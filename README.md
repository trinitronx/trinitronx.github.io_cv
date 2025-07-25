# markdown-cv

A curriculum vitae maintained in plain text and rendered to HTML and PDF using CSS.

Inspired by & based on [markdown-cv](http://elipapa.github.io/markdown-cv).

***

## Distribution

To transform the plain text Markdown CV into a beautiful and shareable HTML page, there are two options:

### I. Use Github Pages to publish it online

1. Delete the existing `gh-pages` branch from your fork. It will only contain this webpage.
2. Create a new branch called `gh-pages`.
3. Head to *yourusername*.github.io/markdown-cv to see your CV live.

Any change you want to make to your CV from then on would have to be done on the `gh-pages` branch and will be immediately rendered by Github Pages.

### II. Build it locally and print a PDF

1. [Clone](https://help.github.com/en/articles/cloning-a-repository) your fork
   of markdown-cv to your local machine.
2. To [install jekyll](https://jekyllrb.com/docs/installation/), and
   dependencies, run `bundle install` from the command line.
3. Type `bundle exec jekyll serve` to render your CV at http://localhost:4000.
4. You can edit the `index.md` file and see the changes live in your browser.
5. To print a PDF, press <kbd>⌘</kbd> + <kbd>p</kbd>. Print and web CSS media
   queries should take care of the styling.

## Styling

The included CSS will render your CV in two styles:

1. `kjhealy` the original default, inspired by [kjhealy's vita
template](https://github.com/kjhealy/kjh-vita).
2. `davewhipp` is a tweaked version of `kjhealy`, with bigger fonts and dates
  right aligned.

To change the default style, simply change the variable in the
`_config.yml` file.

Any other styling is possible. More CSS style contributions and forks are welcome!

### Authors

Eliseo Papa ([Twitter](http://twitter.com/elipapa)/[Github](http://github.com/elipapa)/[Website](https://elipapa.github.io)).

![Eliseo Papa](https://s.gravatar.com/avatar/eae1f0c01afda2bed9ce9cb88f6873f6?s=100)

David Whipp([BlueSky](https://bsky.app/profile/davewhipp.bsky.social)/[Github](https://github.com/davewhipp)/[Website](https://davewhipp.github.io/)).

![David Whipp](https://s.gravatar.com/avatar/68a7f1b765487e51977eaadd57223ca3?s=100)

James Cuzella([Mastodon](https://mastodon.social/@TrinitronX)/[Github](https://github.com/trinitronx)/[Website](https://trinitronx.github.io/)).

![James Cuzella](https://s.gravatar.com/avatar/61dc7a3bba3fee09596c1e70fcc91b9c?s=100)

### License

[MIT License](https://github.com/elipapa/markdown-cv/blob/master/LICENSE)
